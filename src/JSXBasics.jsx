import './JSXBasics.css';

function calculateWeight(wt){
    return wt*100;
}

function clickme(){
        alert("Hello");
    }


function JSXBasics(){

    const x = 5+5;

    const y = "myclass";

    const TV = {
    brand : "Samsung",
    model : "Abc12",
    color : "Black"
};

const style1 = {
    color : "orange",
    backgroundColor: "grey"
};
    return(

        <div class={y}>
        <h1>I have calculated {10*5}</h1>
        <h1>The sum is : {x}</h1>
        <h2>The calculation of Weight is : {calculateWeight(5)}</h2>
        <h3>The brand is : {TV.brand} , The model is : {TV.model} , The color is : {TV.color}</h3>
        <button id = "i1" onClick={clickme} disabled={false}>Click</button>

        <div style={style1}>
            <h2>Hello, this is the child div section</h2>
        </div>
        </div>
    )
    
}

// to disable the button use disabled = {true}


// use curly braces to write the expression

export default JSXBasics;