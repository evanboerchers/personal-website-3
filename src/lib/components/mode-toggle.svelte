<script lang="ts">
	import { Moon, Sun } from '@lucide/svelte';
	import { toggleMode, mode } from 'mode-watcher';
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import { fade as transition } from 'svelte/transition';
	import { circOut } from 'svelte/easing';

	interface ModeToggleProps {
		class: string;
	}

	let { class: className }: ModeToggleProps = $props();

	const iconClassName = 'h-[1.75rem] w-[1.75rem]';
</script>

<Button
	onclick={toggleMode}
	variant="outline"
	class={cn(
		'hover:text-accent relative inline-flex cursor-pointer items-center justify-center rounded-full p-2',
		className
	)}
>
	<div class="relative h-[1.75rem] w-[1.75rem]">
		{#if mode.current === 'light'}
			<span
				class="absolute inset-0"
				in:transition={{ easing: circOut, delay: 0, duration: 300 }}
			>
				<Moon class={iconClassName} />
			</span>
		{:else}
			<span
				class="absolute inset-0"
				in:transition={{ easing: circOut, delay: 0, duration: 300 }}
			>
				<Sun class={iconClassName} />
			</span>
		{/if}
	</div>
	<span class="sr-only">Toggle theme</span>
</Button>
