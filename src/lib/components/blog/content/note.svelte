<script lang="ts">
	let { children } = $props();
</script>

<div class="border-primary-variant text-on-background border text-sm">
	<div
		class="bg-primary-variant text-on-secondary p-1 px-2 text-sm font-bold italic"
	>
		Note
	</div>
	<p class="px-4">
		{@render children?.()}
	</p>
</div>
