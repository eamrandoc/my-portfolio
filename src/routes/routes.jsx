import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <p>This is Error page</p>,
        children: [
            {
                path: '/',
                element: <p>Home page</p>
            },
            
        ]

    }
])

export default routes