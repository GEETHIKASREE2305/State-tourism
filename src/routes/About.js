import Aboutus from "../components/Aboutus";
import Culture from "../components/Culture";
import Footer from "../components/Footer";
import Hero from "../components/Hero"; 
import Navbar from "../components/Navbar";
//import Footer from "../components/Footer";
function About (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://i.ytimg.com/vi/K-0sOnoVyRE/maxresdefault.jpg"
        title=""
        btnclass="hide"
        
        
        
        />
        <Aboutus/>
        <Culture/>
        <Footer/>
        
        </>

    )
}
export default About;