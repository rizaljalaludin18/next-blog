import Navbar from "../components/Navbar";
import '../styles/global.css';

function App ({Component, pageProps}) {
    return (
        <>
        <header>
        <Navbar />
        </header>

        <Component {...pageProps} />
        </>
    )
}

export default App;