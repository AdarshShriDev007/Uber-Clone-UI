import "./BikeAndScooters.css";

import GoingBeyondCars from "./GoingBeyondCars/GoingBeyondCars";
import WhyItIsHelpful from "./WhyItIsHelpful/WhyItIsHelpful";
import HowItWorks from "./HowItWorks/HowItWorks";
import GetMore from "./GetMore/GetMore";
import SignupAndShare from "./SignupAndShare/SignupAndShare";
import LastNotice from "../../../LastNotice/LastNotice";

import LastNoticeJson from "../../../../JsonApi/LastNotice/LastNotice.json";

import MediaQuery from "react-responsive";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import BackToTop from "../../../BackToTop/BackToTop";

const BikeAndScooters =()=>{
    const design = (
        <>
            <Navbar />
            <div className="main-con">
                <GoingBeyondCars />
                <WhyItIsHelpful />
               
            </div>
            <MediaQuery minWidth={992}>
                <div style={{paddingLeft:"40px",paddingRight:"100px"}}>
                    <HowItWorks />
                </div>
            </MediaQuery>

            <MediaQuery maxWidth={992}>
                <div className="main-con">
                    <HowItWorks />
                </div>
            </MediaQuery>
            

            <div className="main-con">
                <GetMore />
                <SignupAndShare />
                {
                    LastNoticeJson.map((item)=>{
                        if(item.page === "bike_and_scooters")
                        {
                            return <LastNotice data={item} key={item.id} />
                        }
                    })
                }
                
            </div>
            <Footer />
            <BackToTop />
        </>
    );
    return design;
}

export default BikeAndScooters;