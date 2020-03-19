import React, {useState,createContext} from 'react'
import useToggleState from "../hooks/UseToggleState";
export const ThemeContext=createContext();

export function ThemeProvider(props){
    const [isDarkMode,toggleDarkMode]=useToggleState("false");
   
        return(
            <ThemeContext.Provider value={{ isDarkMode, toggleTheme:toggleDarkMode}}>
                {props.children}
            </ThemeContext.Provider>
        );
    
}