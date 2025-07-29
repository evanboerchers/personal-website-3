<script lang="ts">
	import { Tooltip } from 'bits-ui';
	import { type Snippet } from 'svelte';

	type Props = Tooltip.RootProps & {
		trigger: Snippet;
		triggerProps?: Tooltip.TriggerProps;
	};

	let {
		open = $bindable(false),
		children,
		trigger,
		triggerProps = {}
	}: Props = $props();
</script>

<Tooltip.Root bind:open>
	<Tooltip.Trigger {...triggerProps}>
		{@render trigger()}
	</Tooltip.Trigger>
	<Tooltip.Portal>
		<Tooltip.Content>
			<Tooltip.Arrow />
			{@render children?.()}
		</Tooltip.Content>
	</Tooltip.Portal>
</Tooltip.Root>
