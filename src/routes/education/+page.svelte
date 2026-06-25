<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';

	let title = 'Education';
	let search = '';

	// Static academic history array matching your background
	const items = [
		{
			slug: 'njit',
			degree: 'Master’s in Management (Business Analytics)',
			organization: 'New Jersey Institute of Technology',
			location: 'Newark, NJ, USA',
			duration: 'Jan 2025 - May 2026',
			subjects: ['Decision Analysis', 'Enterprise DBMS', 'Python in Web API Development', 'Global Project Management', 'Introduction to Big Data']
		},
		{
			slug: 'IBS',
			degree: 'Post Graduate Program Management',
			organization: 'ICFAI IBS Mumbai',
			location: 'Mumbai, India',
			duration: '2018 - 2020',
			subjects: ['Information Systems For Managers', 'Accounting for Managers', 'Managerial economics', 'Financial Management','Marketing Management']
		},
		{
			slug: 'University of Mumbai',
			degree: 'Bachelor of Science in Information Technology',
			organization: 'University of Mumbai',
			location: 'Mumbai, India',
			duration: '2014 - 2017',
			subjects: ['Linux', 'Javascirpt', 'Quantitative Techniques']
		}
	];

	let result = items;

	const onSearch = (ev: CustomEvent<{ search: string }>) => {
		const s = ev.detail.search.toLowerCase();
		result = items.filter((it) => {
			return (
				it.degree.toLowerCase().includes(s) ||
				it.organization.toLowerCase().includes(s) ||
				it.location.toLowerCase().includes(s) ||
				it.subjects.some((sub) => sub.toLowerCase().includes(s))
			);
		});
	};
</script>

<SearchPage {title} {search} on:search={onSearch}>
	<div class="col items-center relative mt-10 flex-1">
		{#if result.length === 0}
			<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
				<UIcon icon="i-carbon-development" classes="text-3.5em" />
				<p class="font-300">Could not find anything...</p>
			</div>
		{:else}
			<div class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded" />
			
			{#each result as education, index (education.slug)}
				<div class={`flex ${index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'} relative items-center w-full my-[10px]`}>
					<div class="flex-1 hidden lg:flex" />
					<div class="hidden lg:inline p-15px bg-[var(--main)] rounded z-10">
						<UIcon icon="i-carbon-condition-point" />
					</div>
					<div class="col flex-1 items-stretch">
						<Card>
							<div class="flex-1 col gap-2 items-stretch text-left">
								<div class="text-[1.3em] font-semibold text-[var(--accent-text)]">{education.degree}</div>
								<div class="text-[1.1em] font-medium opacity-90">{education.organization}</div>
								
								<div class="col text-[0.9em] opacity-60">
									<CardDivider />
									<div class="row items-center gap-2">
										<UIcon icon="i-carbon-location" />
										{education.location}
									</div>
									<CardDivider />
									<div class="row items-center gap-2">
										<UIcon icon="i-carbon-time" />
										{education.duration}
									</div>
									<CardDivider />
								</div>
								
								<div class="row flex-wrap gap-1 mt-2">
									{#each education.subjects as subject}
										<Chip>{subject}</Chip>
									{/each}
								</div>
							</div>
						</Card>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</SearchPage>