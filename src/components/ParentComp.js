/* This is example of pure component. here pure comp does not redender after 2 secodnds as same value passed in constructor n setinterval so it does shallow comparison of props n state & avoid redendering if no change there but reg comp doesn't do it redender it multiple times. So pure comp enhances performance. Pure comp is used in class based components same achied with react memo in functional comp*/

import React from "react";
import { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";
class ParentComp extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : "Nayana",
        }
        
    }
    componentDidMount()
    {
        setInterval(() => {
            this.setState({name:"Nayana"})
        }, 2000);
    }
    render(){
        return(
            <React.Fragment>
                <RegComp />
                <PureComp />
                <MemoComp />
            </React.Fragment>
        )
    }
    
}
export default ParentComp