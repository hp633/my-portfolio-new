<script lang="ts">
	import { titleSuffix } from '@data/app';
	import { useTitle } from '$lib/utils/helpers';

	const name = "Hinal";
	const lastName = "Prabhu";
	const title = "Product Owner & Business Analyst";
	const description = "Over 5 years of experience driving cross-functional Agile teams, optimizing product roadmaps, and translating complex stakeholder needs into high-impact user stories. Proven track record of improving team velocity and data transparency.";
	const email = "hinalprabhu@gmail.com";
</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>

<section class="fixed inset-x-0 bottom-0 top-[44px] bg-black text-white px-6 md:px-16 lg:px-24 flex flex-col justify-between overflow-hidden select-none">
  
  <div class="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-900/10 blur-[120px] pointer-events-none" />
  <div class="absolute right-[-5%] top-[10%] w-[45vw] h-[45vw] rounded-full bg-purple-900/15 blur-[130px] pointer-events-none" />

  <header class="relative z-10 flex items-center justify-between w-full pt-4 opacity-0 pointer-events-none">
    <div class="font-harmond text-2xl font-bold tracking-tight">HP<span class="text-purple-500">.</span></div>
  </header>

  <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto w-full max-w-7xl mx-auto pb-4">
    
    <div class="lg:col-span-7 flex flex-col justify-center text-left">
      
      <div class="flex items-center gap-3 text-[10px] font-nohemi font-bold uppercase tracking-[0.3em] text-white/50 mb-4">
        <span class="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
        Available for Opportunities
        <span class="text-white/20">•</span>
        USA
      </div>

      <h1 class="font-harmond text-5xl md:text-[5rem] font-normal tracking-tight leading-[0.95] mb-4 uppercase">
        {name} <br />
        <span class="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          {lastName}
        </span>
      </h1>

      <div class="flex items-center gap-4 mb-4">
        <div class="h-[1px] w-12 bg-gradient-to-r from-cyan-500 to-pink-500" />
        <p class="font-harmond text-lg md:text-xl italic font-light tracking-wide text-white/90">
          {title}
        </p>
      </div>

      <p class="font-nohemi text-xs md:text-sm text-white/40 max-w-xl leading-relaxed font-light mb-6">
        {description}
      </p>

      <div class="flex flex-wrap items-center gap-4">
        <a 
          href="#projects" 
          class="px-6 py-3 rounded-xl text-xs font-nohemi font-bold uppercase tracking-widest text-white bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:opacity-90 transition-all shadow-lg shadow-purple-500/10"
        >
          Explore Strategy
        </a>
        
        <a 
          href="/resume.pdf" 
          download
          class="flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-nohemi font-bold uppercase tracking-widest text-white/80 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
        >
        <a href="{base}/resume.pdf" download>
  Download Resume
</a>
          <svg class="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </div>
    </div>

    <div class="lg:col-span-5 flex justify-center items-center relative h-[320px]">
      
      <div class="absolute w-[240px] h-[240px] rounded-full border border-dashed border-white/10 animate-[spin_100s_linear_infinite]" />
      <div class="absolute w-[280px] h-[280px] rounded-full border border-white/5" />

      <div class="absolute top-[15%] right-[5%] w-2 h-2 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
      <div class="absolute bottom-[20%] left-[2%] w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

      <div class="relative w-[220px] h-[220px] rounded-full p-[3px] bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 shadow-2xl shadow-purple-500/20">
        <div class="w-full h-full rounded-full bg-black overflow-hidden flex items-center justify-center">
          <img 
            src="/hinal-portrait.jpeg" 
            alt="Hinal Prabhu Portrait" 
            class="w-full h-full object-cover scale-105"
          />
        </div>
      </div>

      <div class="absolute left-[-10%] right-[-10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-0" />
    </div>

  </div>

  <div class="w-full py-2 relative z-10" />
</section>