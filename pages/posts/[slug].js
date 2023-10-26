import Head from 'next/head';
import { getPost } from '../../lib/post';
import dynamic from 'next/dynamic';

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'first-pose' } },
      { params: { slug: 'second-post' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getPost(slug);
  return {
    props: { post },
  };
}

function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default PostPage;
