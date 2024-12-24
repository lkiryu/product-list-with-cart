import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import DessertCard from "./components/DessertCard"
import Cart from "./components/Cart/Index"
import OrderConfirmation from "./components/OrderConfirmation"

export default function App() {
  const { dessert, Confirmation } = useContext(CartContext)

  const dessertElements = dessert.map((dessert) => {
    return (
      <DessertCard
        key={dessert.name}
        dessert={dessert}
        image={dessert.image.desktop}
        name={dessert.name}
        category={dessert.category}
        price={dessert.price.toFixed(2)}
      />
    )
  })

  return (
    <main className="flex justify-center relative items-center bg-very_light_rose font-red_hat_text">
      <div className="flex items-start my-16 sm:flex-col">
        <section className="mr-8 sm:mb-8 sm:mr-auto sm:text-center">
          <h1 className="text-very_dark_rose text-4xl font-bold mb-8">Desserts</h1>
          <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 md:grid-cols-1">
            {dessertElements}
          </div>
        </section>
        <Cart />
      </div>
      {
        Confirmation &&
        <div className="flex justify-center items-start pt-40 absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full sm:items-end">
          <OrderConfirmation />
        </div>
      }
    </main>
  )
}