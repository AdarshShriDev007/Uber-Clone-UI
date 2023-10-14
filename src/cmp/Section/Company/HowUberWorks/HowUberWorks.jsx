
import "./HowUberWorks.css";

import HowToUse from "./HowToUse/HowToUse";
import SignUpToday from "./SignUpToday/SignUpToday";
import WaysPeople from "./WaysPeople/WaysPeople";
import SeeTheApp from "./SeeTheApp/SeeTheApp";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import BackToTop from "../../../BackToTop/BackToTop";


const HowUberWorks = ()=>{
    const design = (
        <>
            <Navbar />
            <div className="main-con">
                <HowToUse /> 
                <SignUpToday />
                <WaysPeople />
                <SeeTheApp />
            </div>
            <Footer />
            <BackToTop />
             
        </>
    );
    return design;
}

export default HowUberWorks;