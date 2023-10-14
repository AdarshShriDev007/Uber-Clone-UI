import HeaderTabs from "./HeaderTabs/HeaderTabs";
import UberForBusiness from "./UberForBusiness/UberForBusiness";
import RideWithUber from "./RideWithUber/RideWithUber";
import FocusOnSafety from "./FocusOnSafety/FocusOnSafety";
import LearnMore from "./LearnMore/LearnMore";
import DownloadApps from "./DownloadApps/DownloadApps";
import SignupTo from "./SignupTo/SignupTo";

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import BackToTop from "../../BackToTop/BackToTop";


const Homepage = ()=>{
    const design = (
        <>
            <Navbar />

            <HeaderTabs />
            <UberForBusiness />
            <RideWithUber />
            <FocusOnSafety />
            <LearnMore />
            <DownloadApps />
            <SignupTo />

            <Footer />
            <BackToTop />
        </>
    );
    return design;
}

export default Homepage;