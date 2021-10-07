import { Component } from "react";
import React from "react";
class RefDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
    }
    componentDidMount() {
        this.inputRef.current.focus()
    }
    clickHandler = () => {
        alert(this.inputRef.current.value);
    }
    render() { 
        return ( 
            <React.Fragment> 
            <h1>hi {this.context}</h1>
            <input type="text" ref={this.inputRef} />
            <button className="btn btn-success" onClick={this.clickHandler}>Submit</button>
            </React.Fragment>
        );
    }
}
 
export default RefDemo;