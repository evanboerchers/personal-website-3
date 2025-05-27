<script lang='ts'>
    interface Props {
        tag: string
    }

    let { tag }: Props = $props()
</script>

<p class='bg-slate-200'>{tag}</p>