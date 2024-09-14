
import projectBackGround from '../../../assets/img/apercu projet.webp';
import visite from '../../../assets/img/click.webp';
import artEsthetique from '../../../assets/img/art-esthetique.webp';
import sandrineCoiffure from '../../../assets/img/sandrine-coiffure.webp';
import petfoster from '../../../assets/img/pet-foster-connect.webp';
import ofig from '../../../assets/img/ofig2.webp';
import odvizor from "../../../assets/img/trip-O_dvisor.webp";
import './projects.scss';

const Projects = () => {
    return (
        <div className='projects'>
            <h1>Projects</h1>
            <h2>Personnal projects</h2>
            <section className="personnal-projects">
                <div className="project_left-1">
                    <img src={projectBackGround} alt="project-background" />
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
                <div className="project_right-2">
                    <img src={projectBackGround} alt="" />
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
            <h2>School projects</h2>
            <div className="school-projects">
                <div className="project_left-3">
                    <img src={projectBackGround} alt="project-background" />
                    <img
                        id="pjt"
                        className="pjt_left"
                        src={petfoster}
                        alt="projet l'art esthetique"
                    />
                    <div className="des_project_left">
                        <h3>Projet pet foster connect</h3>
                        <p>
                        Projet d'apotheose actuellement encore en developpement qui me servira de projet de présentation pour mon examen. Ce projet consomme une api avec postgresql et sequelize pour faire des rendus dynamique avec le front en react ainsi qu'une mis en place de jwtToken. 
                        </p>
                        <div className="click_left">
                            <img id="click" src={visite} alt="" />
                            <a href="https://pet-foster-connect.website">
                                click here to visit website
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project_right-4">
                    <img src={projectBackGround} alt="" />
                    <img
                        id="pjt"
                        className="pjt_right"
                        src={odvizor}
                        alt=""
                    />
                    <div className="des_project_right">
                        <h3>Projet Trip O'dvizor</h3>
                        <p>
                        Reconstitution d'un site de voyage. Ce projet a été réalisé pour travailler le javaScript comme, par exemple, les "addEvents" au clic ainsi que les ajouts de classes pour le thème sombre. J'ai également ajouté l'interdiction d'utiliser des mails jetables dans la newsletter.
                        </p>
                        <div className="click_right">
                            <img id="click" src={visite} alt="" />
                            <a href="https://musical-meme-lnvg7m3.pages.github.io/">
                                click here to visit website
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project_left-5">
                    <img src={projectBackGround} alt="project-background" />
                    <img
                        id="pjt"
                        className="pjt_left"
                        src={ofig}
                        alt="projet l'art esthetique"
                    />
                    <div className="des_project_left">
                        <h3>Projet O'fig</h3>
                        <p>
                        Reconstitution d'un site de commerce avec des figurines mises en avant. Ce projet a été réalisé pour mettre en pratique ExpressJS avec des routes paramétrées et la création d'une BDD avec Postgresql pour communiquer avec le site.
                        </p>
                        <div className="click_left">
                            <img id="click" src={visite} alt="" />
                            <a href="https://lart-esthetique.fr">
                                click here to visit website
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;