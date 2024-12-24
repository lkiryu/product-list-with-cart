import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { nanoid } from "nanoid"
import CartItems from "../CartItems"
import carbonNeutral from "../../assets/images/icon-carbon-neutral.svg"
import emptyCart from "../../assets/images/illustration-empty-cart.svg"

export default function Cart() {
    const { cartItems, totalPrice, cartItemsCount, setConfirmation } = useContext(CartContext)

    const cartItemsElements = cartItems.map(product => (
        <CartItems
            key={nanoid()}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
        />
    ))

    return (
        <div className="bg-white p-6 rounded-xl w-80 sm:w-64 sm:text-center">
            <h2 className="text-orange_red font-bold text-lg mb-4">YOUR CART ({cartItemsCount})</h2>
            {
                cartItems.length
                    ?
                    <div>
                        {cartItemsElements}
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-sm text-very_dark_rose font-medium">Order Total</p>
                            <span className="text-2xl font-bold text-very_dark_rose">${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="bg-very_light_rose flex justify-center items-center p-3 rounded mb-4">
                            <img className="mr-1" src={carbonNeutral} alt="carbon neutral icon" />
                            <p className="text-xs text-very_dark_rose">This is a <span className="font-semibold">carbon-neutral</span> delivery</p>
                        </div>
                        <button onClick={() => setConfirmation(true)} className="bg-orange_red text-white w-full p-3 rounded-full hover:brightness-75 transition">Confirm Order</button>
                    </div>
                    :
                    <div className="flex flex-col items-center">
                        <img className="mb-4" src={emptyCart} alt="empty cart" />
                        <p className="text-dark_rose text-sm mb-4 font-medium">Your added items will appear here</p>
                    </div>
            }
        </div>
    )
}