import logo from '../assets/gradu8_maths.png';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top wow fadeIn" data-wow-delay="0.6s">
            <div className="container">
                <a className="navbar-brand" href="/" title="Gradu8 Maths">
                    <img className='logo' src={logo} alt="Gradu8 Maths | A level maths tutor in Doncaster" />
                </a>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link underline" href="#aboutMe" title="About me">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline" href="#testimonials" title="Testimonials">Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline" href="#services" title="Services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline" href="#recommendations" title="Recommendations">Recommendations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline" href="#faq" title="Frequently Asked Questions">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline" href="#contact" title="Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};