<script lang="ts">
  let { children } = $props();
  import "../app.css";
  import NavBar,{ type NavItem }  from "$lib/navigation/nav-bar.svelte";
	import { ModeWatcher } from "mode-watcher";

  const navItems: NavItem[] = [
        {
            label: 'Blog',
            href: '/blog',
        },
        {
            label: 'About Me',
            href: '/about'
        },
        {
            label: 'Projects',
            href: '/projects'
        },
        {
            label: 'Contact',
            href: '/contact'
        },
    ]
</script>

<div id='app' class='bg-primary min-h-screen'>
    <ModeWatcher />
    <NavBar navItems={navItems}></NavBar>
    <div id="layout" class="mt-8 mb-8 ml-16 mr-16">
        {@render children()}
    </div>
</div>