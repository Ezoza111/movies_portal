import { createContext, useContext } from "react";
import PropTypes from 'prop-types'

export const ThemeContext = createContext(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error('Context: ThemeContext Error')
    } 
    return context
}


export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark((prev) => !prev)
    }
    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
ThemeContext.propstype = {
  isDark: PropTypes.bool,
  toggleTheme: PropTypes.func
}
ThemeProvider.propstype = {
  children: PropTypes.element
}
