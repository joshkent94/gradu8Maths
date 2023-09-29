import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '@components/footer'
import Navigation from '@components/navigation'

const Layout: FC = () => {
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
