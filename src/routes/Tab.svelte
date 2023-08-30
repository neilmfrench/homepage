<script lang="ts">
  export let fileName: string;
  export let path: string;
  export let active: boolean;

  // console.log("Active? " + path + " " + active)
</script>

<a href={path} class={`text-[#ececec] flex items-center border-t border-l border-r border-[color:var(--tab-border)] text-[0.9rem] cursor-pointer px-5 py-2 font-['Source_Sans_Pro'] 
  ${active ? 'border-t-[color:var(--accent-color)] bg-[var(--tab-active-bg)]' : 'border-b bg-[var(--tab-bg)]'}`}
>
  <slot />
  <p class="ml-[5px]">{fileName}</p>
</a>