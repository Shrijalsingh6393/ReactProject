import './Activity1.css'
import Activity1Comp from './Activity1Comp';

function Activity1(){
    return(
        <body className='mystyle'>
        <div className = "mystyle1">
            <h1>My Favourite Foods</h1>
            <div className='mystyle2'>
            <div id="i1">
                <p>Pizza</p>
                <p>Italian</p>
            </div>
            <div id="i2">
                <p>Noodles</p>
                <p>Chinese</p>
            </div>
            <div id="i3">
                <p>Pav Bhaji</p>
                <p>Indian</p>
            </div>
            </div>
        </div>
        </body>
    )
}


export default Activity1;





// using props

// function Activity1(){
//     return(
//         <div className='mystyle1'>
//             <h1>My Favourite Foods</h1>
//             <div className="mystyle2">
//                <Activity1Comp id = "i1" name="Pizza" type="Italian" />
//                <Activity1Comp id = "i2" name="Noddles" type="Chinese"/>
//                <Activity1Comp id = "i3" name="Pav Bhaji" type="Indian" /> 
//             </div>
//         </div>
//     )
// }



// export default Activity1;






