import { FC } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import WOW from 'wow.js'
import Layout from '@components/layout'
import Home from '@pages/home'
import RequestATutor from '@pages/request-a-tutor'
import BecomeATutor from '@pages/become-a-tutor'
import 'animate.css'
import '@styles/globals.css'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/request-a-tutor" element={<RequestATutor />} />
                <Route path="/become-a-tutor" element={<BecomeATutor />} />
            </Route>
        </>
    )
)

const App: FC = () => {
    // initialise wow.js
    new WOW().init()

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <RouterProvider router={router} />
            </div>
        </>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
