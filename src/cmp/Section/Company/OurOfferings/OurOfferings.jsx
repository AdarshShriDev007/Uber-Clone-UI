import "./OurOfferings.css";

import DownloadTheApp from "./DownloadTheApp/DownloadTheApp";
import UberOfferings from "./UberOfferings/UberOfferings";
import RideOptions from "./RideOptions/RideOptions";
import MoreAbout from "./MoreAbout/MoreAbout";
import FoodDelivery from "./FoodDelivery/FoodDelivery";
import EarnMoney from "./EarnMoney/EarnMoney";
import MovingCities from "./MovingCities/MovingCities";
import HelpingBusinesses from "./HelpingBusinesses/HelpingBusinesses";
import SignupTo from "../../Homepage/SignupTo/SignupTo";
import LastNotice from "../../../LastNotice/LastNotice";
import LastNoticeJson from "../../../../JsonApi/LastNotice/LastNotice.json";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import BackToTop from "../../../BackToTop/BackToTop";


const OurOfferings = ()=>{
    const design = (
        <> 
            <Navbar /> 
            <div className="main-con">
                <DownloadTheApp />
                <UberOfferings />
                <RideOptions />
                <MoreAbout />
                <FoodDelivery />
                <EarnMoney />
                <MovingCities />
                <HelpingBusinesses />
                
            </div>
            <div style={{marginTop:"-64px"}}>
                <SignupTo />
            </div>
            
            <div className="main-con" style={{marginTop:"36px"}}>
                {
                    LastNoticeJson.map((item)=>{
                        if(item.page === "uber-offerings")
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

export default OurOfferings;