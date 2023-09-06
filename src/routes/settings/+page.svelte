<script lang="ts">
  import ThemeInfo from "./ThemeInfo.svelte";

  const themes = [
    {
      name: 'GitHub Dark',
      icon: '/github-dark.png',
      publisher: 'GitHub',
      theme: 'github-dark',
      description: 'GitHub theme for VS Code'
    },
    {
      name: 'Dracula',
      icon: '/dracula.png',
      publisher: 'Dracula Theme',
      theme: 'dracula',
      description: 'Official Dracula Theme. A dark theme for many editors, shells, and more.',
    },
    {
      name: 'Ayu Dark',
      icon: '/ayu.png',
      publisher: 'teabyii',
      theme: 'ayu-dark',
      description: 'A simple theme with bright colors.',
    }, 
    {
      name: 'Ayu Mirage',
      icon: '/ayu.png',
      publisher: 'teabyii',
      theme: 'ayu-mirage',
      description: 'A simple theme with bright colors.',
    },
    {
      name: 'Nord',
      icon: '/nord.png',
      publisher: 'arcticicestudio',
      theme: 'nord',
      description: 'An arctic, north-bluish clean and elegant Visual Studio Code theme.',
    },
    {
      name: 'Night Owl',
      icon: '/night-owl.png',
      publisher: 'sarah.drasner',
      theme: 'night-owl',
      description: 'A VS Code theme for the night owls out there.',
    }
  ]
</script>


<h2 class="text-2xl font-bold">Manage Themes</h2>
<div class="grid items-center grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mx-0 my-4">
  {#each themes as { name, icon, theme } }
    <ThemeInfo 
      name={name}
      image={icon}
      theme={theme}
    />
  {/each}
</div>