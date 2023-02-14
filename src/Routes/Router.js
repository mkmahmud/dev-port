import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../Layouts/Main/Main';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import Projects from '../Pages/Projects/Projects';

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
                    path:'/about',
                    element:<About></About>
                },
                {
                    path:'/projects',
                    element: <Projects></Projects>
                }
            ]

        }
    ])

    return (
        <RouterProvider router={router}>

        </RouterProvider>
    );
};

export default Router;