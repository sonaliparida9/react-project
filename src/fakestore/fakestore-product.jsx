import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { SearchContext } from "./fakestore-index"; // ✅ import context

export function FakstoreProducts({ addToCart }) {
    const [products, setProducts] = useState([]);
    const searchString = useContext(SearchContext); // ✅ get search string

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`).then((response) => {
            setProducts(response.data);
        });
    }, []);

    // ✅ Filter products based on search
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchString.toLowerCase())
    );

    return (
        <div className="d-flex flex-wrap" >
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <div
                        className="card m-2 p-2"
                        key={product.id}
                        style={{ width: "200px" }}
                    >
                        <img
                            src={product.image}
                            className="card-img-top"
                            height={120}
                            alt={product.title}
                        />
                        <div
                            className="card-header overflow-auto"
                            style={{ height: "120px" }}
                        >
                            {product.title}
                        </div>

                        <div className="card-body">
                            <dl>
                                <dt>Price</dt>
                                <dd>${product.price}</dd>
                            </dl>
                        </div>
                        <div className="card-footer">
                            <button
                                onClick={() => addToCart(product)}
                                className="btn btn-warning bi bi-cart w-100"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center w-100 mt-4">No products found</p>
            )}
        </div>
    );
}
