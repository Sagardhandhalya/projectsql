import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <nav className="sticky top-0 bg-gray-800 w-3/4 m-auto p-4 flex">
            <h4 className="text-left text-white text-2xl flex-1">Yogi The Boss</h4>
            <ul className="inline-block mr-16 list-none flex justify-end">
                <li className="mr-4"> <Link to="/" > HOME</Link></li>
                <li>CONTACT</li>
            </ul>

        </nav>
    )
}

export default NavBar
