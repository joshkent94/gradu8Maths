import React from "react";
import WOW from 'wow.js';
import $ from 'jquery';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faPlus, faFlask, faMicroscope, faAtom, faPenAlt, faAngleRight, faEnvelopeSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from "./components/Heading";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Recommendations from "./components/Recommendations";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // add font awesome stuff to app to be used throughout
  library.add(fab, faHome, faPlus, faFlask, faMicroscope, faAtom, faPenAlt, faAngleRight, faEnvelopeSquare, faPhoneSquare, faFacebookSquare);

  // initialise wow.js
  new WOW().init();

  // using jquery to toggle a class another navbar
  $(function () {
    $(document).scroll(function () {
      const $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  return (
    <React.Fragment>
      <Heading />
      <div className="container-fluid padding"> 
        <About />
        <Testimonials />
        <Services />
        <Recommendations />
        <Faqs />
        <Contact />
        <Footer />
      </div>
    </React.Fragment>
  );
};