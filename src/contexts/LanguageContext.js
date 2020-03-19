import React, { Component,createContext } from 'react'

export const LanguageContext=createContext();

export class LanguageProvider extends Component{
    constructor(props){
        super(props);
        this.state={language:"french"};
        this.changeLanguage=this.changeLanguage.bind(this);
    }
    changeLanguage(e){
        this.setState({language:e.target.value});
    }
    render(){
        return(
            <LanguageContext.Provider value={{...this.state,changeLanguage:this.changeLanguage}}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

//Defining our own higher order component like withStyles and withRouter
// using which we can abstract the component in a seperate file and display only consumer
export const withLanguageContext= Component => props => (
    //Generic use of Component. We can pass any React component as an argument and that will be wrapped as an consumer element
    <LanguageContext.Consumer>
        {value => <Component languageContext={value} {...props}/>}
    </LanguageContext.Consumer>
)