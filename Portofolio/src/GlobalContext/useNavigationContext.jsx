import { createContext, useContext, useState } from "react";


const NavigationContext = createContext();

export function NavigationProvider({ children }) {
    const [nav, setNav] = useState("Home");
    const [listProject, setListProject] = useState("satu");
    const [viewProject, setViewProject] = useState('');

    return (
        <NavigationContext.Provider
            value={{
                nav,
                setNav,
                listProject,
                setListProject,
                viewProject,
                setViewProject
            }}
        >
            {children}
        </NavigationContext.Provider>
    )
}

export function useNavigation() {
    return useContext(NavigationContext)
}