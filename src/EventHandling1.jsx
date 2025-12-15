
import React from "react";

class EventHandling1 extends React.Component{

    // newFun(){
    //     alert("OK");
    // }

    newFun = () => {
        alert("OK");
    }
    render(){
        return(
            <div>
                <h1>Event Handling Class Component</h1>
                <button onClick={this.newFun}>Click</button>
            </div>
        )
    }
}


export default EventHandling1;


// no need to write function or const keyword inside the class
// in class while using any function use this.functionName