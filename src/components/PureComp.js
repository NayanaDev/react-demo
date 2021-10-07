import { PureComponent } from "react";
import { Component } from "react";

class PureComp extends PureComponent{
    render(){
        console.log("pure comp")
        return(
            <div>
                This is pure comp 
            </div>
        )
    }
}

export default PureComp