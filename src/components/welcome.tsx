import { Box, Button } from '@mui/material'
import { FC } from 'react'

const Welcome: FC = () => {
    return (
        <div className="h-screen flex flex-col wow fadeIn grow justify-center items-center">
            <h1 className="wow fadeInDown uppercase" data-wow-delay="0.3s">
                Gradu8 Tutors
            </h1>
            <h3 className="wow fadeInDown uppercase" data-wow-delay="0.3s">
                Online Tuition
            </h3>
            <Box className="wow fadeInDown uppercase" data-wow-delay="0.3s">
                <Button className="normal-case">Request A Tutor</Button>
                <Button className="normal-case">Become A Tutor</Button>
            </Box>
        </div>
    )
}

export default Welcome
