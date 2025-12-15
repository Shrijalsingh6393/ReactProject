import React from "react";

class NewComponent extends React.Component{
    render(){
        // return React.createElement('h3',null,'This heading is created using createElement');
        // return React.createElement('h3',{style:{color:'green'}},'This heading is created using createElement');
        return React.createElement('div',{style:{backgroundColor:'yellow'}},React.createElement('h1',{style:{color:'purple'}},'this is heading inside div.'))
    }
}

export default NewComponent;

