import Footer from '../Navigation/Footer';
import Navbar from '../Navigation/Navbar';

function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
