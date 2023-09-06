<script lang="ts">
  // import '$lib/theme.js';
  import "../app.css";
  import type { LayoutData } from './$types';
  // import "@fontsource/jetbrains-mono/300.css";
  // import "@fontsource/jetbrains-mono/400.css";
  // import "@fontsource/jetbrains-mono/500.css";
  // import "@fontsource/source-sans-pro/400.css";
  
  import Titlebar from "./Titlebar.svelte";
  import Sidebar from "./Sidebar.svelte";
  import Explorer from "./Explorer.svelte";
  import Tabsbar from "./Tabsbar.svelte";
  import Bottombar from "./Bottombar.svelte";
  export let data: LayoutData
</script>

<Titlebar />
<div class="flex bg-[var(--main-bg)]">
  <Sidebar currentRoute={data.route} />
  <Explorer currentRoute={data.route} />
  <div class="w-full">
    <Tabsbar currentRoute={data.route} />
    <main id="main-editor" class="
      max-[600px]:px-4 max-[600px]:py-8 
      font-['JetBrains_Mono'] text-[color:var(--text-color)] flex-1 h-[85vh] overflow-y-auto scroll-smooth p-8 
      [&::-webkit-scrollbar]:w-[15px] 
      [&::-webkit-scrollbar-track]:border-l-[#1e1f29] [&::-webkit-scrollbar-track]:border-l [&::-webkit-scrollbar-track]:border-solid [&::-webkit-scrollbar-track]:bg-[var(--scrollbar-track-bg)] 
      [&::-webkit-scrollbar-thumb]:border-l-[#1e1f29] [&::-webkit-scrollbar-thumb]:border-l [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:bg-[var(--scrollbar-thumb-bg)]" 
    >
      <slot />
    </main>
  </div>
</div>
<Bottombar />