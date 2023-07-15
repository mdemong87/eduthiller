"use client"

// import all feature from the core module
import { createContext, useContext, useState } from 'react';

// Create the context
const MyContext = createContext();


//export the final context with value and value updater
export const useAllcontext = () => {
    return useContext(MyContext);
}


// Create the provider component
export function MyContextProvider({ children }) {

    //list of state
    const [isloading, setisloading] = useState(true);


    // useEffect(() => {
    //   setTimeout(() => setosloading(false), 3000);
    // }, []);

    // Provide the context value and state update functions
    const contextValue = {
        isloading,
        setisloading,
    };

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
}
