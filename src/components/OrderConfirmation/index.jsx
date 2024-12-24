import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { nanoid } from "nanoid"
import orderConfirmed from "../../assets/images/icon-order-confirmed.svg"

export default function OrderConfirmation() {
    const { cartItems, totalPrice, startNewOrder } = useContext(CartContext)

    const CartItemsElements = cartItems.map(item => (
        <div className="flex items-center border-b-[1px] py-4" key={nanoid()}>
            <img className="w-12 rounded mr-2" src={item.image} alt={item.name} />
            <div className="mr-auto">
                <h2 className="text-very_dark_rose font-semibold text-sm">{item.name}</h2>
                <div className="flex">
                    <h3 className="text-orange_red font-semibold text-sm mr-2">{item.quantity}x</h3>
                    <h3 className="text-rose font-medium text-sm mr-4">${item.price.toFixed(2)}</h3>
                </div>
            </div>
            <span className="text-very_dark_rose font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    ))

    return (
        <div className="bg-white w-[450px] p-8 rounded-xl sm:w-screen sm:rounded-b-none">
            <img className="mb-4" src={orderConfirmed} alt="order confirmed" />
            <h2 className="text-very_dark_rose text-4xl font-bold mb-2">Order Confirmed</h2>
            <p className="text-rose text-sm mb-4">We hope you enjoy your food!</p>
            <div className="bg-very_light_rose rounded p-4 mb-4">
                {CartItemsElements}
                <div className="flex justify-between items-center">
                    <p className="text-sm text-dark_rose">Order Total</p>
                    <span className="text-xl text-very_dark_rose font-bold">${totalPrice.toFixed(2)}</span>
                </div>
            </div>
            <button onClick={startNewOrder} className="bg-orange_red text-white w-full p-3 rounded-full hover:brightness-75 transition">Start New Order</button>
        </div>
    )
}