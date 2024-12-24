import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function CartItems({ name, price, quantity }) {
    const { removeCartItem } = useContext(CartContext)

    return (
        <div className="flex justify-between items-center border-b-[1px] mb-4">
            <div className="mb-2">
                <h3 className="text-very_dark_rose font-semibold">{name}</h3>
                <div className="flex">
                    <p className="text-orange_red mr-4 font-semibold">{quantity}x</p>
                    <p className="text-rose mr-2">@${price.toFixed(2)}</p>
                    <p className="text-dark_rose font-medium">${(price * quantity).toFixed(2)}</p>
                </div>
            </div>
            <IoCloseCircleOutline className="text-xl cursor-pointer text-medium_rose transition hover:text-very_dark_rose" onClick={() => removeCartItem(name)} />
        </div>
    )
}