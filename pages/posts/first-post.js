import { readFile} from 'fs/promises';
import Head from 'next/head';


async function getPost (slug) {
    const data = await readFile(`content/posts/${slug}.json`, 'utf8' );
    return JSON.parse(data);
}

export async function getStaticProps() {
 const post = await getPost();
        return {
            props : { post}, 
    };
}
function FirstPose ({post}) {
    return (
        <>
        <Head>
            <title> First Post </title>
        </Head>
        <main>
            <h1> {post.title}</h1>

            <p>
            {post.body}
            </p>
        </main>
        </>
    );
}

export default FirstPose;