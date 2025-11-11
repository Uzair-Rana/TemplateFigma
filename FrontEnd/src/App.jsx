import LandingPage from './Components/LandingPage.jsx'
import ContentSection from "./Components/ContentSection.jsx";
import Feature from "./Components/Features.jsx";
import Form from "./Components/Form.jsx";
import TestimonialSection from "./Components/TestimonialSection.jsx";
import Action from "./Components/Action.jsx";
import ShowCaseSection from "./Components/ShowCaseSection.jsx";
import TeamSection from "./Components/TeamSection.jsx";
import Contact from "./Components/Contact.jsx";
import PricingTable from "./Components/PricingTable.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
    return(
        <div>
            <LandingPage/>
            <ContentSection/>
            <Feature/>
            <Form/>
            <TestimonialSection/>
            <Action/>
            <ShowCaseSection/>
            <TeamSection/>
            <Contact/>
            <PricingTable/>
            <Footer/>
        </div>
    )
}

export default App
