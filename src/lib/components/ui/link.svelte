<script lang="ts">
	import clsx from 'clsx';

	let { children, class: className = '', ...props } = $props();
</script>

<a
	class={clsx('hover:text-on-background-variant underline', className)}
	{...props}
>
	{@render children?.()}
</a>
