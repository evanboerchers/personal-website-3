<script lang="ts">
	import { Moon, Sun } from '@lucide/svelte';
	import { toggleMode, mode } from 'mode-watcher';
	import Button from './ui/button/button.svelte';
</script>

<Button
	onclick={toggleMode}
	class="hover:text-accent relative inline-flex cursor-pointer items-center justify-center"
>
	{#if mode.current === 'light'}
		<Moon
			class="h-[1.2rem] w-[1.2rem] opacity-0 transition-all dark:opacity-100"
		/>
	{:else}
		<Sun class="h-[1.2rem] w-[1.2rem] transition-all" />
	{/if}
	<span class="sr-only">Toggle theme</span>
</Button>
