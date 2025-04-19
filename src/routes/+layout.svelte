<script lang="ts">
  let { children } = $props();
  import "../app.css";
  import NavBar,{ type NavItem }  from "$lib/navigation/nav-bar.svelte";

      
  const navItems: NavItem[] = [
        {
            label: 'About',
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

<NavBar navItems={navItems}></NavBar>
{@render children()}