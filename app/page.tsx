import ContactUs from "./components/LandingPage/ContactUs";
import Faq from "./components/LandingPage/Faq";
import Features from "./components/LandingPage/Features";
import Footer from "./components/LandingPage/Footer";
import Header from "./components/LandingPage/Header";
import Pricing from "./components/LandingPage/Pricing";
import Productivity from "./components/LandingPage/Productivity";
import Steps from "./components/LandingPage/Steps";
import Transform from "./components/LandingPage/Transform";
import Trial from "./components/LandingPage/Trial";

export default function Home() {
  return (
    <>
      <Header />
      <Productivity />
      <Transform />
      <Steps />
      <Features />
      <Pricing />
      <Trial />
      <Faq />
      <ContactUs />
      <Footer />
    </>
  );
}
