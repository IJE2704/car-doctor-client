import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import CheckOutPage from "../Pages/CheckOutPage";
import Details from "../Pages/Details";
import Orders from "../Pages/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'details/:id',
        element:<Details></Details>,
        loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)

      },
      {
        path:'checkout/:id',
        element:<CheckOutPage></CheckOutPage>,
        loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:'orders',
        element: <Orders></Orders>
      }
      
    ]
  },
  
]);

export default router;