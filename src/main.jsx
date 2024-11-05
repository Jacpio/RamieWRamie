import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import LoginPage from "./Pages/LoginPage.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage.jsx";
import Organisations from "./Pages/Organisations.jsx";
import SearchResults from "./Pages/SearchResults.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/Organisation",
        element: <Organisations />,
    },
    {
        path: "/Search",
        element: <SearchResults />,
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
