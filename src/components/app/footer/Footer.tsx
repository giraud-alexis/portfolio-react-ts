
import linkedin from '../../../assets/img/linkedin.png';
import github from '../../../assets/img/github.png';
import gmail from '../../../assets/img/gmail.png';
import './footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="contact-content">
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/alexis-giraud-486a46294/">
                        <img src={linkedin} alt="logo linkedin" />
                    </a>
                </div>
                <div className="github">
                    <a href="https://github.com/giraud-alexis">
                        <img src={github} alt="logo github" />
                    </a>
                </div>
                <div className="gmail">
                    <a href="mailto:alexis33190@gmail.com">
                        <img src={gmail} alt="logo gmail" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;