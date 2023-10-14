import "./Ride.css";

import AlwaysTheRide from "./AlwaysTheRide/AlwaysTheRide";
import WhyUse from "./WhyUse/WhyUse";
import YourSafety from "./YourSafety/YourSafety";
import WaysToRide from "./WaysToRide/WaysToRide";
import EverywhereThat from "./EverywhereThat/EverywhereThat";
import WaysPeople from "../../Company/HowUberWorks/WaysPeople/WaysPeople";
import AskedQuestions from "./AskedQuestions/AskedQuestions";
import DoMoreInTheApp from "./DoMoreInTheApp/DoMoreInTheApp";
import SignupTo from "./SignupTo/SignupTo";
import LastNotice from "../../../LastNotice/LastNotice";

import SignupToJson from "../../../../JsonApi/Products/Ride/SignupTo/SignupTo.json";
import LastNoticeJson from "../../../../JsonApi/LastNotice/LastNotice.json";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import BackToTop from "../../../BackToTop/BackToTop";

const Ride = ()=>{
    const design = (
        <>
            <Navbar />
            <AlwaysTheRide />
            <div className="main-con">
                <WhyUse />
                <YourSafety />
                <WaysToRide />

                <div className="everycon">
                    <EverywhereThat />
                </div>
                <WaysPeople />
                <AskedQuestions />
                <DoMoreInTheApp />

                {
                    SignupToJson.map((item)=>{
                        if(item.name === "ride")
                        {
                            return <SignupTo data={item} key={item.id} />
                        }
                    })
                }
                {
                    LastNoticeJson.map((item)=>{
                        if(item.page === "ride")
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

export default Ride;