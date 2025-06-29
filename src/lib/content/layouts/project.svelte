<script lang='ts'>
	import Link from "./ui/link.svelte";
	import List from "./ui/list.svelte";

    interface ProjectSectionProps {
        title: string,
        content: any,
        links: {
            label: string,
            href: String
        }[],
        image: {
            src: string,
            alt: string
        }
    }

    let {title, content, links, image}: ProjectSectionProps = $props()
</script>

<section class="prose dark:prose-invert mt-8">
    <h2 class='mb-0'>{title}</h2>
    <div class="flex flex-row">
        <div>
           {@render content?.()}
        </div>
        <div class="mt-6 min-w-max">
            <img src={image.src} alt={image.alt} />
            <List class="mt-2 pl-4">
                {#each links as link }
                <li>
                    <Link href={link.href}
                        >{link.label}</Link
                    >
                </li>
                {/each}
            </List>
        </div>
    </div>
</section>