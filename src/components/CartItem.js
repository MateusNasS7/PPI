import React from "react";

export default function CartItem({
    id,
    thumbnail,
    title,
    price
}) {

const CartItem = ({ item, updateItemQuantity, removeItemFromCart }) => {
    return (
        <div className="cart-item">
            <img src={item.thumbnail} alt={item.title} />
            <div className="info">
                <h4>{item.title}</h4>
                <p>R$ {item.price.toFixed(2)}</p>
            </div>
            <div className="controls">
                <button onClick={() => updateItemQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateItemQuantity(item.id, 1)}>+</button>
                <button onClick={() => removeItemFromCart(item.id)}>Remover</button>
            </div>
        </div>
    );
};

}