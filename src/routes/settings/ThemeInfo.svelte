<script lang="ts">
  const setTheme = (theme:string) => {
    console.log(`new theme: ${theme}`)
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  export let name:string;
  export let theme: string;
  export let image: string
</script>


<div class="flex flex-col items-center px-6 py-0 mx-0 my-6 text-center">
  <img src={image} alt={name} height={100} width={100} />
  <div class="flex flex-col justify-between mt-4">
    <div>
      <h3 class="font-bold [font-size:1.17em]">{name}</h3>
    </div>
    <button 
      class="text-[color:var(--button-text)] font-semibold cursor-pointer mt-3 px-2 py-[0.15rem] border-[none] bg-[var(--button-bg)]"
      on:click={() => setTheme(theme)}
    >Set Theme</button>
  </div>
</div>