import { readFile} from 'fs/promises';
import {marked} from 'marked';

export async function getPost (slug) {
    const data = await readFile(`content/posts/${slug}.md`, 'utf8' );
    const html = marked(data);
    return {
        body : html,
    };
}