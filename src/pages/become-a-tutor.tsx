import { Toolbar } from '@mui/material'
import { FC } from 'react'
import emailjs from '@emailjs/browser'
import { Button, Input, TextareaAutosize } from '@mui/material'

const BecomeATutor: FC = () => {
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                'service_uqdslb8',
                'template_f6uou5i',
                e.target,
                process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
            )
            .then(
                () => {},
                (error) => {
                    console.error(error.text)
                }
            )
    }

    return (
        <>
            <Toolbar
                sx={{
                    height: '80px !important',
                }}
            />
            <div className="grow">
                <div>
                    <h2 className="wow fadeInDown" data-wow-delay="0.4s">
                        Contact
                    </h2>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <Input
                        name="name"
                        type="text"
                        className="wow fadeInDown"
                        data-wow-delay="0.3s"
                        placeholder="Name"
                        required
                    />
                    <Input
                        name="number"
                        type="tel"
                        className="wow fadeInDown"
                        data-wow-delay="0.3s"
                        placeholder="Phone Number"
                        required
                    />
                    <Input
                        type="file"
                        name="cv"
                        className="wow fadeInDown"
                        data-wow-delay="0.3s"
                        placeholder="Upload File"
                        required
                    />
                    <TextareaAutosize
                        name="message"
                        className="wow fadeInDown"
                        data-wow-delay="0.3s"
                        placeholder="Message"
                        required
                    ></TextareaAutosize>
                    <Button
                        type="submit"
                        className="wow fadeInUp"
                        data-wow-delay="0.4s"
                    >
                        Get in touch
                    </Button>
                </form>
            </div>
        </>
    )
}

export default BecomeATutor
