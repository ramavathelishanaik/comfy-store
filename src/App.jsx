import { About,Error,HomeLayout,Landing,Products,SingleProduct,Cart,Checkout,Orders,Login,Register} from './pages/index'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

//errorelement
import {ErrorElement} from './components/index';

//loader
import {loader as landingLoader} from './pages/Landing'
import {loader as singleProductLoader} from './pages/SingleProduct'
import {loader as productsLoader} from './pages/Products'


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children:[
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement/>,
          loader: landingLoader
        },
        {
          path: 'products',
          element: <Products />,
          errorElement: <ErrorElement/>,
          loader: productsLoader

          
        },
        {
          path: 'products/:productsId',
          element: <SingleProduct />,
          errorElement: <ErrorElement/>,
          loader: singleProductLoader
        },
        {
          path: 'cart',
          element: <Cart />
        },
        {
          path: 'checkout',
          element: <Checkout/>
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'orders',
          element:<Orders />

        }
      ]

    },
    {
      path: 'login',
      element: <Login/>,
      errorElement: <Error />
    },
    {
      path: 'register',
      element: <Register/>,
      errorElement: <Error />
    }

  ])



  
  return (
    
    <RouterProvider router={router}/>
    
  )
}