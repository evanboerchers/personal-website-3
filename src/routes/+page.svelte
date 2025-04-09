<script lang='ts'>
	import NavBar, { type NavItem } from "$lib/navigation/nav-bar.svelte";
	import About from "$lib/sections/about.svelte";
	import Contact from "$lib/sections/contact.svelte";
	import Hero from "$lib/sections/hero.svelte";
	import Projects from "$lib/sections/projects.svelte";

    
    const navItems: NavItem[] = [
        {
            label: 'About',
            href: '#about'
        },
        {
            label: 'Projects',
            href: '#projects'
        },
        {
            label: 'Contact',
            href: '#contact'
        },
    ]
</script>

<NavBar navItems={navItems}></NavBar>
<Hero></Hero>
<About></About>
<Projects></Projects>
<Contact></Contact>
