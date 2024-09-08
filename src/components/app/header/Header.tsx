import logo from '../../../assets/img/bitmoji.png'

import BurgerMenu from '../burgermenu/BurgerMenu';
import './header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-content">
            <img src={logo} alt="" />
            <BurgerMenu/>
            </div>
        </div>
    );
};

export default Header;