import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <p>This is Error page</p>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            
        ]

    }
])

export default routes