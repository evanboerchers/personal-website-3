<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import clsx from 'clsx';
	import type { ComponentProps } from 'svelte';

	type ButtonPrimitiveProps = ComponentProps<typeof ButtonPrimitive.Root>;

	const baseStyle =
		'inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
	const variantClass = {
		default: 'bg-secondary text-white hover:bg-secondary/90',
		outline: 'border border-secondary text-secondary hover:bg-secondary/90'
	} as const;

	type ButtonVariant = keyof typeof variantClass;

	interface ButtonProps {
		children?: any;
		variant?: ButtonVariant;
	}

	let {
		children,
		class: className,
		variant = 'default',
		...props
	}: ButtonProps & Omit<ButtonPrimitiveProps, 'class'> = $props();
</script>

<ButtonPrimitive.Root
	class={clsx(baseStyle, variantClass[variant], className)}
	{...props}
>
	{@render children?.()}
</ButtonPrimitive.Root>
