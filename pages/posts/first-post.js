import Head from 'next/head';

export async function getStaticProps() {
    return {
        props : {
            post : {
                title : 'postingan pertama',
                body : 'ini adalah postingan pertama degan next',
            },
        },
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