<script lang="ts">
	import clsx from 'clsx';

	let { children, class: className = '', ...props } = $props();
</script>

<a class={clsx('hover:text-text-secondary underline', className)} {...props}>
	{@render children?.()}
</a>
