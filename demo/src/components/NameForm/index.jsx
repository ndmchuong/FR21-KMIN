import React, { Component } from 'react'

export default class Nameform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            age : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        
        this.setState({
            [name]: event.target.value
        })
    }
    handleSubmit(event) {
        console.log(this.state);
        // event.preventDefault()
    }
  render() {
    return (
      <form >
        <label>
            Name: 
            <input type="text"
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            />
        </label>
        <label>
            Age :
            <input type="text" 
            name='age' 
            value={this.state.age}
            onChange={this.handleChange}
            />
        </label>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}
