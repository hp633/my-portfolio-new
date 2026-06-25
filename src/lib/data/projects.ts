import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'healthcare-analytics-dashboard',
		color: '#5e95e3',
		description:
			'Built interactive healthcare KPI dashboards analyzing patient trends and operational workflows using Power BI and SQL. Developed executive-level visualizations to support reporting transparency and process optimization while identifying operational bottlenecks across healthcare workflows',
		shortDescription:
			'Built interactive healthcare KPI dashboards analyzing patient trends and operational workflows using Power BI and SQL. Developed executive-level visualizations to support reporting transparency and process optimization while identifying operational bottlenecks across healthcare workflows',
		links: [{ to: 'https://github.com/hp633/Healthcare-Analytics-Dashboard', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Healthcare Analytics Dashboard',
		period: {
			from: new Date(2026, 3)
		},
		skills: getSkills('Power BI', 'SQL', 'Excel', 'Data Visualization', 'KPI Dashboards', 'Process Optimization'),
		type: 'Data & Analytics'
	},
		
		]

export const title = 'Projects';
