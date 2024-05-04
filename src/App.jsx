import {createBrowserRouter, RouterProvider, ScrollRestoration} from "react-router-dom";

import Main from './pages/main.jsx';
import * as PropTypes from "prop-types";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Redact from "./pages/redact";
import AuthProvider from "./contexts/AuthContext";
import Kod from "./pages/kod";

import {Suspense} from "react";

RouterProvider.propTypes = {router: PropTypes.any};
const router = createBrowserRouter([
    {
        path: "*",
        element: <ScrollRestoration/>,
    },
    {
        path: "/",
        element: <Main/>,
    },
    {
        path: "/signin",
        element: <SignIn/>,
    },
    {
        path: "/signup",
        element: <SignUp/>,
    },
    {
        path: "/edit",
        element: <Redact/>,
    },
    {
        path: "/kod",
        element: <Kod/>,
    }
])

function App() {
    return (
        <AuthProvider>
            <Suspense>
                <RouterProvider router={router}/>
            </Suspense>
        </AuthProvider>
    );
}

export default App;
