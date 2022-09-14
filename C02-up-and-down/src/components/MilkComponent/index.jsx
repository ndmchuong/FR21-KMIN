import React, { Component } from 'react';
import { products } from '../../data/mockdata';
import "./style.css"
class MilkComponet extends Component {
    constructor(props) {
        super(props);
        this.state= {
            
        };
    };
    render() {
    return (
    
      <div className='container-product'>
        <img src={this.props.src} alt="" />
        <div className="product-info">
            <h1>{this.props.title}</h1>
            <div>{this.props.content}</div>
            <span>{this.props.price}</span>
            <button>Mua ngay</button>
            <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
        </div>
      </div>
    )
  }
}
export default MilkComponet;
