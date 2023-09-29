import { FC } from 'react'
import logo from '@assets/logo.png'
import { Box, AppBar, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

const Navigation: FC = () => {
    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: 'white !important',
                    height: '80px !important',
                }}
            >
                <Toolbar
                    sx={{
                        padding: '0 60px !important',
                        justifyContent: 'space-between',
                        height: '80px !important',
                    }}
                >
                    <a href="/">
                        <img
                            className="w-36 h-10"
                            src={logo}
                            alt="Gradu8 Tutors logo"
                        />
                    </a>
                    <Box>
                        <Link
                            to="/"
                            className="normal-case ml-8 hover:bg-inherit hover:opacity-50 text-base"
                        >
                            About Us
                        </Link>
                        <Link
                            to="/request-a-tutor"
                            className="normal-case ml-8 hover:bg-inherit hover:opacity-50 text-base"
                        >
                            Request A Tutor
                        </Link>
                        <Link
                            to="/become-a-tutor"
                            className="normal-case ml-8 hover:bg-inherit hover:opacity-50 text-base"
                        >
                            Become A Tutor
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navigation
