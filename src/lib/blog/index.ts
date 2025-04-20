import type { Post } from "./types"

export const getMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob("$lib/blog/posts/*.md", {eager: true})
    const posts = Object.entries(allPostFiles).map(async ([path, file]) => {
        if (file && typeof file === 'object' && 'metadata' in file) {
            const { metadata } = file
            return metadata
        }
    })
    return posts
}