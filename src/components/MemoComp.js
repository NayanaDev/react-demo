import React from "react"
function MemoComp(){
    console.log("in memo comp")
    return(
        
        <div>React memo demo</div>
    )
}

export default React.memo(MemoComp)