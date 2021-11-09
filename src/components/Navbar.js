import logo from '../assets/gradu8_maths.png';
import { Nav, Button } from 'react-bootstrap';

export default function Navbar() {
    return (
        <Nav className="navbar navbar-expand-md navbar-light fixed-top wow fadeIn container-fluid" data-wow-delay="0.6s">
            <div className="container">
                <a className="navbar-brand" href="/" title="Gradu8 Maths">
                    <img className='logo' src={logo} alt="Gradu8 Maths | A level maths tutor in Doncaster" />
                </a>
                <div className="collapse navbar-collapse navbar-nav ml-auto" id="navbarResponsive">
                    <Nav.Item>
                        <Nav.Link className="nav-link underline" href="#aboutMe" title="About me">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="nav-link underline" href="#testimonials" title="Testimonials">Testimonials</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="nav-link underline" href="#services" title="Services">Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="nav-link underline" href="#recommendations" title="Recommendations">Recommendations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="nav-link underline" href="#faq" title="Frequently Asked Questions">FAQ</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="nav-link underline" href="#contact" title="Contact">Contact</Nav.Link>
                    </Nav.Item>
                </div>
                <Button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button>
            </div>
        </Nav>
    );
};