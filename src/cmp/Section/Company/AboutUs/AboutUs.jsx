import AboutUsTop from "./AboutUsTop/AboutUsTop";
import WeReimagine from "./WeReimagine/WeReimagine";
import MissionStatement from "./MissionStatement/MissionStatement";
import TheLetterOfCeo from "./TheLetterOfCeo/TheLetterOfCeo";
import Sustainability from "./Sustainability/Sustainability";
import RidesAndBeyond from "./RidesAndBeyond/RidesAndBeyond";
import YourSafety from "./YourSafety/YourSafety";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import MakeYourBrand from "./MakeYourBrand/MakeYourBrand";
import KeepUp from "./KeepUp/KeepUp";
import SearchOpenRoles from "./SearchOpenRoles/SearchOpenRoles";

import "./AboutUs.css";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import BackToTop from "../../../BackToTop/BackToTop";

const AboutUs = ()=>{
    const design = (
        <>
            <Navbar />
            <AboutUsTop />

            <div className="main-con">
                <WeReimagine />
                <MissionStatement />
            </div>
            
            <TheLetterOfCeo />

            <div className="main-con">
                <Sustainability />
                <RidesAndBeyond />
                <YourSafety />
                <CompanyInfo />
                <MakeYourBrand />
                <KeepUp />
                <SearchOpenRoles />
            </div>
            <Footer />
            <BackToTop />
        </>
    );
    return design;
}

export default AboutUs;