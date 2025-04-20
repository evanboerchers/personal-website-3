import type { PageLoad } from "./$types"

export const load: PageLoad = async ({fetch, params }) => {
    const response = await fetch('/api/blog/posts')
    const posts = await response.json()
    return {
        posts
    }
}