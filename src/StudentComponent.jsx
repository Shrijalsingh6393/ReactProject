//  Destructuring 


// first way

// function StudentComponent({age,course,...rest}){
//     return(
//         <div>
//             <h3>My age is {age} , Course is {course} , Name is {rest.name}</h3>
//         </div>
//     )
// }



// second way

function StudentComponent(props){
    const {age,name} = props;
    return(
        <div>
            <h3>My age is {age} , Name is {name}</h3>
        </div>
    )
}

export default StudentComponent