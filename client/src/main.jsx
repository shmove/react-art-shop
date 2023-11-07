import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import './index.css'

import PaintingListings, {fetchPaintings} from "./pages/PaintingListings.jsx";
import Artwork from "./pages/Artwork.jsx";
import Root from "./Root.jsx";

const BrowserRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <PaintingListings />,
                loader: fetchPaintings
            },
            {
                path: '/artwork/:id',
                element: <Artwork />,
                loader: fetchPaintings
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter}/>
  </React.StrictMode>
);
