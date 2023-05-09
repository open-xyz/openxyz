import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-title">Get In Touch</div>
                <div className="footer-content">
                    <p className="footer-content__about">
                        We're currently looking for more open source project ideas and
                        more developers who can work with us. If you have an idea or you
                        wanna work with us, if you have any questions, or if you just want
                        to say hi, please feel free to contact via{' '}
                        <a
                            href="https://twitter.com/openxyz_/"
                            className="footer-content__email link"
                        >
                            twitter
                        </a>
                        .
                    </p>
                    <div className="footer-developer-info">
                        Developed by{' '}
                        <a
                            href="https://github.com/rohansx"
                            className="footer-developer-info__link link"
                        >
                            Rohan
                        </a>{' '}
                        using{' '}
                        <a href="https://reactjs.org" className="link">
                            <FontAwesomeIcon icon={faReact} />
                        </a>
                    </div>
                    {/* <p className="footer-content-end">
                        Project code is open source. Feel free to fork and make your own
                        version.
                    </p> */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
