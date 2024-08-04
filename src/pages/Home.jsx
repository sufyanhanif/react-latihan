import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { homeSection } from "../data/HomeSection"
import { courseSection } from "../data/CourseSection"
import { tutorSection,tutorList } from "../data/TutorSection" 
import Tutors from "../components/Tutors"
import { partnerSection,partnerList } from "../data/PartnerSection"
import Partner from "../components/Partner"
import Contact from "../components/Contact"

import parse from 'html-react-parser'
function Home() {
  return (
    <>
        <Navbar />
        <div className="wrapper">
            {/* home */}
            <section id="home">
            <img src= {homeSection.image} />
            <div className="kolom">
                {parse(homeSection.content)}
            </div>
        </section>
        {/* online course */}
        <section id="courses">
            <div className="kolom">
                {parse(courseSection.content)}
            </div>
            <img src= {courseSection.image}/>
        </section>
        </div>
        {/* Tutors */}
         <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {parse(tutorSection.content)}
                </div>
                <Tutors tutorList={tutorList}/>
            </div>
        </section>
        {/* Partner */}
        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                    {parse(partnerSection.content)}
                </div>
            <Partner partnerList={partnerList}/>
        </div>
        </section>
        {/* Contact */}
        <Contact/>
        {/* Copyright */}
        
        <Footer />
    </>
        
  )
}

export default Home
