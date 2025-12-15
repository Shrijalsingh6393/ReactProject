

function Activity1Comp(props){
    return(
        <div id={props.id} className="foodBox">
        <p className="food-name">{props.name}</p>
        <p className="food-type">{props.type}</p>
        </div>
    )
}


export default Activity1Comp;