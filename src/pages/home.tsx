import { FC } from 'react'
import About from '@components/about'
import Testimonials from '@components/testimonials'
import Services from '@components/services'
import Recommendations from '@components/recommendations'
import Faqs from '@components/faqs'
import Welcome from '@components/welcome'

const Home: FC = () => {
    return (
        <>
            <Welcome />
            <About />
            <Testimonials />
            <Services />
            <Recommendations />
            <Faqs />
        </>
    )
}

export default Home
