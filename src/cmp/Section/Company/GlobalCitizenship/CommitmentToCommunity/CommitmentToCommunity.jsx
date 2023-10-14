import {
    Typography
} from "@mui/material";

import "./CommitmentToCommunity.css";
import MediaQuery from "react-responsive";


import CommitmentToCommunityJson from "../../../../../JsonApi/Company/GlobalCitizenship/CommitmentToCommunity/CommitmentToCommunity.json";

const CommitmentToCommunity = ()=>{
    const design = (
        <>
            <div className="CommitCon row-con" style={{paddingTop:"90px"}}>
                <div className="row row-con main-con">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
                        <Typography className="bigtext" component="h4" sx={{mb:3}}>
                            {CommitmentToCommunityJson.title}
                        </Typography>
                        <Typography className="bold-subtitle" component="h4" sx={{mb:5}}>
                            {CommitmentToCommunityJson.subtitle}
                        </Typography>
                        <Typography className="subtitle" component="h4" sx={{textAlign:"center"}}>
                            {CommitmentToCommunityJson.text}
                        </Typography>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <MediaQuery minWidth={992}>
                    <img src={"../"+CommitmentToCommunityJson.img} width="100%" />
                </MediaQuery>
                
                <MediaQuery maxWidth={992}>
                    <img src={"../"+CommitmentToCommunityJson.imgmob} width="100%" />
                </MediaQuery>
            </div>
        </>
    );
    return design;
}

export default CommitmentToCommunity;