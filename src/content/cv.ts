export const locales = ['en', 'pt'] as const;

export type Locale = (typeof locales)[number];

export type Copy = Record<Locale, string>;

export type WorkItem = {
	title: Copy;
	outcome: Copy;
	stack: string;
	url?: string;
};

export type Role = {
	title: Copy;
	company: string;
	place: Copy;
	start: Copy;
	end: string | null;
	bullets: Record<Locale, readonly string[]>;
};

export type SkillGroup = {
	label: Copy;
	items: Copy;
};

export type EducationItem = {
	credential: Copy;
	school: string;
	year: string;
};

export type Cv = {
	draft: boolean;
	name: string;
	email: string;
	location: Copy;
	role: Copy;
	description: Copy;
	summary: Record<Locale, readonly string[]>;
	links: readonly { href: string; label: string }[];
	work: readonly WorkItem[];
	experience: readonly Role[];
	skills: readonly SkillGroup[];
	education: readonly EducationItem[];
};

export const cv = {
	draft: false,
	name: 'Carlos Quendera',
	email: 'c.quendera98@gmail.com',
	location: {
		en: 'Montijo, Lisbon, Portugal',
		pt: 'Montijo, Lisboa, Portugal',
	},
	role: {
		en: 'Full-stack developer for HR and recruitment products.',
		pt: 'Programador full-stack para produtos de recursos humanos e recrutamento.',
	},
	description: {
		en: 'Full-stack developer at Betacode, building and migrating HR and recruitment software since 2022.',
		pt: 'Programador full-stack na Betacode, a construir e migrar software de recursos humanos e recrutamento desde 2022.',
	},
	summary: {
		en: [
			'I build and migrate the software an HR and recruitment client runs day to day.',
			'Most of that work is Evolve, a NestJS and Gatsby platform replacing a CakePHP system I still maintain.',
			'I also shipped the public website, the AWS and observability setup around the product, and customer webhooks on Vectorhire.',
		],
		pt: [
			'Construo e migro o software que um cliente de recursos humanos e recrutamento usa no dia a dia.',
			'A maior parte desse trabalho é a Evolve, uma plataforma em NestJS e Gatsby que substitui um sistema em CakePHP que ainda mantenho.',
			'Também fiz o site público, a configuração AWS e de observabilidade à volta do produto, e webhooks para clientes na Vectorhire.',
		],
	},
	links: [
		{ href: 'mailto:c.quendera98@gmail.com', label: 'c.quendera98@gmail.com' },
		{ href: 'https://www.linkedin.com/in/cquendera/', label: 'LinkedIn' },
		{ href: 'https://github.com/camipique', label: 'GitHub' },
	],
	work: [
		{
			title: { en: 'Evolve', pt: 'Evolve' },
			outcome: {
				en: 'Moved the HR product from CakePHP to NestJS and Gatsby, and kept the legacy app in service during the move.',
				pt: 'Passei o produto de recursos humanos de CakePHP para NestJS e Gatsby, e mantive a aplicação legada em serviço durante a mudança.',
			},
			stack: 'NestJS, Gatsby, CakePHP',
		},
		{
			title: { en: 'Public recruitment website', pt: 'Site público de recrutamento' },
			outcome: {
				en: 'Built the client’s public site, backend and frontend.',
				pt: 'Construí o site público do cliente, backend e frontend.',
			},
			stack: 'NestJS, Next.js',
		},
		{
			title: { en: 'Vectorhire webhooks', pt: 'Webhooks da Vectorhire' },
			outcome: {
				en: 'Backend webhooks in production, already used by customers.',
				pt: 'Webhooks de backend em produção, já usados por clientes.',
			},
			stack: 'NestJS',
		},
	],
	experience: [
		{
			title: { en: 'Full-stack developer', pt: 'Programador full-stack' },
			company: 'Betacode',
			place: {
				en: 'Montijo, Lisbon, Portugal',
				pt: 'Montijo, Lisboa, Portugal',
			},
			start: { en: 'Sep 2022', pt: 'set. 2022' },
			end: null,
			bullets: {
				en: [
					'Migrated Evolve off CakePHP onto NestJS and Gatsby, and still maintain the legacy app while features move across. The new platform covers the product the client uses daily, including contracts, payslips, communications, and digital signatures.',
					'Built the public recruitment website end to end, with NestJS on the backend and Next.js on the frontend.',
					'Run the platform around the product: DNS and access on AWS, container images on ECR, Elasticsearch and Kibana for KPIs, and a Grafana and Loki log stack. The product is integrated with SendGrid, Twilio, digital signature, Bizneo, Hirint, and other external APIs.',
					'On Vectorhire, a second recruitment product, I focused on the backend, including webhooks that customers already use.',
				],
				pt: [
					'Migrei a Evolve de CakePHP para NestJS e Gatsby, e continuo a manter a aplicação legada enquanto as funcionalidades passam. A nova plataforma cobre o produto que o cliente usa todos os dias, incluindo contratos, recibos de vencimento, comunicações e assinatura digital.',
					'Construí o site público de recrutamento de ponta a ponta, com NestJS no backend e Next.js no frontend.',
					'Trato da plataforma à volta do produto: DNS e acessos na AWS, imagens de contentores no ECR, Elasticsearch e Kibana para KPIs, e logs com Grafana e Loki. O produto integra SendGrid, Twilio, assinatura digital, Bizneo, Hirint e outras APIs externas.',
					'Na Vectorhire, um segundo produto de recrutamento, concentrei-me no backend, incluindo webhooks que os clientes já usam.',
				],
			},
		},
	],
	skills: [
		{
			label: { en: 'Languages', pt: 'Linguagens' },
			items: { en: 'TypeScript', pt: 'TypeScript' },
		},
		{
			label: { en: 'Platforms', pt: 'Plataformas' },
			items: {
				en: 'NestJS, Next.js, Gatsby, CakePHP',
				pt: 'NestJS, Next.js, Gatsby, CakePHP',
			},
		},
		{
			label: { en: 'Infrastructure', pt: 'Infraestrutura' },
			items: {
				en: 'AWS, Docker, Elasticsearch, Grafana, Loki',
				pt: 'AWS, Docker, Elasticsearch, Grafana, Loki',
			},
		},
	],
	education: [
		{
			credential: {
				en: 'MSc coursework in Informatics Engineering. Thesis not submitted.',
				pt: 'Parte curricular do mestrado em Engenharia Informática. Dissertação não entregue.',
			},
			school: 'NOVA FCT',
			year: '2021',
		},
		{
			credential: {
				en: 'BSc in Informatics Engineering',
				pt: 'Licenciatura em Engenharia Informática',
			},
			school: 'NOVA FCT',
			year: '2019',
		},
	],
} satisfies Cv;

export function formatSpan(start: string, end: string | null, presentLabel: string): string {
	return `${start} — ${end ?? presentLabel}`;
}
