import type { Locale } from '../content/cv';

export const sectionIds = ['work', 'experience', 'skills', 'education', 'contact'] as const;

export type SectionId = (typeof sectionIds)[number];

type Ui = {
	skip: string;
	navLabel: string;
	langLabel: string;
	themeLabel: string;
	themeSlate: string;
	themeDark: string;
	themeWarm: string;
	themeSlateShort: string;
	themeDarkShort: string;
	themeWarmShort: string;
	present: string;
	draft: string;
	contactLead: string;
	titleSuffix: string;
	english: string;
	portuguese: string;
	nav: Record<SectionId, string>;
};

export const ui: Record<Locale, Ui> = {
	en: {
		skip: 'Skip to content',
		navLabel: 'Sections',
		langLabel: 'Language',
		themeLabel: 'Theme',
		themeSlate: 'Modern tech and slate',
		themeDark: 'Dark mode',
		themeWarm: 'Warm editorial',
		themeSlateShort: 'Slate',
		themeDarkShort: 'Dark',
		themeWarmShort: 'Warm',
		present: 'Present',
		draft: 'Draft copy. The facts below are placeholders until real roles and projects replace them.',
		contactLead: 'Email is the direct way to reach me.',
		titleSuffix: 'CV',
		english: 'English',
		portuguese: 'Portuguese',
		nav: {
			work: 'Work',
			experience: 'Experience',
			skills: 'Skills',
			education: 'Education',
			contact: 'Contact',
		},
	},
	pt: {
		skip: 'Saltar para o conteúdo',
		navLabel: 'Secções',
		langLabel: 'Idioma',
		themeLabel: 'Tema',
		themeSlate: 'Tecnologia moderna',
		themeDark: 'Modo escuro',
		themeWarm: 'Editorial quente',
		themeSlateShort: 'Slate',
		themeDarkShort: 'Escuro',
		themeWarmShort: 'Quente',
		present: 'Atual',
		draft:
			'Texto em rascunho. Os factos abaixo são marcadores até serem substituídos por funções e projetos reais.',
		contactLead: 'O email é a forma direta de contacto.',
		titleSuffix: 'Currículo',
		english: 'Inglês',
		portuguese: 'Português',
		nav: {
			work: 'Trabalho',
			experience: 'Experiência',
			skills: 'Competências',
			education: 'Formação',
			contact: 'Contacto',
		},
	},
};
