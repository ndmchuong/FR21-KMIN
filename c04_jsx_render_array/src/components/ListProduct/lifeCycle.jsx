import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log("lifecycle");
        this.state = {
            name: this.props.name
        }
        
    }
    static getDerivedStateFromProps(props, state) {
        console.log(props, state)
        return props
    }
    getSnapshotBeforeUpdate(props, state) {
        console.log(props, state);
        
    }
    // componentDidMount() {
    //     console.log("mouting");
    // }
    // componentDidUpdate() {
    //     console.log("update")
    // }
    // componentWillUnmount() {
    //     console.log("unmount")
    // }
  render() {
    console.log("render")
    return (
        
      <div>{this.state.name}</div>
    )
  }
}
