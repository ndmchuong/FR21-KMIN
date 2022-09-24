import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.children}</p>
      </div>
    )
  }
}
