<script>
  // import "../app.css";

  // import "@fontsource/jetbrains-mono/300.css";
  // import "@fontsource/jetbrains-mono/400.css";
  // import "@fontsource/jetbrains-mono/500.css";
  // import "@fontsource/source-sans-pro/400.css";
/* @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&display=swap'); */

  import Titlebar from "./Titlebar.svelte";
  import Sidebar from "./Sidebar.svelte";
  import Explorer from "./Explorer.svelte";
  import Tabsbar from "./Tabsbar.svelte";
  import Bottombar from "./Bottombar.svelte";
</script>

<Titlebar />
<div class="flex bg-[var(--main-bg)]">
  <Sidebar />
  <Explorer />
  <div class="w-full">
    <Tabsbar />
    <main id="main-editor" class="
      max-[600px]:px-4 max-[600px]:py-8 
      font-['JetBrains_Mono'] text-[color:var(--text-color)] flex-1 h-[85vh] overflow-y-auto scroll-smooth p-8h 
      [&::-webkit-scrollbar]:w-[15px] 
      [&::-webkit-scrollbar-track]:border-l-[#1e1f29] [&::-webkit-scrollbar-track]:border-l [&::-webkit-scrollbar-track]:border-solid [&::-webkit-scrollbar-track]:bg-[var(--scrollbar-track-bg)] 
      [&::-webkit-scrollbar-thumb]:border-l-[#1e1f29] [&::-webkit-scrollbar-thumb]:border-l [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:bg-[var(--scrollbar-thumb-bg)]" 
    >
      <slot />
    </main>
  </div>
</div>
<Bottombar />

<style global>
  @import "../app.css";
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&display=swap');
  /* @import "@fontsource/jetbrains-mono/300.css";
  @import "@fontsource/jetbrains-mono/400.css";
  @import "@fontsource/jetbrains-mono/500.css";
  @import "@fontsource/source-sans-pro/400.css"; */
</style>