import { NavLink } from "react-router-dom";
export default function Nav() {
    return (
        <nav className='nav container' >
            <ul className='menu'>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/posts'>Post</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>

            </ul>
        </nav>
    )
}