import withCounter from "./withCounter";
function Hovercounter(props)
{
    return(
       <h2 onMouseOver={props.incrementCnt}>{props.name} Hovered {props.count} times</h2>
    )
}
export default withCounter(Hovercounter);