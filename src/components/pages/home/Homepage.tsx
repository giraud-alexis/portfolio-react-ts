import { useEffect, useRef } from 'react';

import logo from '../../../assets/img/présentation.png'
import oclock from '../../../assets/img/Oclock.png'
import fleche from '../../../assets/img/fleches.png'
import shema from '../../../assets/img/skills2.png'
import artEsthetique from '../../../assets/img/art-esthetique.png'
import sandrineCoiffure from '../../../assets/img/sandrine-coiffure.png'
import projectFont from '../../../assets/img/apercu projet.png'
import visite from '../../../assets/img/click.png'
import './homepage.scss';

const Homepage = () => {
    const skillsImgRef = useRef<HTMLImageElement>(null);
    const projectsImgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 900 && skillsImgRef.current) {
                skillsImgRef.current.style.opacity = "1";
            }
            if (window.scrollY > 2100 && projectsImgRef.current) {
                projectsImgRef.current.style.opacity = "1";
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className='homepage'>
            <div className='presentation'>
                <div className="presentation_intro">
                    <img id="bimoji" src={logo} alt="bitmoji" />
                    <h2>
                    Hello! I'm <b>Alexis Giraud</b>
                    </h2>
                    <h3>A developer who</h3>
                    <h1>
                    craft elegant <b>solutions</b>
                    </h1>
                    <h4>
                    to complex <b>problems</b>,
                    </h4>
                    <p>I bring digital visions to life with precision and creativity.</p>
                </div>
                <div className="présentation_description">
                    <h2>I'm a Web Developer.|</h2>
                    <p className="description_school">
                    Currently, I'm a student at <i>O’clock</i> school,
                    <img id="oclock" src={oclock} alt="logo oclock" />
                    </p>
                    <p className="about_me">
                    I started self-taught Web development, i go to O’clock school to enhance
                    <br /> my skills. <br />
                    I make meaningful website based on a mock-up, that create an equilibrium
                    <br />
                    between user needs and business goals.
                    </p>
                </div>
            </div>
            <div className="nav_skills">
                <h2>My skills</h2>
                <a href="#skills_shema">
                <img id="nav_row" src={fleche} alt="navigation" />
                </a>
            </div>
            <div className="my_skills">
                <h2>
                I'm currently looking to join a <b>cross-functional</b> team
                </h2>
                <h3>
                that values improving people's lives through accessible and responsively
                app.
                </h3>
                <img src={shema} alt="my skills" />
            </div>
            <div className="nav_projects">
                <h2>My projects</h2>
                <a href="#projects">
                <img id="nav_row" src={fleche} alt="navigation" />
                </a>
            </div>
            <section className="projects-home">
                <div className="project_left">
                    <img src={projectFont} alt="project-background" />
                    <img
                        id="pjt"
                        className="pjt_left"
                        src={artEsthetique}
                        alt="projet l'art esthetique"
                    />
                    <div className="des_project_left">
                        <h3>L'art Esthetique</h3>
                        <p>
                        Site vitrine à la demande de l’entreprise L’art Esthétique afin
                        d’augmenter sa visibilité.<br />
                        Ce site utilise une API codée par moi-même, sécurisée avec CORS, ainsi qu'une application mobile pour la gestion de l'API.
                        </p>
                        <div className="click_left">
                            <img id="click" src={visite} alt="" />
                            <a href="https://lart-esthetique.fr">
                                click here to visit website
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project_right">
                    <img src={projectFont} alt="" />
                    <img
                        id="pjt"
                        className="pjt_right"
                        src={sandrineCoiffure}
                        alt=""
                    />
                    <div className="des_project_right">
                        <h3>Sandrine coiffure</h3>
                        <p>
                        Site vitrine avec carte blanche du client sur le web design oû j’ai
                        intégré au clic du menu des effets de perspective 3d sur la fenêtre
                        pour rendre le menu accessible sur la partie droite de l’écran. Un
                        effet d’animation a également été ajouté pour rendre animée cette
                        perspective 3d au survol de la souris. Sobre et efficace.
                        </p>
                        <div className="click_right">
                            <img id="click" src={visite} alt="" />
                            <a href="https://sandrine-coiffure-domici-606ef.web.app/">
                                click here to visit website
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;

