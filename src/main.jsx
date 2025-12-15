import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lists from './NewList.jsx'
import DashboardComponent from './DashboardComponent.jsx'
import TableComponent from './TableComponent.jsx'
import NewComponent from './NewComponent.jsx'
import JSXBasics from './JSXBasics.jsx'
import React from "react";
import LaptopFunction from './LaptopFunction.jsx'
import UniversityClassComp from './UniversityClassComp.jsx'
import StudentComponent from './StudentComponent.jsx'
import CSSInline from './CSSInline.jsx'
import CSSExternal from './CSSExternal.jsx'
import CSSModule from './CSSModule.jsx'
import Activity1 from './Activity1.jsx'
import TailwindExample from './TailwindExample.jsx'
import TailwindPractice1 from './TailwindPractice1.jsx'
import EventHandling from './EventHandling.jsx'
import EventHandling1 from './EventHandling1.jsx'
import LaptopComponent from './LaptopComponent.jsx'
import Activity2 from './Activity2.jsx'
import UseStateExample from './UseStateExample.jsx'
import UseEffectExample from './UseEffectExample.jsx'
import WithoutUseContext from './UseContext/WithoutUseContext.jsx'
import ProviderComp from './UseContext/ProviderComp.jsx'
import ThemeProvider from './UseContext/ThemeProvider.jsx'
import ParentComp from './UseCallback/ParentComp.jsx'
import ParentTheme from './UseCallback/ParentTheme.jsx'
import UseMemoExample from './UseMemo.jsx/UseMemoExample.jsx'
import UseReducerExample from './UseReducerExample.jsx'
// import UseReducerExample1 from './useReducerExample1.jsx'
import UseRefExample1 from './UseRef/UseRefExample1.jsx'
import UseRefExample2 from './UseRef/UseRefExample2.jsx'
// import Practice from './practice.jsx'
import ToggleState from './CustomHook/ToggleState.jsx'
import SimpleForm from './SimpleForm.jsx'
import ControlledComponent2 from './FormHandling/ControlledComponent2.jsx'
import UncontrolledComponent from './FormHandling/UncontrolledComponent.jsx'
// import ActivityForm from './FormHandling/ActivityForm.jsx'
// import FormValidation from './FormHandling/FormValidation.jsx'
import HTTPRequestComp from './HTTPMethods/HTTPRequestComp.jsx'
import HTTPRequestAxios from './HTTPMethods/HTTPRequestAxios.jsx'
import ParentRouting from './Routing/ParentRouting.jsx'
import HTTPActivity1 from './HTTPMethods/HTTPActivity1.jsx'
import FAQ from './HTTPMethods/HTTPActivity1.jsx'
// import ParentRouting2 from './Routing/ParentRouting2.jsx'
// import ControlledComponent from './FormHandling/ControlledComponent.jsx'
// import ControlledComponent2 from './FormHandling/ControlledComponent2.jsx'
import { Provider } from 'react-redux'
import { store } from './store.jsx'
import {store1} from './store1.jsx'




const firstElt = <h2>This is my new element</h2>

function Laptop(){
  return(
    <div>
      <h3>This is a laptop function.</h3>
    </div>
  )
}

function Box(){
  return(
    <div>
      <h2>This is my box component.</h2>
       <Laptop/>
    </div>
  )
}

// class Classroom extends React.Component{
//   render(){
//     return(
//       <h3>This is my classroom component</h3>
//     )
//   }
// }

// class University extends React.Component{
//   render(){
//     return(
//       <div>
//         <h2>This is my university class component.</h2>
//         <Classroom/>
//       </div>
//     )
//   }
// }


let modelno = 123;

let configuration = {
  ram : "16GB",
  ssd : "256GB"
}

let version = [1.1,1.2,1.3];

let age = 20;

// activity 1



createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // {/* // <App />
    // // {/* {firstElt} */}
    // {/* // <Lists /> */}
    // {/* // <DashboardComponent/> */}
    // {/* // <TableComponent/> */}
    // {/* <NewComponent/> */}
    // {/* <JSXBasics/> */}
    // {/* <Box/> */}
    // {/* <LaptopFunction brand = "Dell" color = "Grey" year = {2025} model = {modelno} con = {configuration} ver = {version}/> */}
    // {/* <LaptopFunction brand = "HP" color = "Silver"/>  */}
    //  {/* <UniversityClassComp name = "LPU"/> */}
    // {/* <StudentComponent name = "Shrijal" state = "Uttar Pradesh" age = {age} course = "ReactJs" /> */}
    // {/* <University/> */}
    // {/* <Laptop/> */}
    // {/* // <CSSInline/>
    // // <br/>
    // // <CSSExternal/>
    // // <br/>
    // // <CSSModule/> */}

    // {/* <Activity1 name="Pizza" type="Italian"/> */}
    // {/* <Activity1 name="Noodles" type="Chinese"/>
    // // <Activity1 name="Pav Bhaji" type="Indian"/> */}
    // {/* // <TailwindExample/> */}
    // {/* // <TailwindPractice1/> */}
    // {/* // <EventHandling/> */}
    // {/* // <EventHandling1/> */}
    // {/* // <LaptopComponent/> */}
    // {/* // <Activity2/> */}
    // {/* // <UseStateExample/> */}
    // {/* // <UseEffectExample/> */}
    // {/* // <WithoutUseContext /> */}
    // {/* // <ProviderComp /> */}
    // {/* // <ThemeProvider /> */}
    // {/* // <ParentComp /> */}
    // {/* // <ParentTheme /> */}
    // {/* // <UseMemoExample /> */}
    // {/* // <UseReducerExample /> */}
    // {/* // <UseReducerExample1/> */}
    // {/* // <UseRefExample1/> 
    // <UseRefExample2/>
    // <Practice/>
    // // <ToggleState/>
    // // <ControlledComponent/>
    // // <ControlledComponent2/> */}
    // {/* <ToggleState/> */}
    // {/* <SimpleForm/> */}
    // <UseRefExample2/>
    // <ParentComp/>
    // <ControlledComponent2/>
    // <UncontrolledComponent/>
    // <ActivityForm/>
    // <FormValidation/>
    // <HTTPRequestComp/>
    // <HTTPRequestAxios/>
    // <ParentRouting/>
    // <HTTPActivity1/>
    // <FAQ/>
    // <ParentRouting/>
    // <ParentRouting2/>
    // <UseReducerExample/>
    // <Provider store={store}>          
    //   <App/>
    // </Provider>
    <Provider store={store1}>          
      <App/>
    </Provider>
  // {/* </StrictMode>, */}
)

// 'strictmode' keep the track of errors
// render means add

// Port 5174 is just another port number — typically used when 
// port 5173 (the default for Vite) is already busy or taken by another app.
