<script lang="ts">
  const setTheme = (theme:string) => {
    console.log(`new theme: ${theme}`)
  }

  export let name:string;
  export let publisher: string;
  export let theme: string;
</script>


<div class="flex flex-col items-center px-6 py-0 mx-0 my-6 text-center">
  <slot />
  <div class="flex flex-col justify-between mt-4">
    <div>
      <h3>{name}</h3>
      <h5>{publisher}</h5>
    </div>
    <button on:click={() => setTheme(theme)}>Set Color Theme</button>
  </div>
</div>