import React from "react"


class Activity2 extends React.Component{

    constructor(){
        super();
        this.state = {counter:0}
    }

    addFun = () => {
        this.setState({counter:this.state.counter+1})
    }
    subFun = () => {
        this.setState({counter:this.state.counter-1})
    }
    render(){
        return(
            <div>
                <p>counter = {this.state.counter}</p>
                <button onClick={this.addFun}>+</button>
                <button onClick={this.subFun}>-</button>
            </div>
        )
    }
}

export default Activity2