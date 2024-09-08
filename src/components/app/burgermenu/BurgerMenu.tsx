import React, { useState, useEffect } from 'react';
import './burger.scss';

const BurgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    return (
        <div className="burger-menu">
            <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </div>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <a href="#home">Home</a>
                <a href="#about">Projects</a>
                <a href="#contact">About me</a>
            </div>
        </div>
    );
};

export default BurgerMenu;