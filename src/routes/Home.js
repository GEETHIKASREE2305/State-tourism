import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Trip from "../components/Trip";
//import Footer from  "../components/Footer";

function Home(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg="https://www.keralatourism.org/images/05.jpg"
        title="KERALA TOURISM"
        text="A trip to heaven on the earth"
        buttonText="Travel plan"
        url="/"
        btnclass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        
        </>

    )
}
export default Home;