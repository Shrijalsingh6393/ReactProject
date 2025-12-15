
import './CSSExternal1.css'
// the css file imported afterwards will be given priority . All the properties except the one in the 
// second css file will be overriden

const myStyle = {
    color : "blue",
    backgroundColor : "yellowgreen",
    border : "2px solid red",
    borderRadius : "4px"
}

// function CSSInline(){
//     return(
//         <div style={myStyle}>
//             <h1>This is inline CSS Example</h1>
//         </div>
//     )
// }




// css files are global files , once imported can be used in any other file
function CSSInline(){
    return(
        <div className="container">
            <h1>This is inline CSS Example</h1>
        </div>
        
    )
}


export default CSSInline