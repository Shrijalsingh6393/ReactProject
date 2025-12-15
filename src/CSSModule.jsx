
import style from './CSSModule.module.css'
import style2 from './CSSModule1.module.css'
console.log(style);
console.log(style2);

// style is a variable . it creates an object and extract the style from the file.
// every variable has a unique id and it cannot be overriden (in external css overrding was the issue)
// module belong to a particular component

function CSSModule(){
    return(
        <div className={style2.mystyle}>
            <h1>This is CSS Module Example</h1>
        </div>
    )
}

export default CSSModule;