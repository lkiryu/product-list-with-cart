import { createContext, useState } from "react"
import dessertData from "../json/data.json"

export const CartContext = createContext()

export default function CartProvider({ children }) {
    const [dessert, setDessert] = useState(dessertData)
    const [cartItems, setCartItems] = useState([])
    const [Confirmation, setConfirmation] = useState(false)

    const cartItemsCount = cartItems.reduce((accumulator, dessert) => accumulator + dessert.quantity, 0)

    const totalPrice = cartItems.reduce((accumulator, dessert) => accumulator + dessert.price * dessert.quantity, 0)

    function addItemToCart(product) {
        setCartItems(prevItems => {
            return (
                [...prevItems, {
                    name: product.name,
                    image: product.image.thumbnail,
                    price: product.price,
                    quantity: 1
                }]
            )
        })
    }

    function removeCartItem(dessertName) {
        setCartItems(prevItems => (
            prevItems.filter(dessert => dessert.name !== dessertName)
        ))
    }

    function incrementQuantity(dessertName) {
        setCartItems(prevItems => {
            return prevItems.map(dessert => {
                return dessert.name === dessertName ? {...dessert, quantity: dessert.quantity +1 } : dessert
            })
        })
    }

    function decrementQuantity(dessertName) {
        setCartItems(prevItems => {
            return prevItems.map(dessert => {
                return dessert.name === dessertName && dessert.quantity > 1 ? {...dessert, quantity: dessert.quantity -1 } : dessert
            })
        })
    }

    const isProductInCart = (dessertName) => cartItems.findIndex(dessert => dessert.name === dessertName) !== -1

    const getCartItem = (dessertName) => cartItems.find(dessert => dessert.name === dessertName)

    function startNewOrder(){
        setCartItems([])
        setConfirmation(false)
    }

    return (
        <CartContext.Provider value={{
            dessert,
            cartItems,
            cartItemsCount,
            totalPrice,
            Confirmation,
            addItemToCart,
            isProductInCart,
            removeCartItem,
            getCartItem,
            incrementQuantity,
            decrementQuantity,
            setConfirmation,
            startNewOrder
        }}>
            {children}
        </CartContext.Provider>
    )
}