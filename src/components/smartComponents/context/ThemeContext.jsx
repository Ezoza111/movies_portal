import { createContext, useContext } from "react";

const ThemeContext = createContext(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error('Context: ThemeContext Error')
    } 
    return context
}

