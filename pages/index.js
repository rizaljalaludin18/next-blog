import Head from 'next/head';
import Link from 'next/link';

function HomePage () {
    return (

        <>

        <Head>
            <title> HomePage </title>
            <meta name='description' value="web coba coba" />
        </Head>
       
       
        <main>
            <h1>halaman Home</h1>

            <ul>
            <li> 
                <Link href = "posts/first-post">
                    Postingan Pertama
                </Link>
                
                 </li>
            
        </ul>
        </main>
        </>
    );
}

export default HomePage;