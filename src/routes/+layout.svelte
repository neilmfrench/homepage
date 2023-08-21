<script>
  import "../app.css";
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
    <main id="main-editor" class="content text-[color:var(--text-color)] flex-1 h-[85vh] overflow-y-auto scroll-smooth p-8h">
      <slot />
    </main>
  </div>
  <Bottombar />
</div>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&display=swap');
  .content {
    font-family: "JetBrains Mono", monospace;
  }
  .content::-webkit-scrollbar {
    @apply w-[15px];
  }
  .content::-webkit-scrollbar-track {
    @apply border-l-[#1e1f29] border-l border-solid;
    background: var(--scrollbar-track-bg);
  }
  .content::-webkit-scrollbar-thumb {
    @apply border-l-[#1e1f29] border-l border-solid;
    background: var(--scrollbar-thumb-bg);
  }
  @media screen and (max-width: 600px) {
    .content {
      @apply px-4 py-8;
    }
  }
</style>