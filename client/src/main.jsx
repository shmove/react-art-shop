import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createHashRouter,
    RouterProvider
} from "react-router-dom";
import './index.css'

import Root from "./pages/Root.jsx";
import PaintingListings from "./pages/PaintingListings.jsx";
import Artwork from "./pages/Artwork.jsx";
import Admin from "./pages/Admin.jsx";
import Basket from "./pages/Basket.jsx";
import NotFound from "./pages/NotFound.jsx";

const HashRouter = createHashRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <PaintingListings />
            },
            {
                path: '/artwork/:id',
                element: <Artwork />
            },
            {
                path: '/basket',
                element: <Basket />
            },
            {
                path: '/admin',
                element: <Admin />
            }
        ],
        errorElement: <NotFound />
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={HashRouter}/>
  </React.StrictMode>
);
