<script lang="ts">
  export let fileName: string;
  export let path: string;
  export let active: boolean;
</script>

<div class={`text-[#ececec] flex items-center border border-[color:var(--tab-border)] text-[0.9rem] cursor-pointer px-5 py-2 border-solid font-['Source_Sans_Pro'] 
  ${active ? 'border-t-[color:var(--accent-color)] border-b-0 border-t border-solid bg-[var(--tab-active-bg)]' : 'bg-[var(--tab-bg)]'}`}
>
  <slot />
  <p class="ml-[5px]">{fileName}</p>
</div>