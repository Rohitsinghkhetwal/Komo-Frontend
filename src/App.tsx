import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Root from "./routes/Root";
import Home from "./pages/home/Index";
import Cart from "./pages/cart/Index";
import ProductDetail from "./pages/product-detail";
import Shop from "./pages/shop";
import ShippingAddress from "./pages/Shipping";
import Payment from "./pages/payment";
import Success from "./pages/succsess";
import About from "./pages/about";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/shop",
        element: <Shop/>
      },
      {
        path: "/shop/:id",
        element: <ProductDetail />
      },
      {
        path: "/checkout/shipping",
        element: <ShippingAddress/>
      }, 
      {
        path: "/checkout/payment",
        element: <Payment/>
      },
      {
        path: "/success",
        element: <Success/>
      }
    
    ]
  }
])



function App() {
  return <RouterProvider router={router}/>
}

export default App;
