import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import CheckOutPage from "../Pages/CheckOutPage";

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
        path:'checkout/:id',
        element:<CheckOutPage></CheckOutPage>,
        loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      }
      
    ]
  },
  
]);

export default router;