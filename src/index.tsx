import { FC } from 'react'
import { createRoot } from 'react-dom/client'
import WOW from 'wow.js'
import Heading from 'src/components/heading/heading'
import About from 'src/components/about/about'
import Testimonials from 'src/components/testimonials/testimonials'
import Services from 'src/components/services/services'
import Recommendations from 'src/components/recommendations/recommendations'
import Faqs from 'src/components/faqs/faqs'
import Contact from 'src/components/contact/contact'
import Footer from 'src/components/footer/footer'
import 'animate.css'
import './index.css'

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
    const appContainer = document.createElement('div')
    document.body.appendChild(appContainer)
    const root = createRoot(appContainer)
    root.render(<App />)
}

init()
