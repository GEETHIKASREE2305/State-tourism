import Footer from "../components/Footer";
import Hero from "../components/Hero"; 
import Navbar from "../components/Navbar"
import Our from "../components/Our";
import Trip from "../components/Trip";
//import Footer from "../components/Footer";
function Service (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://s4.scoopwhoop.com/anj/houseboat/785319557.jpg"
        title="services"
        btnclass="hide"
        
        
        />
        <Our/>
        <Trip/>
        <Footer/>
    
        </>

    )
}
export default Service;

        