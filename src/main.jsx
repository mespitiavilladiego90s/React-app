import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {CrispyChipsProvider} from './context/CrispyChipsProvider'
import './index.css'
import router from './Router'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CrispyChipsProvider>
    <RouterProvider router={router}/>
    </CrispyChipsProvider>
)
