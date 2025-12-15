


function LaptopFunction(props){
    return(
        <div>
            <h1>This is my laptop function component.</h1>
            <p>The color of laptop is {props.color} and the brand is {props.brand}</p>
            <p>The laptop is manufactured in year {props.year}, the model no. is {props.model} and the ram 
                is {props.con.ram} and ssd is {props.con.ssd}
            </p>
            <p>Version {props.ver[0]}</p>
        </div>
    )
}


export default LaptopFunction;