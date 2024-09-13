import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import note from '../../../assets/img/notes-de-musique.png'
import musique from '../../../assets/music/Emmetelle-Awake.mp3';
import disc from '../../../assets/img/disc.png'
import './navbar.scss'

const Navbar = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const handleClick = () => {
            if (audioRef.current) {
                if (audioRef.current.paused) {
                    audioRef.current.play();
                    const imgMusique = document.getElementById('note');
                    if (imgMusique) {
                        imgMusique.classList.add('playing');
                    }
                } else {
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0;
                    const imgMusique = document.getElementById('note');
                    if (imgMusique) {
                        imgMusique.classList.remove('playing');
                    }
                }
            }
        };

        const imgMusique = document.getElementById('note');
        if (imgMusique) {
            imgMusique.addEventListener('click', handleClick);
        }

        return () => {
            if (imgMusique) {
                imgMusique.removeEventListener('click', handleClick);
            }
        };
    }, []);

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
                <img id='note' src={disc} alt="" />
                <audio ref={audioRef} src={musique} />
            </nav>
        </div>
    );
};

export default Navbar;