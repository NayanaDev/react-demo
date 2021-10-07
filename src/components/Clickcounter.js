import { useState } from "react";
import withCounter from "./withCounter";
function Clickcounter(props)
{   
    const {name,count,incrementCnt} = props
    return(
        
        <button className="btn btn-success" onClick={incrementCnt}>{name} clicked {count} times</button>
    )
}
export default withCounter(Clickcounter);