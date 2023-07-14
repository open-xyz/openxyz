import './aboutUs.scss';

function AboutUs() {
    return (
        <section id="aboutus">
            <div className="about-container">
                <div className="row">
                    <div className="about-img">
                        <div className="image-container">
                            <img
                                src={require('../../assets/images/OpenXYZ.png')}
                                alt="About"
                            />
                        </div>
                    </div>
                    <div className="about-content">
                        <h1 className="about-content__title">About Us</h1>
                        <p className="about-content__description">
                            OpenXYZ is a non-profit organization that creates web apps that focus on giving back to the community. Our mission is to leverage technology for a positive impact on the world. We are dedicated to building innovative      and functional web applications that are accessible to everyone. Our goal is to empower individuals and organizations to make a positive impact on society.
                        </p>
                        <p className="contact">
                            <a href="https://twitter.com/openxyz_" className="contact-btn">
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
