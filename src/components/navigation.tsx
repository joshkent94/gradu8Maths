import { FC } from 'react'
import logo from '@assets/gradu8_maths.png'
import { Box, Button, AppBar, Toolbar } from '@mui/material'

const Navigation: FC = () => {
    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: '#fff',
                }}
            >
                <Toolbar
                    sx={{
                        padding: '0 36px !important',
                    }}
                >
                    <a href="/">
                        <img
                            className="w-10 h-10"
                            src={logo}
                            alt="Gradu8 Maths | A level maths tutor in Doncaster"
                        />
                    </a>
                    <Box>
                        <Button>About Us</Button>
                        <Button>Request A Tutor</Button>
                        <Button>Become A Tutor</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    )
}

export default Navigation
