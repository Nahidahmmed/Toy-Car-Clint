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


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          element:<AddToy></AddToy>
        },
        {
          path:'/alltoys',
          element:<AllToys></AllToys>,
          loader: () => fetch('http://localhost:5000/addedToys')
        },
        {
          path:'/detail/:id',
          element:<Details></Details>,
          loader: ({params}) => fetch(`http://localhost:5000/addedToys/${params.id}`)
        },
        {
          path:'/myToys',
          element:<MyToys></MyToys>
        }
      ]
    },
  ]);

  export default router;