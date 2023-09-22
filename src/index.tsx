import { FC } from 'react'
import { createRoot } from 'react-dom/client'
import WOW from 'wow.js'
import Heading from '@components/heading/heading'
import About from '@components/about/about'
import Testimonials from '@components/testimonials/testimonials'
import Services from '@components/services/services'
import Recommendations from '@components/recommendations/recommendations'
import Faqs from '@components/faqs/faqs'
import Contact from '@components/contact/contact'
import Footer from '@components/footer/footer'
import 'animate.css'
import '@styles/globals.css'

const App: FC = () => {
    // initialise wow.js
    new WOW().init()

    return (
        <>
            <Heading />
            <main className="container-fluid padding">
                <About />
                <Testimonials />
                <Services />
                <Recommendations />
                <Faqs />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

const init = () => {
    const appContainer = document.getElementById('root')
    const root = createRoot(appContainer)
    root.render(<App />)
}

init()
