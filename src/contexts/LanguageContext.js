import React, {createContext, useState } from 'react'

export const LanguageContext=createContext();

export function LanguageProvider (props){
    const [language,setLanguage]= useState("english");
    const changeLanguage= e =>{
        setLanguage(e.target.value);
    }
    
        return(
            <LanguageContext.Provider value={{language,changeLanguage}}>
                {props.children}
            </LanguageContext.Provider>
        );
    
}

// //Defining our own higher order component like withStyles and withRouter
// // using which we can abstract the component in a seperate file and display only consumer
// export const withLanguageContext= Component => props => (
//     //Generic use of Component. We can pass any React component as an argument and that will be wrapped as an consumer element
//     <LanguageContext.Consumer>
//         {value => <Component languageContext={value} {...props}/>}
//     </LanguageContext.Consumer>
// )