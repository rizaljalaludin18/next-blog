import Link from 'next/link';
function Navbar () {
    return (

        <nav>
            <ul>
                <li> <Link a href="/"> Home </Link></li>
                <li> <Link a href="about"> about </Link></li>
            </ul>

            <style jsx> {`
        ul {
    list-style-type: none;
    padding: 0;
 }

li {
    display: inline;
    margin-left : 0,75rem;
}
 `} </style>


        </nav>
        


    );
}

export default Navbar;