import { ItemProduct } from "./ItemProduct";

export const ListProducts = (props) => {
    const products = props.products;
    return (
        <div className="container-list-item">
            {products.map((item) => 
            <ItemProduct item={item}
            />)}
        </div>
    )
}