import selfie from '../assets/doncaster_maths_tutor.jpg'

export default function About() {
    return (
        <div className="row p-5" id="aboutMe">
            <h2 className="col-md-12 p-4 text-center wow fadeInUp">Hi, I'm Andy Kent</h2>
            <div className="col-lg-6 p-4 my-auto text-center wow fadeIn" data-wow-delay="0.4s" id="profilePhotoContainer">
                <img className="img-fluid w-100" src={selfie} alt="A level and GCSE maths tutor in Doncaster" id="profilePhoto" />
            </div>
            <div className="col-lg-6 my-auto">
                <p className="p-4 wow fadeIn" data-wow-delay="0.4s">Whilst I have had a successful career as a senior manager in law enforcement I always maintained a keen interest in maths after studying the subject at King’s College, London. I tutored maths to my sons and niece at GCSE and A level and all achieved A<sup>*</sup>’s and went on to study a maths related degree at a Russell Group university. During this period, and without advertising, I was inundated with requests for tutoring from other parents. I took on a few, but within a short period I had a sizeable waiting list. It is at this point I decided to become a full time maths tutor; a job I love.</p>
            </div>
            <div className="col-md-12 my-auto wow fadeIn" data-wow-delay="0.4s">
                <p className="p-4">I am extremely enthusiastic about maths and have found that this can be infectious and inspire others. In fact, on numerous occasions, I have completely changed a child’s attitude towards maths so that it has become their favourite subject. Moreover, the importance of <u><strong>results</strong></u> is something I am acutely aware of. I take great pride in the achievements of my students, from moving up sets at school to getting the grades they need for university. I have an excellent track record of students achieving top grades – try me and you’ll see why.</p>
            </div> 
        </div>
    );
};