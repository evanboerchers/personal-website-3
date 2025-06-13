<script lang="ts">
	interface Props {
		tag: string;
	}

	let { tag }: Props = $props();
</script>

<p class="bg-secondary p-1 px-2 text-sm font-bold">{tag}</p>
