import { getMarkdownPosts } from "$lib/blog"
import { json } from "@sveltejs/kit";

export const GET = async () => {
    const posts = await getMarkdownPosts();
    return json(posts)
}