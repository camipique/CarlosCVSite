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

export type Skill = {
	name: string;
	// First month of regular use, as 'YYYY-MM'. Years are counted from it.
	since?: string;
};

export type SkillGroup = {
	label: Copy;
	items: readonly Skill[];
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
		en: 'Full-stack developer focused on backend systems in TypeScript.',
		pt: 'Programador full-stack focado em sistemas de backend em TypeScript.',
	},
	description: {
		en: 'Full-stack developer at Betacode and main backend contributor to a 140+ module NestJS platform serving 1.4k+ active people.',
		pt: 'Programador full-stack na Betacode e principal contribuidor do backend de uma plataforma NestJS com mais de 140 módulos, ao serviço de mais de 1400 pessoas ativas.',
	},
	summary: {
		en: [
			'I’m a full-stack developer at Betacode. Since 2022 I’ve worked on a client’s core business platform.',
			'I’m the main contributor to its NestJS backend: 140+ modules serving more than 1,400 active people, replacing a legacy CakePHP system while it stays live.',
			'I also built the client’s public website, which has 18,500 registered users since launch.',
		],
		pt: [
			'Sou programador full-stack na Betacode. Desde 2022 trabalho na plataforma de negócio principal de um cliente.',
			'Sou o principal contribuidor do backend em NestJS: mais de 140 módulos ao serviço de mais de 1400 pessoas ativas, a substituir um sistema legado em CakePHP que continua em produção.',
			'Também construí o site público do cliente, que já tem 18 500 utilizadores registados desde o lançamento.',
		],
	},
	links: [
		{ href: 'mailto:c.quendera98@gmail.com', label: 'c.quendera98@gmail.com' },
		{ href: 'https://www.linkedin.com/in/cquendera/', label: 'LinkedIn' },
		{ href: 'https://github.com/camipique', label: 'GitHub' },
	],
	work: [
		{
			title: { en: 'Workforce management platform', pt: 'Plataforma de gestão de pessoas' },
			outcome: {
				en: 'Wrote about 60% of a new 140+ module backend that handles hiring, contracts and payroll for 1.4k+ active workers, replacing a CakePHP system that stays live during the move.',
				pt: 'Escrevi cerca de 60% de um novo backend com mais de 140 módulos que trata do recrutamento, dos contratos e dos salários de mais de 1400 trabalhadores ativos, a substituir um sistema em CakePHP que continua em produção durante a migração.',
			},
			stack: 'NestJS, Gatsby, MySQL, MongoDB, Redis',
		},
		{
			title: { en: 'Public careers website', pt: 'Site público de carreiras' },
			outcome: {
				en: 'Built most of the backend and frontend of the client’s careers site, which has 18.5k registered candidates since launch.',
				pt: 'Construí a maior parte do backend e do frontend do site de carreiras do cliente, que já tem 18,5 mil candidatos registados desde o lançamento.',
			},
			stack: 'NestJS, Next.js',
		},
		{
			title: { en: 'Digital contract signing', pt: 'Assinatura digital de contratos' },
			outcome: {
				en: 'Built the online contract-signing flow, integrated with an external digital-signature provider.',
				pt: 'Construí o fluxo de assinatura de contratos online, integrado com um fornecedor externo de assinatura digital.',
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
					'Main contributor to a client’s workforce management platform: a NestJS backend of 140+ modules that runs hiring, contracts and payroll for 1.4k+ active workers, with 1.4k+ payslips a month.',
					'Replacing the client’s CakePHP system module by module, and keeping the legacy app in service so the business always has a working system.',
					'Built digital contract signing and contract management, and co-built a two-way sync with an external recruiting platform using Redis queues and background workers.',
					'Integrated the platform with job boards including LinkedIn, plus SendGrid, Twilio, other third-party APIs and an external ERP database.',
					'Built most of the client’s public careers website (NestJS and Next.js), which has 18.5k registered candidates since launch.',
					'Run the infrastructure: AWS (DNS, access, ECR), Docker, Grafana and Loki for logs, and Elasticsearch and Kibana for business KPIs.',
					'On a second product, built the webhooks customers use to receive events in their own systems.',
				],
				pt: [
					'Principal contribuidor da plataforma de gestão de pessoas de um cliente: um backend em NestJS com mais de 140 módulos que gere o recrutamento, os contratos e os salários de mais de 1400 trabalhadores ativos, com mais de 1400 recibos por mês.',
					'Substituo o sistema em CakePHP do cliente módulo a módulo e mantenho a aplicação legada em serviço, para que o negócio tenha sempre um sistema a funcionar.',
					'Construí a assinatura digital e a gestão de contratos, e desenvolvi em conjunto uma sincronização bidirecional com uma plataforma de recrutamento externa, com filas Redis e workers em segundo plano.',
					'Integrei a plataforma com portais de emprego, incluindo o LinkedIn, e com a SendGrid, a Twilio, outras APIs externas e uma base de dados de ERP externa.',
					'Construí a maior parte do site público de carreiras do cliente (NestJS e Next.js), que já tem 18,5 mil candidatos registados desde o lançamento.',
					'Trato da infraestrutura: AWS (DNS, acessos, ECR), Docker, Grafana e Loki para logs, e Elasticsearch e Kibana para KPIs de negócio.',
					'Noutro produto, construí os webhooks que os clientes usam para receber eventos nos seus próprios sistemas.',
				],
			},
		},
	],
	skills: [
		{
			label: { en: 'Daily', pt: 'Uso diário' },
			items: [
				{ name: 'TypeScript', since: '2023-10' },
				{ name: 'NestJS', since: '2023-10' },
				{ name: 'React', since: '2023-10' },
				{ name: 'Next.js', since: '2024-05' },
				{ name: 'Gatsby' },
				{ name: 'Node.js' },
				{ name: 'MySQL' },
				{ name: 'MongoDB' },
				{ name: 'Redis' },
				{ name: 'Tailwind CSS' },
			],
		},
		{
			label: { en: 'Production experience', pt: 'Experiência em produção' },
			items: [
				{ name: 'PHP / CakePHP', since: '2022-09' },
				{ name: 'Docker' },
				{ name: 'AWS' },
				{ name: 'TypeORM' },
				{ name: 'Mongoose' },
				{ name: 'Bull' },
				{ name: 'Jest' },
				{ name: 'Nx' },
				{ name: 'Bitbucket Pipelines' },
				{ name: 'REST / OpenAPI' },
				{ name: 'Elasticsearch / Kibana' },
				{ name: 'Grafana / Loki' },
			],
		},
		{
			label: { en: 'Familiar', pt: 'Conhecimentos' },
			items: [{ name: 'Storybook' }],
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
