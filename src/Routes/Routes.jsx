import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Blog from "../Pages/Blog/Blog";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import Details from "../Pages/Details/Details";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/Signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
          path:'/addToy',
          element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path:'/alltoys',
          element:<AllToys></AllToys>,
          loader: () => fetch('https://assignment-11-server-phi-azure.vercel.app/addedToys')
        },
        {
          path:'/detail/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader: ({params}) => fetch(`https://assignment-11-server-phi-azure.vercel.app/addedToys/${params.id}`)
        },
        {
          path:'/myToys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;