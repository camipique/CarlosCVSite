import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url);

function htmlFiles(dir, found = []) {
	for (const name of readdirSync(dir)) {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) htmlFiles(path, found);
		else if (name.endsWith('.html')) found.push(path);
	}
	return found;
}

const hashes = new Set();
const scriptPattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/g;

for (const file of htmlFiles(dist.pathname)) {
	const html = readFileSync(file, 'utf8');
	for (const match of html.matchAll(scriptPattern)) {
		const attrs = match[1] ?? '';
		const body = match[2] ?? '';
		if (/\ssrc\s*=/.test(attrs) || body.trim() === '') continue;
		const digest = createHash('sha256').update(body).digest('base64');
		hashes.add(`'sha256-${digest}'`);
	}
}

const headersPath = join(dist.pathname, '_headers');
const headers = readFileSync(headersPath, 'utf8');
const extra = [...hashes].join(' ');
const next = headers.replace("script-src 'self'", `script-src 'self'${extra ? ` ${extra}` : ''}`);

if (next === headers && hashes.size > 0) {
	throw new Error('Content-Security-Policy script-src was not found in dist/_headers');
}

writeFileSync(headersPath, next);
