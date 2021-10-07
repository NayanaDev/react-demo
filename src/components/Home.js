import React, { useContext } from "react"
import { connect } from "react-redux"
import Clickcounter from './Clickcounter'
import Hovercounter from './Hovercounter'
import { ChannelContext, UserContext } from "../App"
function Home(props)
{
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext)
    return(
        <React.Fragment>
            <Clickcounter name="Nayana"/>
            <Hovercounter name="Nitya"/>
            <br/>
            User Context {user} <br/>Channel Context {channel} <br/>
            This is home page
            Email: {props.User.email}
            Password : {props.User.pass}
        </React.Fragment>
       
    )
}

export default connect(function(state,props){
    console.log("-------st",state)
    return{
        User:state['user'] || []
    }
})(Home)