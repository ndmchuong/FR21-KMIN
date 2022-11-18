import { useState } from "react";

export const ItemProduct = (props) => {
    const item = props.item;
    const [price, setPrice] = useState(item.version[0].price);
    const handleSelectVersion = (index) => {
        setPrice(item.version[index].price);
    }
    return (
        <div className="item-product">
            <img className="product-img" src={item.img.banner} alt={item.model}/>
            <span className="product-model">{item.model}</span>
            {item.version.map((item, index) => 
                <button onClick={() => handleSelectVersion(index)} className= {`btn-price-version${index + 1}`}>{item.ram}-{item.rom}
                </button>
            )}
            <span className="price">{`${String(price)}đ`}</span>
        </div>
    )
}