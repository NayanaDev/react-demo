import { useState } from "react";
const withCounter = WrappedComponent => {
    function WithCounter(props)
    {
        var [count, setCount] = useState(0);
        function incrementCount()
        {
            setCount(count+1);
        } 
        return (
            <WrappedComponent {...props} count={count} incrementCnt={incrementCount}/>
        )
    }
    return WithCounter
}

export default withCounter