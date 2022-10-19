import { useState } from "react";
import { products } from "../../data/mockdata";
import "../../sass/style.scss";


export const RenderArrayProducts = () => {
    const [list, setList] = useState(products);
    const handleDelete = (id) => {
        const newList = list.filter((value) => id !== value.id);
        setList(newList);
    }
    const [numberProduct, setNumberProduct] = useState(0);
    const handleAddCart = (id) => {
        let newNumber = numberProduct + 1;
        setNumberProduct(newNumber);
        const product = list.filter((value) => id === value.id);
        product[0].quantity += 1;
    }
    const handleSubCart = (id) => {
        let newNumber = numberProduct - 1;
        if (newNumber < 0) {
            newNumber = 0;
        }
        setNumberProduct(newNumber);
        const product = list.filter((value) => id === value.id);
        product[0].quantity -= 1;
        if (product[0].quantity < 0) {
            product[0].quantity = 0
        }
    }
    const handleSumPrice = () => {
        let sum = 0;
        const arrPrice = list.map((item) => item.quantity * item.price[1]);
        arrPrice.forEach((item) => sum += item);
        return sum;
    }
    const price = handleSumPrice();
    return (
        <>
            <h1 className="title">Danh sách sản phẩm</h1>
            <div className="cart">
                <img src="https://banner2.cleanpng.com/20180705/azf/kisspng-shopping-cart-software-computer-icons-shopping-icon-5b3eb003bbc062.574139001530834947769.jpg" alt="" className="cart-img" />
                <span className="cart-number">{numberProduct}</span>
                <span className="cart-pay">Thanh toán: {price}Đ</span>
            </div>
            {list.map((item) => {
                return (
                <div className="container-product">
                    <img src={item.image} alt={item.name} className="product-img" />
                    <h3 className="product-title">{item.name}</h3>
                    <p className="product-content">{item.desc}</p>
                    <span className="product-price">{item.price[0]}</span>
                    <div className="product-gr-btn">
                        <button className="btn-add" onClick={() => handleAddCart(item.id)}>+</button>
                        <span>Số lượng mua: {item.quantity}</span>
                        <button className="btn-sub" onClick={() => handleSubCart(item.id)}>-</button>
                        <button className="btn-delete" onClick={() => handleDelete(item.id)}>Xóa</button>
                    </div>
                </div>
                )
                })
            }
            
        </>
    )
}
