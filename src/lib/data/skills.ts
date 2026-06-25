import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Data & Analytics', slug: 'D&A' }),
	defineSkillCategory({ name: 'Project & Workflow Tools', slug: 'P&WT' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'AI & Automation', slug: 'AA' }),
	defineSkillCategory({ name: 'Business Analysis', slug: 'BA' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'Power BI',
		color: 'yellow',
		description:
			'Microsoft Power BI is a data visualization platform used primarily for business intelligence purposes. Power BI stands for Power Business Intelligence and refers to a collection of software services, tools, and connectors that help you transform data from multiple sources into actionable insights.',
		logo: Assets.PowerBI,
		name: 'Power BI',
		category: 'D&A'
	}),
	defineSkill({
		slug: 'tb',
		color: 'red',
		description:
			'Tableau is the broadest and deepest end-to-end analytics platform, with built in Salesforce AI. Tableau can help you use data responsibly to drive better business outcomes with fully-integrated data management, data governance, data visualization tools, data storytelling, and collaboration.',
		logo: Assets.Tableau,
		name: 'Tableau',
		category: 'D&A'
	}),
	defineSkill({
		slug: 'SQL',
		color: 'blue',
		description:
			'SQL, or Structured Query Language, is a language specifically designed for accessing and interacting with databases. It allows users to create tables, modify data, and retrieve information in a fast and efficient manner. SQL is one of the most popular query languages in use today.',
		logo: Assets.SQL,
		name: 'SQL',
		category: 'D&A'
	}),
	defineSkill({
		slug: 'Excel',
		color: 'green',
		description:
			'Excel is part of Microsoft’s 365 suite of software, alongside Word, PowerPoint, Teams, Outlook, and more. Microsoft Excel is a spreadsheet program that allows users to organize, format, and calculate data in a spreadsheet. Excel users can create pivot tables and graphs to help them compute and visualize complex data sets.',
		logo: Assets.Excel,
		name: 'Excel',
		category: 'D&A'
	}),
	defineSkill({
		slug: 'Google Analytics',
		color: 'yellow',
		description:
			'Google Analytics is a platform that collects data from your websites and apps to create reports that provide insights into your business.Google Analytics connects your customer and campaign data across devices and platforms in one place and uses Google AI to automatically find the insights that matter most.',
		logo: Assets.GoogleAnalytics,
		name: 'Google Analytics',
		category: 'D&A'
	}),
	defineSkill({
		slug: 'Jira',
		color: 'blue',
		description:
			'Jira is a powerful project and issue-tracking software developed by Atlassian. It allows teams to plan workflows, assign tasks, and track project progress in real-time using customizable boards, timelines, and reporting tools.',
		logo: Assets.Jira,
		name: 'Jira',
		category: 'P&WT'
	}),
	defineSkill({
		slug: 'Confluence',
		color: 'blue',
		description:
			'Confluence is your team workspace for creating and sharing knowledge. Use AI to draft, summarize, and find answers so projects move faster.',
		logo: Assets.Confluence,
		name: 'Confluence',
		category: 'P&WT'
	}),
	defineSkill({
		slug: 'Adobe XD',
		color: 'purple',
		description:
			'Adobe XD is a vector-based digital design and prototyping tool used to create wireframes, mockups, and interactive user experiences for web and mobile applications. It allows designers to easily build click-through prototypes, implement animations, and share designs with clients or developers.',
		logo: Assets.Adobe,
		name: 'Adobe XD',
		category: 'P&WT'
	}),
	defineSkill({
		slug: 'PDLC',
		color: 'orange',
		description:
			'The Product Development Life Cycle (PDLC) is the structured, multi-stage process an organization uses to conceptualize, design, build, launch, and refine a product. It transforms an initial idea into a market-ready offering that drives customer value and business growth.',
		logo: Assets.Unknown,
		name: 'Product Development Life Cycle',
		category: 'P&WT'
	}),
	defineSkill({
		slug: 'SDLC',
		color: 'orange',
		description: 
			'The Software Development Life Cycle (SDLC) is a structured, step-by-step framework that development teams use to design, build, test, and maintain high-quality software. Its primary goal is to minimize project risks, control costs, and ensure the final product meets customer expectations.',
		logo: Assets.Unknown,
		name: 'Software Development Life Cycle',
		category: 'P&WT'
	}),
	defineSkill({
		slug: 'AS',
		color: 'orange',
		description: svelte,
		logo: Assets.Unknown,
		name: 'Agile/Scrum',
		category: 'P&WT'
	}),
	defineSkill({
		slug: 'BRD',
		color: 'orange',
		description: svelte,
		logo: Assets.Unknown,
		name: 'Business Requirement Document',
		category: 'BA'
	}),
	defineSkill({
		slug: 'FRD',
		color: 'orange',
		description: svelte,
		logo: Assets.Unknown,
		name: 'Functional Requirement Document',
		category: 'BA'
	}),
	defineSkill({
		slug: 'US',
		color: 'orange',
		description: svelte,
		logo: Assets.Unknown,
		name: 'User Stories',
		category: 'BA'
	}),
	defineSkill({
		slug: 'MC',
		color: 'orange',
		description: svelte,
		logo: Assets.Copilot,
		name: 'Microsoft Copilot',
		category: 'AA'
	}),
	defineSkill({
		slug: 'GAI',
		color: 'red',
		description: svelte,
		logo: Assets.Gemini,
		name: 'Gemini AI',
		category: 'AA'
	}),
	defineSkill({
		slug: 'PE',
		color: 'orange',
		description: svelte,
		logo: Assets.Unknown,
		name: 'Prompt Engineering',
		category: 'AA'
	}),
	defineSkill({
		slug: 'Rovo',
		color: 'orange',
		description: svelte,
		logo: Assets.Rovo,
		name: 'Rovo',
		category: 'AA'
	}),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
