import Link from 'next/link';
function Navbar () {
    return (

        <nav>
            <ul>
                <li> <Link a href="/"> Home </Link></li>
                <li> <Link a href="about"> about </Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;