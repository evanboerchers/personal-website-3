<script lang="ts">
	import clsx from 'clsx'
	interface Props {
		tag: string;
		active?: boolean 
		class?: string
	}
	let { tag, active, class: className }: Props = $props()
</script>

<p class={clsx("px-2 p-1 text-sm text-white font-bold", active ? 'bg-accent' : 'bg-secondary', className)}>{tag}</p>
