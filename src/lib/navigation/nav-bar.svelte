<script lang="ts">
	import { Menubar } from 'bits-ui';
	let isMobileMenuOpen = false;


</script>

<nav class="px-4 py-3 flex justify-between items-center shadow-sm">
	<!-- Logo -->
	<Menubar.Root class="flex gap-4">
        <div class="text-xl font-bold text-blue-600">evanboerchers.dev</div>
		<Menubar.Menu>
			<Menubar.Trigger>
				<!-- <a href="#about">About</a> -->
			</Menubar.Trigger>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>
				<!-- <a href="#contact">Contact</a> -->
			</Menubar.Trigger>
		</Menubar.Menu>
	</Menubar.Root>
</nav>
