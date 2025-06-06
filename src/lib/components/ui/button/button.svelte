<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';

	interface Props {
		children: any;
	}

	let { children, ...props }: Props = $props();
</script>

<ButtonPrimitive.Root type="button" {...props}>
	{@render children?.()}
</ButtonPrimitive.Root>
