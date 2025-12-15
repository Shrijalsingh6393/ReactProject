
// import React, { Component } from 'react'

// export default class ControlledComponent extends Component {

//     constructor(){
//         super();
//         this.state = {
//             firstname : ' ',
//             lastname : ' ',
//             review : ' '
//         }
//     }

//     // changeFirstname = (e) => {
//     //     this.setState({firstname: e.target.value})
//     // }

//     // changeLastname = (e) => {
//     //     this.setState({lastname: e.target.value})
//     // }

//     // changeReview = (e) => {
//     //     this.setState({review: e.target.value})
//     // }

//     handleInputs = (e) => {
//         const {name,value} = e.target;
//         this.setState({
//             [name] : value
//         })
//     }

//     handleSubmit = (e) => {
//         alert(`Welcome ${this.state.firstname} ${this.state.lastname} and your review is ${this.state.review}`)
//         e.preventDefault();
//     }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//             {/* First Name : <input type="text" className='border-2 border-solid border-black' 
//             value = {this.state.firstname} onChange={this.changeFirstname}/> */}
//             First Name : <input type="text" className='border-2 border-solid border-black' 
//             value = {this.state.firstname} onChange={this.handleInputs} name = 'firstname'/>
//             <br/>
//             Last Name : <input type="text" className='border-2 border-solid border-black' 
//             value = {this.state.lastname} onChange={this.handleInputs} name = 'lastname'/>
//             <br/>
//             Enter Review : <textarea className='border-2 border-solid border-black' 
//             value = {this.state.review} onChange={this.handleInputs} name = 'review'></textarea>
//             <br/>
//             <button>Submit</button>
//         </form>
//       </div>
//     )
//   }
// }




