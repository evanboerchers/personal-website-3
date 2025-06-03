<script lang="ts">
    import { navItems } from '$lib/navigation';
	import Link from '$lib/components/ui/button/link.svelte';
</script>

<footer class='bg-secondary fixed left-0 bottom-0 w-full p-20 flex flex-row gap-20'>
    <div>
        <h3>
           Pages 
        </h3>
        <ul>
            {#each navItems as navItem}
                <li>
                    <Link href={navItem.href}>{navItem.label}</Link>
                </li>
            {/each}
        </ul>
    </div>
    <div>
        <h3>
           Links 
        </h3>
        <ul>
            <li>
                <Link href={''}>{''}</Link>
            </li>
        </ul>
    </div>
    <div>
        <p>
            Evan Boerchers @ 2025
        </p>
    </div>
</footer>