import React, { Component } from 'react';
import "./style.css"
class UpAndDown extends Component {
    constructor(props) {
        super(props);
        this.state= {
            count: 0,
            bgColor: ["red", "yellow", "green", "gray", "blue"]
        };
        this.handleIncre = () => {
            if (this.state.count === 4) {
                this.setState({
                    count: 0
                })
            }
            else {
                this.setState({
                count: this.state.count + 1,
                
                })
            }
        }
        this.handleDecre = () => {
            if (this.state.count === 0) {
                this.setState({
                    count: 4
                })
            }
            else {
                this.setState({
                count: this.state.count - 1,
                })
            }
        }
    }
    render() {
        return (
            <div className='container-upanddown' style={{backgroundColor: this.state.bgColor[this.state.count]}}>
                <p>Value: <span>{this.state.count}</span></p>
                <button className='btn-inc' onClick={this.handleIncre}>Increase
                </button>
                <button className='btn-dec' onClick={this.handleDecre}>Decrease
                </button>
            </div>
        );
    }
}

export default UpAndDown;
