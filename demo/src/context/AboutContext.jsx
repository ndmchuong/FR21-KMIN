import { useMemo } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AboutContext = createContext();
export const AboutProvider = ({children}) => {
    const [counter, setCounter] = useState(1);
    // const myObject = {
    //     name: 'Chuong',
    //     age: 21
    // }
    const value = useMemo(
        () => ({
            
            counter,
            setCounter
        }),
        [counter, setCounter]
    )
    return <AboutContext.Provider value={value}>{children}</AboutContext.Provider>
}