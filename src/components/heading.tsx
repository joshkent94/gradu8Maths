import Navigation from '@components/navigation'
import { Box, Button } from '@mui/material'
import { FC } from 'react'

const Heading: FC = () => {
    return (
        <header className="h-screen flex flex-col">
            <Navigation />
            <div className="wow fadeIn bg-no-repeat bg-cover bg-center bg-[url('src/assets/a_level_maths.jpg')] grow flex justify-center items-center flex-col">
                <h1 className="wow fadeInDown uppercase" data-wow-delay="0.3s">
                    Gradu8 Maths
                </h1>
                <h3 className="wow fadeInDown uppercase" data-wow-delay="0.4s">
                    Professional Mathematics Tuition
                </h3>
                <Box>
                    <Button>Request A Tutor</Button>
                    <Button>Become A Tutor</Button>
                </Box>
            </div>
        </header>
    )
}

export default Heading
