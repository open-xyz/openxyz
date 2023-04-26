import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import './mainBody.scss';

function MainBody() {
    return (
        <section id="home">
            <div className="text-center">
                <h1 className="title">Team Alpha</h1>
                <p className="typist">Building the Future with Technology</p>
            </div>
            <div className="socials">
                <article className="telegram social-icon">
                    <a href="https://t.me/AlphaTm_Botz" className="social-icon-link">
                        <FontAwesomeIcon icon={faTelegram} className="icon" />
                    </a>
                </article>
                <article className="github social-icon">
                    <a href="https://github.com/TeamAlphaTg" className="social-icon-link">
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                    </a>
                </article>
                <article className="twitter social-icon">
                    <a href="https://twitter.com" className="social-icon-link">
                        <FontAwesomeIcon icon={faTwitter} className="icon" />
                    </a>
                </article>
            </div>
            <a href="#aboutus" role="button" className="more-btn">
                More About Us
            </a>
        </section>
    );
}

export default MainBody;
