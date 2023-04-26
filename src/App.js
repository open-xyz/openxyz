import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import ProjectsContextProvider from './context/ProjectsContext';
import AdminsContextProvider from './context/AdminsContext';

function App() {
    return (
        <BrowserRouter>
            <ProjectsContextProvider>
                <AdminsContextProvider>
                    <Layout>
                        <Routes>
                            <Route path="/" exact element={<Home />} />
                        </Routes>
                    </Layout>
                </AdminsContextProvider>
            </ProjectsContextProvider>
        </BrowserRouter>
    );
}

export default App;
