import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'NJIT',
		company: 'New Jersey Institute of Technology (NJIT)',
		description: 'Student Office Assitant (On-Campus)',
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Newark, NJ, USA',
		period: { from: new Date(2026, 0), to: new Date(2026, 4) },
		skills: getSkills('Excel'),
		name: 'Student Office Assitant (On-Campus)',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: `- Developed structured Excel tracking systems to monitor operational metrics and improve data transparency.`
	},
	{
		slug: 'pwc-associate',
		company: 'PricewaterhouseCoopers (PwC)',
		description: 'Associate Business Analyst (Compliance & Technology)',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Mumbai, India',
		period: { from: new Date(2023, 7), to: new Date(2024, 11) },
		skills: getSkills('Power BI', 'SQL'),
		name: 'Associate Business Analyst (Compliance & Technology)',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: `- Developed executive-level Power BI dashboards tracking product KPIs, improving reporting transparency by 30%. 
		- Facilitated workshops with 10+ stakeholders to reduce requirement gaps by 30% and development rework by 20%. 
		- Created wireframes using Adobe XD to improve user acceptance by 15%, and delivered 30+ demos reducing onboarding time by 25%.`
	},
	{
		slug: 'cacti-global',
		company: 'Cacti Global Pvt Ltd (Secondment with PwC)',
		description: 'Business Analyst',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Mumbai, India',
		period: { from: new Date(2022, 1), to: new Date(2023, 7) },
		skills: getSkills('Adobe XD', 'Visio'),
		name: 'Business Analyst (Contracts and Compliance)',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: `- Owned end-to-end requirements lifecycle for an enterprise platform supporting 100+ users. 
		- Produced 50+ BRDs and process flow diagrams, accelerating development cycles by 20% and reducing rework by 20%. 
		- Authored SOPs and release documentation that improved user adoption by 30% and lowered support tickets by 20%.`
	},
	{
		slug: 'sportz-interactive',
		company: 'Sportz Interactive Pvt Ltd',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.FullTime,
		type: 'Senior Product Associate (Data and Video Technology)',
		location: 'Mumbai, India',
		period: {from: new Date(2019, 11), to: new Date(2022, 1) },
		skills: getSkills('Jira', 'Product Roadmap'),
		name: 'Senior Product Associate (Data and Video Technology)',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: `- Managed Agile ceremonies (sprint planning, backlog grooming, stand-ups) using Jira, increasing team delivery velocity by 75%. 
		- Translated complex requirements into testable user stories. 
		- Analyzed user performance data to drive product enhancements, increasing new customer trials by 22% and revenue by 15%. 
		- Led UAT coordination to drop post-release defects by 20%.`
	},
	{
		slug: 'Techlink',
		company: 'Techlink Infoware Pvt Ltd',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.PartTime,
		type: 'Business Development Intern',
		location: 'Mumbai, India',
		period: {from: new Date(2019, 2), to: new Date(2019, 4) },
		skills: getSkills('ERP', 'UAT'),
		name: 'Business Development Intern',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: `- Led testing and documentation of ERP systems, identifying over 20 issues for prompt resolution. 
		 - Designed user-friendly web and Windows forms for in-house applications, improving workflow efficiency.`
	},
	{
		slug: 'Comida Pvt Ltd',
		company: 'Comida Pvt Ltd',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.PartTime,
		type: 'Summer Intern',
		location: 'Mumbai, India',
		period: {from: new Date(2016, 2), to: new Date(2016, 4) },
		skills: getSkills('Drupal', 'HTML', 'CSS'),
		name: 'Summer Intern',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: `Redesigned a corporate finance website using Drupal, enhancing traffic and user interaction by 30%. 
		Built clean, responsive front-end modules using HTML and CSS.`
	}
];

export const title = 'Experience';
