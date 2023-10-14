import "./Safety.css";

import OurCommitment from "./OurCommitment/OurCommitment";
import HelpingToKeep from "./HelpingToKeep/HelpingToKeep";
import HowSafetyIsBuilt from "./HowSafetyIsBuilt/HowSafetyIsBuilt";
import BuildingSafer from "./BuildingSafer/BuildingSafer";
import QuoteOfCeo from "./QuoteOfCeo/QuoteOfCeo";
import Partnering from "./Partnering/Partnering";
import DRSafety from "./DRSafety/DRSafety";
import SafetyRulesForDR from "./SafetyRulesForDR/SafetyRulesForDR";
import LastNotice from "../../LastNotice/LastNotice";
import LastNoticeJson from "../../../JsonApi/LastNotice/LastNotice.json";
import { BackHand } from "@mui/icons-material";

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import BackToTop from "../../BackToTop/BackToTop";

const Safety = ()=>{
    const design = (
        <>
            <Navbar />

            <div className="main-con">
                <OurCommitment />
                <HelpingToKeep />
                <SafetyRulesForDR />
                <HowSafetyIsBuilt />
                <BuildingSafer />
            </div>
            <div style={{backgroundColor:"#276EF1"}}>
                <QuoteOfCeo />
            </div>
            <div className="main-con">
                <Partnering />
                <DRSafety />
                {
                    LastNoticeJson.map((item)=>{
                        if(item.page === "safety")
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


export default Safety;