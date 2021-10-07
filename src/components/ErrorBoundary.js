import { Component } from "react";
class ErrorBoudary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasErr : false
         }
    }
     static getDerivedStateFromError(error)
    {
        console.log("err in boundry ",error)
        return {hasErr :true} 
    }
    componentDidCatch(error,info)
    {
        console.log("err ",error)
        console.log("info in boundry ",info)
    }
    render() { 
        if(this.state.hasErr == true) 
        {
            return (
                    <h1>Something went wrong</h1>
                );
        }
        else
        {
            return this.props.children
        }   
       
    }
}
 
export default ErrorBoudary;