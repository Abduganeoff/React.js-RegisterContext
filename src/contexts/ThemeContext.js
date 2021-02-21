import React, { useState, createContext} from 'react';

export const ThemeContext = createContext();

export function ThemeProvider(props){
    const [isDarkMode, setDarkMode] = useState(false);

    const toggle = () => {
        setDarkMode(!isDarkMode);
    }

    return(
        <ThemeContext.Provider 
            value={{ isDarkMode, toggle}}
        >
            {props.children}
        </ThemeContext.Provider>
    );
}

 