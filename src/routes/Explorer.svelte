<script lang="ts">
  import ChevronRight from "$lib/components/icons/ChevronRight.svelte";
  import ReactIcon from "$lib/components/icons/ReactIcon.svelte";
  import HtmlIcon from "$lib/components/icons/HtmlIcon.svelte";
  import CssIcon from "$lib/components/icons/CssIcon.svelte";
  import JsIcon from "$lib/components/icons/JsIcon.svelte";
  import JsonIcon from "$lib/components/icons/JsonIcon.svelte";
  import MarkdownIcon from "$lib/components/icons/MarkdownIcon.svelte";

  const explorerItems = [
    {
      name: 'home.jsx',
      path: '/',
      Icon: ReactIcon,
    },
    {
      name: 'about.html',
      path: '/about',
      Icon: HtmlIcon,
    },
    {
      name: 'contact.css',
      path: '/contact',
      Icon: CssIcon,
    },
    {
      name: 'projects.js',
      path: '/projects',
      Icon: JsIcon
    },
    {
      name: 'articles.json',
      path: '/articles',
      Icon: JsonIcon
    },
    {
      name: 'github.md',
      path: '/github',
      Icon: MarkdownIcon
    },
  ];
  let portfolioOpen = true;
  const handleClick = () => {
    portfolioOpen = !portfolioOpen;
  }
</script>

<div class="w-[18vw] text-[rgb(225,228,232)] border-r-[color:var(--explorer-border)] border-r border-solid bg-[var(--explorer-bg)] font-['Source_Sans_Pro'] 
  min-[2000px]:w-[10vw] max-[900px]:w-[20vw] max-[600px]:hidden"
>
  <p class="font-light uppercase text-[0.9rem] tracking-[1px] mb-3 py-2 px-3">Explorer</p>
  <div>
    <input
      type="checkbox"
      class="absolute opacity-0 z-[-1]"
      id="portfolio-checkbox"
      checked={portfolioOpen}
      on:click|preventDefault={handleClick}
    />
    <label
      class="uppercase text-[0.8rem] tracking-[1px] flex items-center cursor-pointer px-2 py-0 font-bold"
      for="portfolio-checkbox"
    >
      <ChevronRight
        className={`transition-transform duration-[0.2s] ${portfolioOpen ? 'transform rotate-90' : ''}`}
      />
      <!-- <p class="ml-1"> -->
        Portfolio
      <!-- </p> -->
    </label>
    <div
      class={`px-0 py-2 cursor-pointer ${portfolioOpen ? 'block' : 'hidden'}`}
    >
    {#each explorerItems as { name, path, Icon }}
      <div class="flex items-center [font-size:0.875rem] px-4 py-[0.2rem] hover:bg-[var(--explorer-hover-bg)]">
        <Icon />
        <p class="ml-[5px]">{name}</p>
      </div>
    {/each}
    </div>
  </div>
</div>