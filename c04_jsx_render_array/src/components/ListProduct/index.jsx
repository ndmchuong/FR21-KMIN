import React, { Component } from "react";
import { products } from "../../../../c04_jsx_render_array/src/data/mockdata";
import "./style.css"
export class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: products
    };
    this.handleDelete = (id) => {
      const newList = this.state.productList.filter((value) => value.id !== id);
      this.setState({
        productList: newList,
      });
    };
  }
  render() {
    return (
      <div className="product">
        <h2>Danh sách sản phẩm</h2>
        <div className="container-list">
          {this.state.productList.map((item) => (
            <div className="container-product">
              <img src={item.image} alt="" className="product-img" />
              <h1 className="product-name">{item.name}</h1>
              <p className="product-info">{item.desc}</p>
              <div className="price-btn">
                <span className="price">{item.price}</span>
                <button className="btn-buy">Mua ngay</button>
                <button
                  className="btn-delete"
                  onClick={() => this.handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
