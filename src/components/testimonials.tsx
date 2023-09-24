import { FC, useState } from 'react'
import { testimonialList } from '@utils/testimonialList'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { Typography, Box, MobileStepper, Button } from '@mui/material'

const Testimonials: FC = () => {
    const [activeStep, setActiveStep] = useState(0)
    const maxSteps = testimonialList.length

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    return (
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography>{testimonialList[activeStep].review}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography>{testimonialList[activeStep].reviewer}</Typography>
            </Box>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                    >
                        <KeyboardArrowLeft />
                        Back
                    </Button>
                }
            />
            <div>
                <a
                    href="https://www.facebook.com/pg/Gradu8maths/reviews/?ref=page_internal"
                    target="_blank"
                    rel="noreferrer"
                    title="Link to facebook review page"
                    className="wow fadeInUp"
                    data-wow-delay="0.4s"
                >
                    Write a Review
                </a>
            </div>
        </Box>
    )
}

export default Testimonials
