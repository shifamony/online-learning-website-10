import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Category from "../components/Category";
import CheckOut from "../components/CheckOut";
import Course from "../components/Course";
import CourseDetails from "../components/CourseDetails";
import ErrorPage from "../components/ErrorPage"
import Faq from "../components/Faq";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";


export const routes = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [

        {
            path: '/',
            element: <Course></Course>,
            loader: () => fetch(`https://online-learning-server.vercel.app/courses`)

        },
        
        {
            path: '/category/:id',
            element: <Category></Category>,
            loader: ({params}) => fetch(`https://online-learning-server.vercel.app/category/${params.id}`)

        },
        {
            path: '/courses/:id',
            element: <CourseDetails></CourseDetails>,
            loader: ({params}) => fetch(`https://online-learning-server.vercel.app/courses/${params.id}`)
        },
        
        {
            path: '/faq',
            element: <Faq></Faq>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }, 
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/checkout',
            element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            
        }
        
      ]
    }
]);