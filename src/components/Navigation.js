import logo from '../assets/gradu8_maths.png';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar fixed-top wow fadeIn" data-wow-delay="0.6s">
            <Container>
                <Navbar.Brand href="/">
                    <img className='logo' src={logo} alt="Gradu8 Maths | A level maths tutor in Doncaster" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link className="underline" href="#aboutMe" title="About me">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="underline" href="#testimonials" title="Testimonials">Testimonials</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="underline" href="#services" title="Services">Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="underline" href="#recommendations" title="Recommendations">Recommendations</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="underline" href="#faqs" title="Frequently Asked Questions">FAQ</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="underline" href="#contact" title="Contact">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};