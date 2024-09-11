import { NavLink } from 'react-router-dom';
import note from '../../../assets/img/notes-de-musique.png'
import './navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/projects'}>Projets</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}>About</NavLink>
                    </li>
                </ul>
                <img src={note} alt="" />
            </nav>
        </div>
    );
};

export default Navbar;