<script lang="ts">
	import { Moon, Sun } from "@lucide/svelte";
	import { toggleMode, mode } from "mode-watcher";
	import Button from "./ui/button/button.svelte";

    
</script>

<Button onclick={toggleMode} class='relative items-center justify-center inline-flex cursor-pointer hover:text-accent'>
    {#if mode.current === 'light'}
    <Moon
    class="h-[1.2rem] w-[1.2rem] transition-all opacity-0 dark:opacity-100"
    />
    {:else}
    <Sun
    class="h-[1.2rem] w-[1.2rem] transition-all"
    />
    {/if}
    <span class="sr-only">Toggle theme</span>
</Button>