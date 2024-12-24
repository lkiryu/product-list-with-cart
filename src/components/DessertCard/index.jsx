import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import iconAddToCart from "../../assets/images/icon-add-to-cart.svg"
import { FaMinus, FaPlus } from "react-icons/fa";

export default function DessertCard({ dessert, image, name, category, price }) {
    const { addItemToCart, isProductInCart, getCartItem, incrementQuantity, decrementQuantity } = useContext(CartContext)

    return (
        <div className="w-64">
            <div className="relative mb-8">
                <img className={`rounded-xl ${isProductInCart(name) ? "border-2 border-orange_red" : null} w-64 h-64`} src={image} alt={name} />
                {
                    isProductInCart(name)
                        ?
                        <div className="flex items-center justify-between w-44 absolute left-10 -bottom-6 py-3 px-7 bg-orange_red rounded-full border border-orange_red font-semibold gap-2 text-white">
                            <FaMinus onClick={() => decrementQuantity(name)} className="text-xl hover:bg-white cursor-pointer rounded-full hover:text-orange_red p-1 border" />
                            <p>{getCartItem(name).quantity}</p>
                            <FaPlus onClick={() => incrementQuantity(name)} className="text-xl hover:bg-white cursor-pointer rounded-full hover:text-orange_red p-1 border" />
                        </div>
                        :
                        <button className="flex w-44 absolute left-10 -bottom-6 py-3 px-7 bg-white rounded-full border border-dark_rose font-semibold gap-2 text-very_dark_rose hover:text-orange_red hover:border-orange_red transition" onClick={() => addItemToCart(dessert)}>
                            <img src={iconAddToCart} alt="icon add to cart" />
                            Add to Cart
                        </button>
                }
            </div>
            <h3 className="text-sm text-dark_rose">{category}</h3>
            <h2 className="text-very_dark_rose font-semibold">{name}</h2>
            <h3 className="text-orange_red font-semibold">${price}</h3>
        </div>
    )
}