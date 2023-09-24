import { AccordionSummary, AccordionDetails } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

type FaqProps = {
    faq: {
        question: string
        answer: string
    }
}

const Faq = ({ faq }: FaqProps) => {
    return (
        <>
            <AccordionSummary>
                <ChevronRightIcon />
                {faq.question}
            </AccordionSummary>
            <AccordionDetails>{faq.answer}</AccordionDetails>
        </>
    )
}

export default Faq
