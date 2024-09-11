import { useState, useEffect } from 'react';

import logo from '../../../assets/img/bitmoji.png'
import BurgerMenu from '../burgermenu/BurgerMenu';
import './header.scss';
import Navbar from '../navbar/Navbar';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1025);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);


    return (
        <div className='header'>
            <div className="header-content">
            <img src={logo} alt="" />
            {isMobile ? <BurgerMenu/> : <Navbar/>}
            </div>
        </div>
    );
};

export default Header;