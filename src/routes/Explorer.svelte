<script lang="ts">
  import ChevronRight from "$lib/components/icons/ChevronRight.svelte";
  
  const explorerItems = [
    {
      name: 'crds',
      path: '/crds',
      toggleable: true,
      icon: 'folder_icon.svg',
      icon_open: 'folder_open_icon.svg',
      children: [],
    },
    {
      name: 'home.jsx',
      path: '/',
      icon: 'react_icon.svg',
      toggleable: false,
    },
    {
      name: 'about.html',
      path: '/about',
      icon: 'html_icon.svg',
      toggleable: false,
    },
    {
      name: 'contact.css',
      path: '/contact',
      icon: 'css_icon.svg',
      toggleable: false,
    },
    {
      name: 'projects.js',
      path: '/projects',
      icon: 'js_icon.svg',
      toggleable: false,
    },
    {
      name: 'articles.json',
      path: '/articles',
      icon: 'json_icon.svg',
      toggleable: false,
    },
    {
      name: 'github.md',
      path: '/github',
      icon: 'markdown_icon.svg',
      toggleable: false,
    },
  ];
</script>

<div class="w-[18vw] text-[rgb(225,228,232)] border-r-[color:var(--explorer-border)] border-r border-solid bg-[var(--explorer-bg)] font-['Source_Sans_Pro']">
  <p class="font-light uppercase text-[0.9rem] tracking-[1px] mb-3 px-3 py-2">Explorer</p>
  <div>
    <input
      type="checkbox"
      class="absolute opacity-0 z-[-1]"
      id="portfolio-checkbox"
    />
    <label
      class="uppercase font-[bold] text-[0.8rem] tracking-[1px] flex items-center cursor-pointer px-2 py-0"
    >
      <ChevronRight
        className="transition-transform duration-[0.2s]"
      />
      Portfolio
    </label>
    <div
      class="px-0 py-2 cursor-pointer"
    >
      <!-- {explorerItems.map((item) => (
        <Link href={item.path} key={item.name}>
          <div
            className={
              router.asPath == item.path
                ? styles.file_selected
                : styles.file
            }
          >
            <Image
              src={
                item.toggleable
                  ? router.asPath == item.path
                    ? `/${item.icon_open}`
                    : `/${item.icon}`
                  : `/${item.icon}`
              }
              alt={item.name}
              height={18}
              width={18}
            />{' '}
            <p>{item.name}</p>
          </div>
        </Link>
      ))} -->
    </div>
  </div>
</div>