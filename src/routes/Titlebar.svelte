<section class="titlebar bg-[var(--titlebar-bg)] h-[30px] flex items-center justify-center text-white text-[0.85rem] px-2 py-0 border-b-[#191d20] border-b border-solid">
  <img
    src="/vscode_icon.svg"
    alt="VSCode Icon"
    height={15}
    width={15}
  />
  <div class="flex flex-1 ml-2 mr-auto items">
    <p class="px-2 py-0 cursor-pointer">File</p>
    <p class="px-2 py-0 cursor-pointer">Edit</p>
    <p class="px-2 py-0 cursor-pointer">View</p>
    <p class="px-2 py-0 cursor-pointer">Go</p>
    <p class="px-2 py-0 cursor-pointer">Run</p>
    <p class="px-2 py-0 cursor-pointer">Terminal</p>
    <p class="px-2 py-0 cursor-pointer">Help</p>
  </div>
  <p class="title">Neil French - Visual Studio Code</p>
  <div class="flex items-center flex-1 ml-auto">
    <span class="bg-[#f1fa8c] h-[13px] w-[13px] cursor-pointer ml-auto rounded-[50%]"></span>
    <span class="bg-[#50fa7b] h-[13px] w-[13px] cursor-pointer ml-2 rounded-[50%]"></span>
    <span class="bg-[#ff5555] h-[13px] w-[13px] cursor-pointer ml-2 rounded-[50%]"></span>
  </div>
</section>

<style lang="postcss">
  .titlebar {
    font-family: "Source Sans Pro", sans-serif;
  }

  @media screen and (max-width: 900px) {
    .items p {
      @apply hidden;
    }
    .title {
      @apply flex-[4];
    }
  }
</style>