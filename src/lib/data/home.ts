import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Hinal';

export const lastName = 'Prabhu';

export const description =
	'Over 5 years of experience driving cross-functional Agile teams, optimizing product roadmaps, and translating complex stakeholder needs into high-impact user stories. Proven track record of improving team velocity and data transparency.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/hinalpr/'
	},
	{
		platform: Platform.Email,
		link: 'hinalprabhu@gmail.com'
	},
];

export const skills = getSkills('html', 'css', 'SQL', 'Power BI', 'Tableau', 'Adobe XD');
