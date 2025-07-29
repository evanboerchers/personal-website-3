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

	const iconSizeClass = 'h-[1.5rem] w-[1.5rem]';
</script>

<Button
	onclick={toggleMode}
	variant="outline"
	title={mode.current === 'light' ? 'Enable dark mode' : 'Enable light Mode'}
	class={cn(
		'hover:text-accent relative inline-flex cursor-pointer items-center justify-center rounded-full p-2',
		className
	)}
>
	<div class={cn('relative', iconSizeClass)}>
		{#if mode.current === 'light'}
			<span
				class="absolute inset-0"
				in:transition={{ easing: circOut, delay: 0, duration: 300 }}
			>
				<Moon class={iconSizeClass} />
			</span>
		{:else}
			<span
				class="absolute inset-0"
				in:transition={{ easing: circOut, delay: 0, duration: 300 }}
			>
				<Sun class={iconSizeClass} />
			</span>
		{/if}
	</div>
	<span class="sr-only">Toggle theme</span>
</Button>
