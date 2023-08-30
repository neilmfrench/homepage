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
    }
  ]
</script>


<h2>Manage Themes</h2>
<div class="grid items-center grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mx-0 my-4">

</div>