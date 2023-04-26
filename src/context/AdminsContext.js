import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AdminsContext = createContext();

export function useAdmins() {
    return useContext(AdminsContext);
}

function AdminsContextProvider({ children }) {
    const [admins, setAdmins] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = () => {
            try {
                axios
                    .get('https://api.jsonbin.io/v3/b/63b06049dfc68e59d574f176')
                    .then(res => {
                        setAdmins(res.data.record.admins);
                        setLoading(false);
                    });
            } catch (err) {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const values = {
        admins,
        loading,
    };

    return <AdminsContext.Provider value={values}>{children}</AdminsContext.Provider>;
}

export default AdminsContextProvider;
