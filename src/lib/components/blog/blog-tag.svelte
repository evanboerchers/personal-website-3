<script lang="ts">
	import clsx from 'clsx';
	interface Props {
		tag: string;
		active?: boolean;
		class?: string;
	}
	let { tag, active, class: className }: Props = $props();
</script>

<p
	class={clsx(
		'p-1 px-2 text-sm font-bold',
		active ? 'bg-secondary text-on-secondary' : 'bg-primary text-on-primary',
		className
	)}
>
	{tag}
</p>
