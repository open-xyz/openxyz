import MainBody from '../components/Home/MainBody';
import Technologies from '../components/Home/Technologies';
import Projects from '../components/Home/Projects';
import AboutUs from '../components/Home/AboutUs';
// import Admins from '../components/Home/Admins';

function Home() {
    return (
        <>
            <MainBody />
            <Technologies />
            <Projects />
            <AboutUs />
            {/* <Admins /> */}
        </>
    );
}

export default Home;
