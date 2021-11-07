import React from "react";
import WOW from 'wow.js';
import $ from 'jquery';
import logo from './assets/gradu8_maths.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import 'animate.css';

export default function App() {
  new WOW().init();

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  return (
    <React.Fragment>
      <header>
        
        <nav className="navbar navbar-expand-md navbar-light fixed-top wow fadeIn" data-wow-delay="0.6s">
          
          <div className="container">
            <a className="navbar-brand" href="/" title="Gradu8 Maths">
              <img src={logo} alt="Gradu8 Maths | A level maths tutor in Doncaster" style={{ width: "40px" }}/>
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

        <div className="view wow fadeIn background">
          <div className="mask rgba-black-light align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-4 text-center wow fadeInUp centerTitle">
                    <h1 className=" h1-reponsive text-uppercase font-weight-bold wow fadeInDown" data-wow-delay="0.3s"><strong>Gradu8 Maths</strong><hr className="hr-light my-4 wow fadeInDown" data-wow-delay="0.4s"/></h1>                  
                    <h5 className="text-uppercase mb-4 white-text wow fadeInDown" data-wow-delay="0.4s"><strong>Mathematics Tuition in Doncaster</strong></h5>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* <main> 
          <div className="container-fluid padding">
            
            <div className="row p-5" id="aboutMe">
              <h2 className="col-md-12 p-4 text-center wow fadeInUp">Hi, I'm Andy Kent</h2>
              
              <div className="col-lg-6 p-4 my-auto text-center wow fadeIn" data-wow-delay="0.4s" id="profilePhotoContainer">
                  <img className="img-fluid w-100" src="/public/images/doncaster_maths_tutor.jpg" alt="A level and GCSE maths tutor in Doncaster" id="profilePhoto"/>
              </div>

              <div className="col-lg-6 my-auto">
                <p className="p-4 wow fadeIn"  data-wow-delay="0.4s">
                  Whilst I have had a successful career as a senior manager in law enforcement I always maintained a keen interest in maths after studying the subject at King’s College, London.
                  I tutored maths to my sons and niece at GCSE and A level and all achieved A<sup>*</sup>’s and went on to study a maths related degree at a Russell Group university. During this period, and without advertising, I was inundated with requests for tutoring from other parents. I took on a few, but within a short period I had a sizeable waiting list. It is at this point I decided to become a full time maths tutor; a job I love.
                </p>
              </div>

              <div className="col-md-12 my-auto wow fadeIn"  data-wow-delay="0.4s">
                <p className="p-4">
                  I am extremely enthusiastic about maths and have found that this can be infectious and inspire others. In fact, on numerous occasions, I have completely changed a child’s attitude towards maths so that it has become their favourite subject. Moreover, the importance of <u><strong>results</strong></u> is something I am acutely aware of. I take great pride in the achievements of my students, from moving up sets at school to getting the grades they need for university. I have an excellent track record of students achieving top grades – try me and you’ll see why.
                </p>
              </div>
                
            </div>

            <div className="spacer">
              
            </div>

            <div className="row testimonials" id="testimonials">
                <div id="slides" className="col-md-12 align-self-center carousel slide carousel-fade" data-ride="carousel" data-interval="8000">

                  <ul className="carousel-indicators">
                    <li data-target="#slides" data-slide-to="0" className="active"></li>
                    <li data-target="#slides" data-slide-to="1"></li>
                    <li data-target="#slides" data-slide-to="2"></li>
                    <li data-target="#slides" data-slide-to="3"></li>
                    <li data-target="#slides" data-slide-to="4"></li>
                    <li data-target="#slides" data-slide-to="5"></li>
                    <li data-target="#slides" data-slide-to="6"></li>
                    <li data-target="#slides" data-slide-to="7"></li>
                    <li data-target="#slides" data-slide-to="8"></li>
                  </ul>

                  <div className="carousel-inner">

                    <div className="carousel-item active d-flex align-items-center">
                      <div>
                        <p className="text-center font-italic p-4 wow fadeIn" data-wow-delay="0.4s">
                          "Fantastic tuition, friendly and helpful. Helped me achieve my A* at GCSE, top grade at FSMQ and A<sup>*</sup>/A at maths and further maths ensuring I secured a place at London School of Economics. Would recommend to anyone wanting an excellent maths tutor."
                        </p>
                        <h5 className="font-italic text-right wow fadeIn " data-wow-delay="0.4s">Kiera Glendenning</h5>
                      </div>
                    </div>

                    <div className="carousel-item d-flex align-items-center">
                      <div>
                        <p className="text-center font-italic p-4">
                          "Andy is an amazing tutor. The confidence he has helped bring out in my son for A-level maths is why I would highly recommend him to anyone seeking support for this subject."
                        </p>
                        <h5 className="font-italic text-right">Amna Sohail Khan</h5>
                      </div>
                    </div>

                    <div className="carousel-item d-flex align-items-center">
                      <div>
                        <p className="text-center font-italic p-4">
                          "Andy has been fantastic tutoring my son this year Daniel has gone from a grade D to a B in his A level maths in 1 year. He made a big impact and we would highly recommend him."
                        </p>
                        <h5 className="font-italic text-right">Becky Wilson</h5>
                      </div>
                    </div>

                    <div className="carousel-item d-flex align-items-center">
                      <div>
                        <p className="text-center font-italic p-4">
                          "Andy has been excellent this year with tutoring my daughter in ‘A’ level maths, managed to improve her results in two papers by 5 grades. Always punctual, reliable, supportive and provided lots of extra homework material. Would definitely recommend, thankyou!"
                        </p>
                        <h5 className="font-italic text-right">Trina Ryan</h5>
                      </div>
                    </div>

                    <div className="carousel-item d-flex align-items-center">
                      <div>
                        <p className="text-center font-italic p-4">
                          "Gradu8maths is a fantastic tutorial path where learning is fun; what looked difficult becomes easy and achievable. The tutor designs an individual plan of learning to get the results. We enjoyed dealing with Andy, who we found to be a professional and dedicated person. We would highly recommend Andy for maths tuition to anyone who has high aspirations or simply needs help. Under Andy’s tutorage my son achieved a grade 9 GCSE, ‘A’ in GCSE statistics and A* in maths and further maths."
                        </p>
                        <h5 className="font-italic text-right">Helen Gavin</h5>
                      </div>
                    </div>

                    <div className="carousel-item d-flex align-items-center">
                      <div>
                        <p className="text-center font-italic p-4">
                          "Andy is an excellent tutor and helped me throughout year 13. At the end of year 12 I achieved a D grade in maths, however with Andy’s help I was able to achieve an A at the end of year 13 in ‘A’ level maths. Would definitely recommend."
                        </p>
                        <h5 className="font-italic text-right">Joseph Clayton</h5>
                      </div>
                    </div>

                    <div className="carousel-item d-flex align-items-center">
                      <div>
                        <p className="text-center font-italic p-4">
                          "Don't think I would be able to even pass GCSE maths without Andy! Great tutor who makes you feel very comfortable, definitely recommend to anyone I came on leaps and bounds!"
                        </p>
                        <h5 className="font-italic text-right">Abbie Dobson</h5>
                      </div>
                    </div>

                    <div className="carousel-item d-flex align-items-center">
                      <div>
                        <p className="text-center font-italic p-4">
                          "Andy's approach really clicked with my son and the AS/A level tuition sessions helped hugely to boost his confidence. We'll certainly be retaining Andy's services for the final year of my son's A level Maths. Thoroughly recommended!"
                        </p>
                        <h5 className="font-italic text-right">Steve Wainwright</h5>
                      </div>
                    </div>

                    <div className="carousel-item d-flex align-items-center">
                      <div>
                        <p className="text-center font-italic p-4">
                          "Andy has helped my daughter to gain confidence and achieve an excellent GCSE result. He explains things in a clear and logical way. I would highly recommend Andy as a tutor."
                        </p>
                        <h5 className="font-italic text-right">Ayesha Zafar</h5>  
                      </div>
                    </div>

                  </div>

                </div>
            </div>

            <div className="col-md-12 text-center spacer" id="services">
              <a href="https://www.facebook.com/pg/Gradu8maths/reviews/?ref=page_internal" target="_blank" title="Link to facebook review page" className="btn reviewBtn wow fadeInUp" data-wow-delay="0.4s">Write a Review</a>
            </div>

            <div className="row pt-5 services" style="background-image: url('/public/images/services.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center center;" >
              <div className="col-md-12 pb-3">
                <h2 className="text-center wow fadeInDown" data-wow-delay="0.4s">Services</h2>
              </div>

              <div className="col-md-12 wow fadeInUp" data-wow-delay="0.3s">
                <div className="mx-5 my-3 p-5 card">
                  <div className="row">
                    <div className="col-sm-3 text-center mx-auto my-auto py-5">
                      <i className="fas fa-home fa-5x"></i>
                    </div>
                    <div className="col-sm-9 my-auto">
                      <h4>Home Tutoring</h4>
                      <p>
                        Studies have shown that children learn best when being taught one-to-one and in comfortable and familiar surroundings. For this reason I travel to you to tutor as I firmly believe children learn best in the comfort of their own home.
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="col-md-12 wow fadeInUp" data-wow-delay="0.3s">
                <div className="mx-5 my-3 p-5 card">
                  <div className="row">
                    <div className="col-sm-3 text-center mx-auto my-auto py-5">
                      <i className="fas fa-wave-sine fa-5x"></i>
                      <img src="/public/images/sine_wave.png" alt="Sine wave" style="width: 100px"/>
                    </div>
                    <div className="col-sm-9 my-auto">
                      <h4>Flexible To Suit Your Needs</h4>
                      <p>
                        I tutor all ages in preparation for:

                        <ul>
                          <li>SAT’s</li>
                          <li>Entrance exams</li>
                          <li>GCSE maths (I also offer GCSE statistics as an additional qualification)</li>
                          <li>FSMQ (Free Standing Maths Qualification for high achieving GCSE students)</li>
                          <li>‘A’ level maths</li>
                          <li>‘A’ level further maths</li>
                        </ul>
                        
                        I also offer bespoke tuition for other less common exams e.g. Nursing exams, MAT (Oxford entrance exam), STEP (Cambridge entrance exam) and undergraduate engineering exams.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-md-12 wow fadeInUp" data-wow-delay="0.3s">
                <div className="mx-5 my-3 p-5 card">
                  <div className="row">
                    <div className="col-sm-3 text-center mx-auto my-auto py-5">
                      <i className="fas fa-plus fa-5x"></i>
                    </div>
                    <div className="col-sm-9 my-auto">
                      <h4>And More</h4>
                      <p>
                        A lesson is typically one-hour in duration although ‘A’ level students (and above) often prefer a two-hour lesson given the complexity of some topics.
                      </p>
                      
                      <p>
                        At Easter and just prior to the exams I offer three-hour revision sessions. During these we target areas that are in need of development and also practice exam technique. These are tough sessions but the results speak for themselves!
                      </p>
                    </div>
                  </div>
                    
                </div>
              </div>
            </div>

            <div className="row p-5" id="recommendations">
              <div className="col-md-12 py-5 ">
                <h2 className="text-center wow fadeInDown" data-wow-delay="0.4s">Recommendations</h2>
              </div>

              <div className="col-md-12 px-5 mx-auto wow fadeIn" data-wow-delay="0.5s">
                <p>
                  My students often ask me to recommend tutors for other subjects, particularly English and the sciences. I must stress at this point that I do not employ these people nor do I receive an introductory fee, I simply want to make my students aware of the very best tutors out there. My recommendations are based solely on the feedback that I’ve received from students throughout my 10+ years in the tutoring business.
                </p>
              </div>


              <div className="col-md-12 wow fadeInUp" data-wow-delay="0.3s">
                <div className="my-3 p-5 card recommendationsCard">
                  <div className="row">

                    <div className="col-md-6 mx-auto text-center my-auto py-3">
                      <div className="row d-flex justify-content-center">
                        <i className="fas fa-flask fa-2x"></i>
                        <p>&nbsp;</p>
                        <i className="fas fa-microscope fa-2x"></i>
                      </div>
                      <h4>Chemistry & Biology</h4>
                      </br>

                      <div className="row m-auto">
                        <p className="col-md-12 my-auto">
                          Tutor: David Bestford   
                        </p> 
                        </br></br>
                        <p className="col-md-12 my-auto">
                          <a href="tel:07946177025" title="Phone doncaster chemistry & biology tutor" className="underline">Contact: 07946177025</a>
                        </p>
                      </div>

                    </div>

                    <div className="col-md-6 m-auto p-3">
                      <p className="m-auto text-justify">
                        Dave has a 2:1 degree in Biology and Chemistry from the University of Salford. He obtained his PGCE from the University of Sheffield and has since taught Biology in secondary schools at both GCSE and ‘A’ level for over 40 years. He has also taught GCSE Chemistry over this same period. For over 20 years Dave has been an examiner for Biology, initially at GCSE level and now at ‘A’ level.

                        He has over 30 years experience as a personal tutor and comes highly recommended.  
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="my-3 p-5 card recommendationsCard">
                  <div className="row">
                    <div className="col mx-auto  text-center my-auto py-5">
                      <i className="fas fa-atom fa-2x"></i>
                      <h4>Physics</h4>
                    </div>
                    <div className="col m-auto p-3">
                      <p className="m-auto">
                        Details Coming Soon.       
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="my-3 p-5 card recommendationsCard">
                  <div className="row">
                    <div className="col mx-auto text-center my-auto py-5">
                      <i className="fas fa-pen-alt fa-2x"></i>
                      <h4>English</h4>
                    </div>
                    <div className="col m-auto p-3">
                      <p className="m-auto">
                        Details Coming Soon.       
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="row p-5 faq" id="faq">
              <div className="col-md-12 py-5">
                <h2 className="text-center wow fadeInDown" data-wow-delay="0.4s">Frequently Asked Questions (FAQ)</h2>
              </div>

              <div className="accordion">

                <div className="card faqCard wow fadeIn" data-wow-delay="0.4s">
                    <button className="card-header btn faqBtn collapsed" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" >
                      <i className="fas fa-angle-right"></i> Have you been vetted by the Police?
                    </button>
                  <div id="collapse1" className="collapse">
                    <div className="card-body">
                      Yes, I have an up to date DBS (Disclosure and Barring Service) certificate.
                    </div>
                  </div>
                </div>

                <div className="card faqCard wow fadeIn" data-wow-delay="0.4s">
                  <button className="card-header btn faqBtn collapsed" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" >
                    <i className="fas fa-angle-right"></i> Do you have a maths degree?
                  </button>
                  <div id="collapse2" className="collapse">
                    <div className="card-body">
                      Yes, I have a BSc Hons degree in Mathematics from King’s College, London.
                    </div>
                  </div>
                </div>
                
                <div className="card faqCard wow fadeIn" data-wow-delay="0.4s">
                  <button className="card-header btn faqBtn collapsed" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" >
                    <i className="fas fa-angle-right"></i> When did you start tutoring?
                  </button>
                  <div id="collapse3" className="collapse">
                    <div className="card-body">
                      I started a tutoring business over 10 years ago after tutoring my sons and niece at both GCSE and ‘A’ level. All three achieved A* grades at each level.
                    </div>
                  </div>
                </div>

                <div className="card faqCard wow fadeIn" data-wow-delay="0.4s">
                  <button className="card-header btn faqBtn collapsed" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" >
                    <i className="fas fa-angle-right"></i> Are you a qualified teacher?
                  </button>
                  <div id="collapse4" className="collapse">
                    <div className="card-body">
                      No, after leaving university I worked in law enforcement for 20+ years becoming a senior manager. I am reliable and trustworthy and have excellent communication skills. Furthermore, I have a proven track record of leadership and achievement and believe that these skills and abilities are transferable and key to becoming a great teacher.
                    </div>
                  </div>
                </div>

                <div className="card faqCard wow fadeIn" data-wow-delay="0.4s">
                  <button className="card-header btn faqBtn collapsed" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" >
                    <i className="fas fa-angle-right"></i> Which maths specifications do you teach for ‘A’ level?
                  </button>
                  <div id="collapse5" className="collapse">
                    <div className="card-body">
                      I teach Edexcel, AQA and OCR.
                    </div>
                  </div>
                </div>

                <div className="card faqCard wow fadeIn" data-wow-delay="0.4s">
                  <button className="card-header btn faqBtn collapsed" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" >
                    <i className="fas fa-angle-right"></i> What sort of grades do your ‘A’ level students get?
                  </button>
                  <div id="collapse6" className="collapse">
                    <div className="card-body">
                      If I tutor a student for a prolonged period they typically achieve a B or above although most will attain an A or A*. In 2019 one of my students (Illya) achieved an A* (92%) at ‘A’ level maths in one year. I often have students come to me after failing maths or not getting the grades they need and I have many examples of significant improvements in grades (see my reviews). In 2019 all of my ‘A’ level students achieved the grades they required for the university of their choice. In 2020, although there won’t be any exams, I expect a high percentage of A and A*’s.
                    </div>
                  </div>
                </div>

                <div className="card faqCard wow fadeIn" data-wow-delay="0.4s">
                  <button className="card-header btn faqBtn collapsed" type="button" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" >
                    <i className="fas fa-angle-right"></i> Do you do virtual tutoring?
                  </button>
                  <div id="collapse7" className="collapse">
                    <div className="card-body">
                      I prefer to deliver a lesson one-to-one in person, however, I can deliver lessons using Skype. This worked well during the Covid-19 outbreak.
                    </div>
                  </div>
                </div>

                <div className="card faqCard wow fadeIn" data-wow-delay="0.4s">
                  <button className="card-header btn faqBtn collapsed" type="button" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" >
                    <i className="fas fa-angle-right"></i> How far are you prepared to travel to tutor?
                  </button>
                  <div id="collapse8" className="collapse">
                    <div className="card-body">
                      If you reside within a 5 mile radius of Bessacarr, Doncaster I will travel to you at no cost. I am prepared to travel further afield but will include fuel expenses.
                    </div>
                  </div>
                </div>

                <div className="card faqCard wow fadeIn" data-wow-delay="0.4s">
                  <button className="card-header btn faqBtn collapsed" type="button" data-toggle="collapse" data-target="#collapse9" aria-expanded="false" >
                    <i className="fas fa-angle-right"></i> Do you issue homework?
                  </button>
                  <div id="collapse9" className="collapse">
                    <div className="card-body">
                      Yes. Homework is issued after every lesson and it’s very important that this is completed so that I and the student know that the topic is fully understood.
                    </div>
                  </div>
                </div>

                <div className="card faqCard wow fadeIn" data-wow-delay="0.4s">
                  <button className="card-header btn faqBtn collapsed" type="button" data-toggle="collapse" data-target="#collapse10" aria-expanded="false" >
                    <i className="fas fa-angle-right"></i> Do you do home schooling?
                  </button>
                  <div id="collapse10" className="collapse">
                    <div className="card-body">
                      Yes. I have lots of experience of home tutoring and have even set up classNamerooms.
                    </div>
                  </div>
                </div>

                <div className="card faqCard wow fadeIn" data-wow-delay="0.4s">
                  <button className="card-header btn faqBtn collapsed" type="button" data-toggle="collapse" data-target="#collapse11" aria-expanded="false" >
                    <i className="fas fa-angle-right"></i> Would you be prepared to teach a small group of students for a reduced fee?
                  </button>
                  <div id="collapse11" className="collapse">
                    <div className="card-body">
                      It depends. Can you please give me a call on 07432 263120 to discuss.
                    </div>
                  </div>
                </div>

                <div className="card faqCard wow fadeIn" data-wow-delay="0.4s">
                  <button className="card-header btn faqBtn collapsed" type="button" data-toggle="collapse" data-target="#collapse12" aria-expanded="false" >
                    <i className="fas fa-angle-right"></i> Would you recommend taking ‘A’ level further maths?
                  </button>
                  <div id="collapse12" className="collapse">
                    <div className="card-body">
                      It depends. If you want to go to university to study a maths related degree I would recommend taking further maths, if not, take standard ‘A’ level maths. Further maths is much harder but some Russell Group universities prefer it.
                    </div>
                  </div>
                </div>

              </div>

            </div>
          
        
            <div className="row pt-5 contact" id="contact">
              <div className="col-md-12">
                <h2 className="text-center wow fadeInDown" data-wow-delay="0.4s">Contact</h2>
              </div>
            </div>
            
            <form className="row contact" id="contact-form" method="post" action="/public/php/send_form_email.php">
              <div className="form-group col-md-6">
                
                <input name="name" type="text" className="form-control wow fadeInDown" data-wow-delay="0.3s" id="nameInput" placeholder="Your Name">
              </div>
              <div className="form-group col-md-6">
                
                <input name="email" type="email" className="form-control wow fadeInDown" data-wow-delay="0.3s" id="emailInput" placeholder="Your Email">
              </div>
              <div className="form-group col-md-12">
                
                <textarea name="message" type="message" className="form-control messageForm wow fadeInDown" data-wow-delay="0.3s" id="messageInput" placeholder="Your Message"></textarea>
              </div>

              <div className="col-md-12 text-center">
                <button type="submit" className="btn contactBtn my-5 wow fadeInUp" data-wow-delay="0.4s">Get in touch</button>
              </div>
              
            </form>

            <div className="row" id="copyright">

              <div className="col-md-4  text-center my-2 wow fadeIn" data-wow-delay="0.4s">
                <i className="fas fa-envelope-square fa-2x"></i>
                <a href="mailto:gradu8maths@gmail.com" title="Email doncaster maths tutor">
                  <p className="underline a-contact">
                    gradu8maths@gmail.com
                  </p>
                </a>
              </div>
              <div className="col-md-4  text-center my-2 wow fadeIn" data-wow-delay="0.4s">
                <i className="fas fa-phone-square-alt fa-2x"></i>
                <a href="tel:07432263120" title="Phone doncaster maths tutor">
                  <p className="underline a-contact">
                    07432 263120
                  </p>
                </a>
              </div>
              <div className="col-md-4 text-center my-2 wow fadeIn" data-wow-delay="0.4s">
                <i className="fab fa-facebook-square fa-2x"></i>
                <a href="https://www.facebook.com/Gradu8maths/" target="_blank" title="Doncaster maths tutor's facebook">
                  <p className="underline a-contact">
                    facebook
                  </p>
                </a>
              </div>

              <div className="col-md-12">
                <p className="pt-4">Gradu8 Maths &copy; 2020</p>
              </div>
            </div>
        
          </div>
      </main > */}
    </React.Fragment>
  );
};