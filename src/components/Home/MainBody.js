import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import './mainBody.scss';

function MainBody() {
    return (
        <section id="home">
            <div className="text-center">
                <h1 className="title">OpenXYZ</h1>
                <p className="typist">Nobody can stop Information Insemination</p>
            </div>
            <div className="socials">
                
                <article className="twitter social-icon">
                    <a href="https://twitter.com/openxyz_" className="social-icon-link">
                        <FontAwesomeIcon icon={faTwitter} className="icon" />
                    </a>
                </article>
                <article className="github social-icon">
                    <a href="https://github.com/open-xyz" className="social-icon-link">
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                    </a>
                </article>
                <article className="telegram social-icon">
                    <a href="https://discord.gg/tdDWfPWF" className="social-icon-link">
                        <FontAwesomeIcon icon={faDiscord} className="icon" />
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
