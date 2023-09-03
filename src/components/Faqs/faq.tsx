import { Accordion } from 'react-bootstrap'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

type FaqProps = {
    faq: {
        question: string
        answer: string
    }
}

const Faq = ({ faq }: FaqProps) => {
    return (
        <Accordion.Item
            eventKey={faq.question}
            className="card faqCard wow fadeIn"
            data-wow-delay="0.4s"
        >
            <Accordion.Header>
                <ChevronRightIcon
                    id={`arrow-${faq.question}`}
                    className="dropdown-arrow"
                />
                {faq.question}
            </Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
        </Accordion.Item>
    )
}

export default Faq
