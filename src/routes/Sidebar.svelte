<script lang="ts">
  import { page } from '$app/stores'
  import AccountIcon from "$lib/components/icons/AccountIcon.svelte";
  import FilesIcon from "$lib/components/icons/FilesIcon.svelte";
  import SettingsIcon from '$lib/components/icons/SettingsIcon.svelte';
  import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
  import CodeIcon from '$lib/components/icons/CodeIcon.svelte';
  import PencilIcon from '$lib/components/icons/PencilIcon.svelte';
  import MailIcon from '$lib/components/icons/MailIcon.svelte';

  const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: '/',
  },
  {
    Icon: GithubIcon,
    path: '/github',
  },
  {
    Icon: CodeIcon,
    path: '/projects',
  },
  {
    Icon: PencilIcon,
    path: '/articles',
  },
  {
    Icon: MailIcon,
    path: '/contact',
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: '/about',
  },
  {
    Icon: SettingsIcon,
    path: '/settings',
  },
];
export let currentRoute: string;
</script>

<aside class="
  min-[2000px]:w-[2.5vw] 
  max-[1100px]:w-[6vw] 
  max-[900px]:w-[8vw] 
  max-[600px]:w-[10vw] 
  w-[4.5vw] 
  bg-[var(--sidebar-bg)] flex flex-col justify-between min-w-[40px] h-[calc(100vh_-_30px_-_25px)]">
  <div class="">
    {#each sidebarTopItems as { Icon, path }}
      <a href={path}>
        <div class={`
          cursor-pointer w-full hover:bg-[var(--sidebar-hover-bg)] 
          ${currentRoute == path ? 'border-l-[color:var(--accent-color)] border-l-2 border-solid' : ''}`
        }>
          <Icon className="
            max-[900px]:h-12 max-[900px]:w-12 max-[900px]:p-[0.6rem] 
            max-[600px]:h-10 max-[600px]:w-10 max-[600px]:p-[0.6rem] 
            h-12 w-12 
            block mx-auto my-0 px-0 py-[0.65rem]" 
            fill={
              currentRoute === path
                ? 'rgb(225, 228, 232)'
                : 'rgb(106, 115, 125)'
            }
          />
        </div>
      </a>
    {/each}
  </div>
  <div>
    {#each sidebarBottomItems as { Icon , path }}
      <a href={path}>
        <div class="cursor-pointer w-full hover:bg-[var(--sidebar-hover-bg)]">
          <Icon className="
            max-[900px]:h-12 max-[900px]:w-12 max-[900px]:p-[0.6rem] 
            max-[600px]:h-10 max-[600px]:w-10 max-[600px]:p-[0.6rem] 
            h-12 w-12 
            block mx-auto my-0 px-0 py-[0.65rem]" 
            fill={
              currentRoute === path
                ? 'rgb(225, 228, 232)'
                : 'rgb(106, 115, 125)'
            }
          />
        </div>
      </a>
    {/each}
  </div>
</aside>