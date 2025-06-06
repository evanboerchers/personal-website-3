<script lang="ts">
	interface Props {
		tag: string;
	}

	let { tag }: Props = $props();
</script>

<p class="bg-secondary text-sm font-bold p-1 px-2">{tag}</p>
