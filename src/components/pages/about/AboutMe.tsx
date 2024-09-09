
import profil from '../../../assets/img/profil.jpg';
import linkedin from '../../../assets/img/linkedin.png';
import github from '../../../assets/img/github.png';
import gmail from '../../../assets/img/gmail.png';
import cv from '../../../assets/doc/cv.pdf';
import './about.scss'

const Contact = () => {
    return (
        <div className='about-me'>
            <div className="about-me_intro">
                <img src={profil} alt="" />
                <h1>Do you want to contact me ?</h1>
            </div>
            <div className="contact">
                <h2>This is my all network</h2>
                <div className="contact-content">
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/alexis-giraud-486a46294/">
                            <img id="linkedin" src={linkedin} alt="" />
                        </a>
                        <a className='link' href="https://www.linkedin.com/in/alexis-giraud-486a46294/">
                            https://www.linkedin.com/in/alexis-giraud-486a46294/
                        </a>
                    </div>
                    <div className="github">
                        <a href="https://github.com/giraud-alexis">
                            <img id="github" src={github} alt="" />
                        </a>
                        <a className='link' href="https://github.com/giraud-alexis">
                            https://github.com/giraud-alexis
                        </a>
                    </div>
                    <div className="gmail">
                        <a href="mailto:alexis33190@gmail.com">
                            <img id="gmail" src={gmail} alt="" />
                        </a>
                        <a className='link' href="mailto:alexis33190@gmail.com">alexis33190@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="cv">
                <h2 className="cv">Do you want my CV ?</h2>
                <a href={cv} target="_blank" rel="noopener noreferrer">click here !</a>
                <h3 className="thanks">Thanks for visit my portfolio ! See you soon.</h3>
            </div>
        </div>
    );
};

export default Contact;