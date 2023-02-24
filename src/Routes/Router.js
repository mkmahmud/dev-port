import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Dashboard from '../Layouts/Dashboard/Dashboard';
import Main from '../Layouts/Main/Main';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import NotFound from '../Pages/NotFound/NotFound';
import Projects from '../Pages/Projects/Projects';
import Resume from '../Pages/Resume/Resume';
import Skills from '../Pages/Skills/Skills';
import PrivateRoutes from './PrivateRoutes';

const Router = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/about',
                    element: <About></About>
                },
                {
                    path: '/projects',
                    element: <Projects></Projects>
                },
                {
                    path: '/contact',
                    element: <Contact></Contact>
                },
                {
                    path:'/skills',
                    element:<Skills></Skills>
                },
                {
                    path: '/resume',
                    element: <Resume></Resume>
                }
            ]

        },
        {
            path: '/dashboard',
            element:<Dashboard></Dashboard>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '*',
            element: <NotFound></NotFound>
        }
    ])

    return (
        <RouterProvider router={router}>

        </RouterProvider>
    );
};

export default Router;