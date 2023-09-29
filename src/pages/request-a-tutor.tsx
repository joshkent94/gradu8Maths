import { Toolbar } from '@mui/material'
import { FC } from 'react'

const RequestATutor: FC = () => {
    return (
        <>
            <Toolbar
                sx={{
                    height: '80px !important',
                }}
            />
            <div className="grow">Request A Tutor</div>
        </>
    )
}

export default RequestATutor
