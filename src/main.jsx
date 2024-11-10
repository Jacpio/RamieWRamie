import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import LoginPage from "./Pages/LoginPage.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage.jsx";
import Organisations from "./Pages/Organisations.jsx";
import SearchResults from "./Pages/SearchResults.jsx";
import CreateOrganisation from "./Pages/CreateOrganisation.jsx";
import YourProfile from "./Pages/YourProfile.jsx";
import Profile from "./Pages/Profile.jsx";
import About from "./Pages/About.jsx";
import Article from "./Pages/Article.jsx";
import Faq from "./Pages/Faq.jsx";
import Footer from "./Elements/Footer.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
    {
        path: "/register",
        element: <RegisterPage/>,
    },
    {
        path: "/Organisation",
        element: <Organisations/>,
    },
    {
        path: "/Search",
        element: <SearchResults/>,
    },
    {
        path: "/CreateOrganisation",
        element: <CreateOrganisation/>,
    },
    {
        path: "/editProfile",
        element: <YourProfile/>,
    },
    {
        path: "/me",
        element: <Profile/>,
    },
    {

        path: "/about",
        element: <About/>,
    },
    {
        path: "/article",
        element: <Article/>,
    },
    {
        path: "/faq",
        element: <Faq/>

    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="flex flex-col justify-between min-h-screen">
            <div>
                <RouterProvider router={router}/>
            </div>
            <Footer/>
        </div>
    </StrictMode>,
)
