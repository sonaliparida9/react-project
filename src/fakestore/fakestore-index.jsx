import { useState, createContext } from "react";
import { FakstoreProducts } from "./fakestore-product";

// Create Context
export const SearchContext = createContext();

export function FakestoreIndex() {
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [searchString, setSearchString] = useState("");

    function handleAddToCartClick(product) {
        setCartItems((prevItems) => {
            const updatedItems = [...prevItems, product];
            setCartItemsCount(updatedItems.length);
            return updatedItems;
        });
        alert(`${product.title}\nAdded to cart`);
    }

    // ✅ Remove item by index
    function handleRemoveFromCart(index) {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.filter((_, i) => i !== index);
            setCartItemsCount(updatedItems.length);
            return updatedItems;
        });
    }

    return (
        <div className="container-fluid">
            <header className="border mt-2 border-1 p-4 d-flex justify-content-between">
                <div className="fs-5 fw-bold">Fakestore</div>

                {/* 🔎 Search Bar */}
                <nav>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search fakestore"
                            value={searchString}
                            onChange={(e) => setSearchString(e.target.value)}
                        />
                        <button className="btn btn-warning bi bi-search"></button>
                    </div>
                </nav>

                {/* 🛒 Cart Button */}
                <div>
                    <button
                        data-bs-target="#cart"
                        data-bs-toggle="offcanvas"
                        className="btn btn-warning bi bi-cart4 position-relative"
                    >
                        Your Cart{" "}
                        <span
                            className="position-absolute bg-danger badge text-white fs-6 rounded rounded-circle"
                            style={{ right: "-10px", top: "-5px" }}
                        >
                            {cartItemsCount}
                        </span>
                    </button>

                    <div className="offcanvas offcanvas-end" id="cart">
                        <div className="offcanvas-header">
                            <h3>Your Cart Items</h3>
                            <button
                                className="btn btn-close"
                                data-bs-dismiss="offcanvas"
                            ></button>
                        </div>

                        <div className="offcanvas-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Preview</th>
                                        <th>Price</th>
                                        <th>Action</th> {/* ✅ New column */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.length > 0 ? (
                                        cartItems.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.title}</td>
                                                <td>
                                                    <img
                                                        src={item.image}
                                                        width="50"
                                                        height="50"
                                                        alt={item.title}
                                                    />
                                                </td>
                                                <td>${item.price}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() =>
                                                            handleRemoveFromCart(index)
                                                        }
                                                    >
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="text-center">
                                                Cart is empty
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </header>

            <section className="mt-4">
                {/* Provide searchString via Context */}
                <SearchContext.Provider value={searchString}>
                    <FakstoreProducts addToCart={handleAddToCartClick} />
                </SearchContext.Provider>
            </section>
        </div>
    );
}
