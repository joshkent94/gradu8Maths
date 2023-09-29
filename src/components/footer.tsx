import { FC } from 'react'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import FacebookIcon from '@mui/icons-material/Facebook'

const Footer: FC = () => {
    return (
        <footer className="w-screen py-6">
            <div className="flex justify-around">
                <div>
                    <EmailIcon fontSize="large" />
                    <a
                        href="mailto:gradu8maths@gmail.com"
                        title="Email doncaster maths tutor"
                    >
                        <p>gradu8maths@gmail.com</p>
                    </a>
                </div>
                <div>
                    <PhoneIcon fontSize="large" />
                    <a
                        href="tel:07432263120"
                        title="Phone doncaster maths tutor"
                    >
                        <p>07432 263120</p>
                    </a>
                </div>
                <div>
                    <FacebookIcon fontSize="large" />
                    <a
                        href="https://www.facebook.com/Gradu8maths/"
                        target="_blank"
                        rel="noreferrer"
                        title="Doncaster maths tutor's facebook"
                    >
                        <p>Facebook</p>
                    </a>
                </div>
            </div>
                <p className='w-full text-center mt-4'>&copy; Gradu8 Tutors 2023</p>
        </footer>
    )
}

export default Footer
