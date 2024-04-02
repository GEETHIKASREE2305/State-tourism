import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero"; 
import Navbar from "../components/Navbar";
//import Footer from "../components/Footer";
function Contact (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://wallpaperaccess.com/full/5745822.jpg"
        title="CONTACT US"
        btnclass="hide"
        
        
        />
        <ContactForm/>
        <Footer/>
        
        </>

    )
}
export default Contact;