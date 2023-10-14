import CommitmentToCommunity from "./CommitmentToCommunity/CommitmentToCommunity";
import SupportingCities from "./SupportingCities/SupportingCities";
import ThinkingOfPerson from "./ThinkingOfPerson/ThinkingOfPerson";
import NewTools from "./NewTools/NewTools";
import SaferCommunities from "./SaferCommunities/SaferCommunities";
import DistractedDriving from "./DistractedDriving/DistractedDriving";
import DiversityAndInclusion from "./DiversityAndInclusion/DiversityAndInclusion";
import OurUsersAreDiverse from "./OurUsersAreDiverse/OurUsersAreDiverse";
import OpportunityForAll from "./OpportunityForAll/OpportunityForAll";
import Accessibility from "./Accessibility/Accessibility";
import ESGReport from "./ESGReport/ESGReport";

import ThinkingOfPersonJson from "../../../../JsonApi/Company/GlobalCitizenship/ThinkingOfPerson/ThinkingOfPerson.json";

import "./GlobalCitizenship.css";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import BackToTop from "../../../BackToTop/BackToTop";

const GlobalCitizenship = ()=>{
    const design = (
        <> 
            <Navbar /> 
            <CommitmentToCommunity />
            <div className="main-con">
                <SupportingCities />

                {
                    ThinkingOfPersonJson.map((item)=>{
                        if(item.id === 1)
                        {
                            return <ThinkingOfPerson data={item} key={item.id} />
                        }
                    })
                }

                <NewTools />
                <SaferCommunities />
                <DistractedDriving />
                <DiversityAndInclusion />
                <OurUsersAreDiverse />
                <OpportunityForAll />

                {
                    ThinkingOfPersonJson.map((item)=>{
                        if(item.id === 2)
                        {
                            return <ThinkingOfPerson data={item} key={item.id} />
                        }
                    })
                }

                <Accessibility />

                {
                    ThinkingOfPersonJson.map((item)=>{
                        if(item.id === 3)
                        {
                            return <ThinkingOfPerson data={item} key={item.id} />
                        }
                    })
                }

                <ESGReport />

            </div>
            <Footer />
            <BackToTop />
        </>
    );
    return design;
}

export default GlobalCitizenship;