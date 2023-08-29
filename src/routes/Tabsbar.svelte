<script lang="ts">
  import { page } from "$app/stores";
  import ReactIcon from "$lib/components/icons/ReactIcon.svelte";
  import HtmlIcon from "$lib/components/icons/HtmlIcon.svelte";
  import CssIcon from "$lib/components/icons/CssIcon.svelte";
  import JsIcon from "$lib/components/icons/JsIcon.svelte";
  import JsonIcon from "$lib/components/icons/JsonIcon.svelte";
  import MarkdownIcon from "$lib/components/icons/MarkdownIcon.svelte";
  import Tab from "./Tab.svelte";

  const tabs = [
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
  export let route = $page.route.id;
</script>

<div class="flex overflow-x-auto bg-[var(--tabs-bg)] 
  max-[900px]:w-[78vw] 
  max-[600px]:w-[89.5vw]"
>
  {#each tabs as { name, path, Icon } }
    <Tab fileName={name} path={path} active={route == path}>
      <Icon />
    </Tab>
  {/each}
</div>