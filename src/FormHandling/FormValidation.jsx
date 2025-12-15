import React,{useState} from 'react'

const FormValidation = () => {

    const [mydata,setMydata] = useState({
            fname:'',
            lname:''
        })

    const [err,setErr] = useState({
        fnameerror :"",
        lnameerror:""
    })
        
        const changeData = (e) =>{
            const {name,value,error} = e.target;
            setMydata((mydata) =>({...mydata,
                [name] : value
            }))

            setErr(() =>{
                if(name!=""){
                    [name] = error
                }
            }
                
            )
            
        }
    
        const handleSubmit = (e) => {
            let fnameerror = "";
            let lnameerror = "";

            if(!mydata.fname){
                fnameerror = "First Name Field is required"
            }

            if(!mydata.lname){
                lnameerror = "Last Name Field is required"
            }

            setErr({
                fnameerror,
                lnameerror
            })

            if(!fnameerror && !lnameerror){
                alert(`Welcome ${mydata.fname} ${mydata.lname}`)
            }
            e.preventDefault();
        }

  return (
    <div>
          <form onSubmit={handleSubmit}>
    First Name : <input type="text" name="fname" className='border-2 border-solid border-black' 
        value = {mydata.fname} onChange={changeData}/><br/>
        <span className='text-red-600'>{err.fnameerror}</span><br/>
    Last Name : <input type="text" name="lname" className='border-2 border-solid border-black' 
        value = {mydata.lname} onChange={changeData}/><br/>
        <span className='text-red-600'>{err.lnameerror}</span><br/>

    <button>Submit</button>
    </form>
    </div>
  )
}

export default FormValidation
