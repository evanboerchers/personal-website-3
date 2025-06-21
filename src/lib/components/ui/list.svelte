<script lang='ts'>
	import clsx from "clsx";

    interface LinkProps {
        children: any
        class?: string
    }

    let { children, class: className }: LinkProps = $props()
</script>

<ul class={clsx('marker:text-accent list-disc', className)}>
    {@render children?.()}
</ul>