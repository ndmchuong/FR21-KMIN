
import React, { Component } from 'react';
import "./style.css"
class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log(props)

    }
    render() {
        
        return (
            <div className='container-register'>
                <h1 className='register-title'>{this.props.title}</h1>
                <div className="email">
                    <h4>{this.props.inputValue.email}</h4>
                    <input type="text" placeholder= {"Enter your " + this.props.inputValue.email}/>
                </div>
                <div className="password">
                    <h4>{this.props.inputValue.password}</h4>
                    <input type="text" placeholder= {"Enter your " + this.props.inputValue.password}/>
                </div>
                <div className="confirm">
                    <h4>{this.props.inputValue.confirm}</h4>
                    <input type="text" placeholder= {"Enter your " + this.props.inputValue.confirm}/>
                </div>
                <button className='btn-init'>Register</button>
                
            </div>
            
        )
        
    }
}

export default ClassComponent;
