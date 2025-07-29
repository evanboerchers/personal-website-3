<script lang="ts">
	import { page } from '$app/state';
</script>

<h1 class="text-on-background-variant text-4xl">{page.status}</h1>
<h2>{page.error?.message}</h2>
