<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import type { ComponentProps } from 'svelte';

	type ButtonPrimitiveProps = ComponentProps<typeof ButtonPrimitive.Root>;

	let { children, ...props }: ButtonPrimitiveProps = $props();
</script>

<ButtonPrimitive.Root {...props}>
	{@render children?.()}
</ButtonPrimitive.Root>
