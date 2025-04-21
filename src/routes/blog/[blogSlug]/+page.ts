import type { PageLoad } from "../$types"

export const load: PageLoad = async ({ fetch, params }) => {
    const blogSlug  = params.blogSlug
    const post = await import(`$lib/blog/posts/${blogSlug}.md`)
    const metadata = post.metadata
    const content: ConstructorOfATypedSvelteComponent = post.default
    return {
        metadata,
        content
    }
}