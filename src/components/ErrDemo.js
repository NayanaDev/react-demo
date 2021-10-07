import { Component } from "react";
import ErrorBoudary from "./ErrorBoundary";
import HeroComp from "./HeroComp";
class ErrDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <ErrorBoudary>
                    <HeroComp heronm="Superman" />
                </ErrorBoudary>
                <ErrorBoudary>
                    <HeroComp heronm="Batman" />
                </ErrorBoudary>                
                <ErrorBoudary>
                    <HeroComp heronm="Joker" />
                </ErrorBoudary>
            </div>
        );
    }
}
 
export default ErrDemo;