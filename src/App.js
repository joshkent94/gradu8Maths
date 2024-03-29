import React from "react";
import WOW from 'wow.js';
import 'animate.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faPlus, faFlask, faMicroscope, faAtom, faPenAlt, faAngleRight, faEnvelopeSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import Heading from "./components/Heading/Heading";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Services from "./components/Services/Services";
import Recommendations from "./components/Recommendations/Recommendations";
import Faqs from "./components/Faqs/Faqs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  // add font awesome stuff to app to be used throughout
  library.add(fab, faHome, faPlus, faFlask, faMicroscope, faAtom, faPenAlt, faAngleRight, faEnvelopeSquare, faPhoneSquare, faFacebookSquare);

  // initialise wow.js
  new WOW().init();

  return (
    <React.Fragment>
      <Heading />
      <main className="container-fluid padding">
        <About />
        <Testimonials />
        <Services />
        <Recommendations />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
};