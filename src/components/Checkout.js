import { Link } from "react-router-dom";
import { useContext } from "react";
import CartItem from "./CartItem";
import { CircularProgress } from "@mui/material";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
    const { products, loading, error } = useContext(CartContext);
    return (
        <section id="checkout">
            <h2>Checkout</h2>

            <ul id="Cart">
                {error && <p>{error}</p>}
                {!loading && products ? (
                    products.map((product) => (
                        <li key={product.id}>
                            <CartItem {...product} />
                        </li>
                    ))
                ) : (
                    <div id="loading">
                        <CircularProgress size="10rem" color="inherit" />
                        <p>Loading products...</p>
                    </div>
                )}
            </ul>
            <Link to="/" className="product-actions">
                <button>RETURN</button>
            </Link>

        </section>
    );
}
