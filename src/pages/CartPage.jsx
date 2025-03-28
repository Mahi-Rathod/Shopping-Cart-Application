import { useState } from "react";
import { FaTrash, FaBookmark, FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "../context/CartContext.jsx";

export default function CartPage() {
    const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

    console.log(cart);
    const getTotal = () => {
        const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        const discount = cart.reduce((total, item) => total + (item.discount || 0), 0);
        const coupons = cart.reduce((total, item) => total + (item.coupon || 0), 0);
        const delivery = cart.reduce((total, item) => total + (item.delivery || 0), 0);
        return { totalPrice, discount, coupons, delivery, totalAmount: totalPrice - discount - coupons + delivery };
    };

    const totals = getTotal();

    return (
        <div className="p-6 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
                {cart.length === 0 ? (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                ) : (
                    cart.map((product) => (
                        <div key={product.id} className="flex border-b py-4">
                            {/* Left Column - Image, Quantity Buttons, Remove Button */}
                            <div className="flex flex-col items-center w-1/4">
                                <img src={product.image} alt={product.name} className="w-40 h-30 object-cover rounded-sm border border-gray-400" />
                                <div className="flex gap-2 mt-2 items-center">
                                    <button className="text-gray-600" onClick={() => decrementQuantity(product.id)}>
                                        <FaMinus />
                                    </button>
                                    <span className="px-2">{product.quantity}</span>
                                    <button className="text-gray-600" onClick={() => incrementQuantity(product.id)}>
                                        <FaPlus />
                                    </button>
                                </div>
                                <button className="text-red-500 flex items-center gap-1 mt-2" onClick={() => removeFromCart(product.id)}>
                                    <FaTrash /> Remove
                                </button>
                            </div>

                            {/* Right Column - Product Details */}
                            <div className="flex flex-col gap-1.5">
                                <h2 className="text-lg font-semibold">{product.name}</h2>
                                <p className="text-left">Price : ₹{product.price}</p>
                                <p className="text-gray-600 text-left">Total Price : ₹{product.price * product.quantity}</p>
                                <p className={product.quantityAvailable === 0 ? "text-red-500" : "text-green-600"}>
                                    {product.stock}
                                </p>
                            </div>
                        </div>

                    ))
                )}
            </div>

            <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold border-b pb-2 mb-4">PRICE DETAILS</h2>
                <div className="space-y-2 text-gray-700">
                    <p className="flex justify-between"><span>Price ({cart.length} items)</span> <span>₹{totals.totalPrice}</span></p>
                    <p className="flex justify-between text-green-600"><span>Discount</span> <span>- ₹{totals.discount}</span></p>
                    <p className="flex justify-between text-green-600"><span>Coupons for you</span> <span>- ₹{totals.coupons}</span></p>
                    <p className="flex justify-between"><span>Platform Fee</span> <span>₹3</span></p>
                    <p className="flex justify-between"><span>Delivery Charges</span> <span>₹{totals.delivery}</span></p>
                    <hr />
                    <p className="flex justify-between font-bold text-lg"><span>Total Amount</span> <span>₹{totals.totalAmount}</span></p>
                    <p className="text-green-600 text-sm">You will save ₹{totals.discount + totals.coupons} on this order</p>
                </div>
            </div>
        </div>
    );
}
