import React from 'react';
import InlineCss from 'react-inline-css';

export default class ReleaseMood extends React.Component{

    render () {

        let mood = {
            accent: this.props.mood.accent[0],
            primary1: this.props.mood.primary[0],
            primary2: this.props.mood.primary[1],
            primary3: this.props.mood.primary[2],
            secondary: this.props.mood.secondary[0]
        };

        let stylesheet = 
            "#release-deck a { color: " + mood.accent + " } " +
            "#release-deck h1, #release-deck h2 { color: " + mood.secondary + " } " +
            "#release-deck button { background-color: " + mood.secondary + "; color: " + mood.primary1 + " } ";
        
        return (
            <InlineCss stylesheet={stylesheet} />
        );
    }
};