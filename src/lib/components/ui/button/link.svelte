<script lang="ts">
	import clsx from 'clsx';

	let { children, class: className = '', ...props } = $props();
</script>

<a class={clsx('underline hover:text-text-secondary', className)} {...props}>
	{@render children()}
</a>
