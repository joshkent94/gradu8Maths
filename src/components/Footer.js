import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <footer className="row container-fluid" id="copyright">
            <div className="col-md-4  text-center my-2 wow fadeIn" data-wow-delay="0.4s">
                <FontAwesomeIcon icon='envelope-square' size='2x'/>
                <a href="mailto:gradu8maths@gmail.com" title="Email doncaster maths tutor">
                    <p className="underline a-contact">gradu8maths@gmail.com</p>
                </a>
            </div>
            <div className="col-md-4  text-center my-2 wow fadeIn" data-wow-delay="0.4s">
                <FontAwesomeIcon icon='phone-square' size='2x'/>
                <a href="tel:07432263120" title="Phone doncaster maths tutor">
                    <p className="underline a-contact">07432 263120</p>
                </a>
            </div>
            <div className="col-md-4 text-center my-2 wow fadeIn" data-wow-delay="0.4s">
                <FontAwesomeIcon icon={["fab", "facebook"]} size='2x'/>
                <a href="https://www.facebook.com/Gradu8maths/" target="_blank" rel='noreferrer' title="Doncaster maths tutor's facebook">
                    <p className="underline a-contact">Facebook</p>
                </a>
            </div>
            <div className="col-md-12">
                <p className="pt-4">Gradu8 Maths &copy; 2020</p>
            </div>
        </footer>
    );
};