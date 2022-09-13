import React, { Component } from 'react';
import "./style.css"
class UpAndDown extends Component {
    constructor(props) {
        super(props);
        this.state= {
            count: 0,
            bgColor: ["red", "yellow", "green", "gray", "blue"]
        }
    }
    render() {
        return (
            <div className='container-upanddown' style={{backgroundColor: this.state.bgColor[this.state.count]}}>
                <p>Value: <span>{this.state.count}</span></p>
                <button className='btn-inc' onClick={() => {
                    if (this.state.count === 4) {
                        this.setState({
                            count: 0
                        })
                    }
                    else {
                        this.setState({
                        count: this.state.count + 1,
                        
                        })
                    };
                }}>Increase
                </button>
                <button className='btn-dec' onClick={() => {
                    if (this.state.count === 0) {
                        this.setState({
                            count: 4
                        })
                    }
                    else {
                        this.setState({
                        count: this.state.count - 1,
                        })
                    };
                }}>Decrease
                </button>
            </div>
        );
    }
}

export default UpAndDown;
