import './aboutUs.scss';

function AboutUs() {
    return (
        <section id="aboutus">
            <div className="about-container">
                <div className="row">
                    <div className="about-img">
                        <div className="image-container">
                            <img
                                src={require('../../assets/images/team-alpha-display-picture.jpg')}
                                alt="About"
                            />
                        </div>
                    </div>
                    <div className="about-content">
                        <h1 className="about-content__title">About Us</h1>
                        <p className="about-content__description">
                            Hey! We are OpenXYZ. We're a non-profit organization
                            creating Web apps. We're most
                            passionate about giving back to the community, and our goal is
                            to pursue this passion within the field of software
                            engineering.
                        </p>
                        <p className="contact">
                            <a href="https://t.me/" className="contact-btn">
                                Contact Us
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
