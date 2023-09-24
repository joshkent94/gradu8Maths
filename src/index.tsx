import { FC } from 'react'
import { createRoot } from 'react-dom/client'
import WOW from 'wow.js'
import Heading from '@components/heading'
import About from '@components/about'
import Testimonials from '@components/testimonials'
import Services from '@components/services'
import Recommendations from '@components/recommendations'
import Faqs from '@components/faqs'
import Contact from '@components/contact'
import Footer from '@components/footer'
import 'animate.css'
import '@styles/globals.css'

const App: FC = () => {
    // initialise wow.js
    new WOW().init()

    return (
        <>
            <Heading />
            <main>
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
