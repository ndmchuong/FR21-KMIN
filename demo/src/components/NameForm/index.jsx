// import React, { Component } from 'react'
import { useState } from "react";
// CLASS COMPONENT

// export default class Nameform extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name : '',
//             age : ''
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event) {
//         const name = event.target.name;
        
//         this.setState({
//             [name]: event.target.value
//         })
//     }
//     handleSubmit(event) {
//         console.log(this.state);
//         // event.preventDefault()
//     }
//   render() {
//     return (
//       <form >
//         <label>
//             Name: 
//             <input type="text"
//             name='name'
//             value={this.state.name}
//             onChange={this.handleChange}
//             />
//         </label>
//         <label>
//             Age :
//             <input type="text" 
//             name='age' 
//             value={this.state.age}
//             onChange={this.handleChange}
//             />
//         </label>
//         <button onClick={this.handleSubmit}>Submit</button>
//       </form>
//     )
//   }
// }
export const FormFunction = (props) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    class: ''
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(pre => ({
      ...pre, [name] : value
    }));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type="text" name='name' value={input.name} onChange={handleChange}/>
        </label>
        <label>
          Enter your age:
          <input type="text" name='age' value={input.age} onChange={handleChange}/>
        </label>
        <label>
          Enter your class:
          <input type="text" name='class' value={input.class} onChange={handleChange}/>
        </label>
        <input type="submit" />
      </form>
    </div>
  )
}