<script lang="ts">
  import SourceControlIcon from "$lib/components/icons/SourceControlIcon.svelte";
  import ErrorIcon from "$lib/components/icons/ErrorIcon.svelte";
  import WarningIcon from "$lib/components/icons/WarningIcon.svelte";
  import SvelteIcon from "$lib/components/icons/SvelteIcon.svelte";
  import CheckIcon from "$lib/components/icons/CheckIcon.svelte";
  import BellIcon from "$lib/components/icons/BellIcon.svelte";
</script>

<footer class="max-[600px]:text-[0.6rem] h-[25px] border-t-[color:var(--bottombar-border)] text-[rgb(225,228,232)] flex items-center justify-between text-[0.8rem] px-2 py-0 border-t border-solid bg-[var(--bottombar-bg)]">
  <div class="flex items-center">
    <a
      href="https://github.com/neilmfrench/homepage"
      target="_blank"
      rel="noreferrer noopener"
      class="max-[600px]:mr-2 hover:bg-[var(--bottombar-hover-bg)] flex h-6 items-center cursor-pointer mr-2 px-[0.2rem] py-0 font-['Source_Sans_Pro'] text-[white] no-underline"
    >
      <SourceControlIcon className="mr-1" />
      <p>main</p>
    </a>
    <div class="max-[600px]:mr-2 hover:bg-[var(--bottombar-hover-bg)] flex h-6 items-center cursor-pointer mr-2 px-[0.2rem] py-0 font-['Source_Sans_Pro']">
      <ErrorIcon className="mr-1" />
      <p>0</p>&nbsp;&nbsp;
      <WarningIcon className="mr-1" />
      <p>0</p>
    </div>
  </div>
  <div class="flex items-center">
    <div class="max-[600px]:mr-2 hover:bg-[var(--bottombar-hover-bg)] flex h-6 items-center cursor-pointer mr-2 px-[0.2rem] py-0 font-['Source_Sans_Pro']">
      <SvelteIcon className="mr-1" />
      <p>Powered by Sveltekit</p>
    </div>
    <div class="max-[600px]:mr-2 hover:bg-[var(--bottombar-hover-bg)] flex h-6 items-center cursor-pointer mr-2 px-[0.2rem] py-0 font-['Source_Sans_Pro']">
      <CheckIcon className="mr-1" />
      <p>Prettier</p>
    </div>
    <div class="max-[600px]:mr-2 hover:bg-[var(--bottombar-hover-bg)] flex h-6 items-center cursor-pointer mr-2 px-[0.2rem] py-0 font-['Source_Sans_Pro']">
      <BellIcon />
    </div>
  </div>
</footer>