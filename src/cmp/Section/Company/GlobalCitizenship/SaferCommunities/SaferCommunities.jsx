import { Typography } from "@mui/material";

import SaferCommunitiesJson from "../../../../../JsonApi/Company/GlobalCitizenship/SaferCommunities/SaferCommunities.json";

const SaferCommunities = ()=>{
    const design = (
        <>
                <div className="row row-con">
                    <div className="col-md-6 d-flex align-items-center mb-4">
                        <img src={"../"+SaferCommunitiesJson.img} width="100%" />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5 col-con">
                        <div>
                            <Typography component="h4" className="title">
                                {SaferCommunitiesJson.title}
                            </Typography>
                            <Typography component="h4" className="subtitle">
                                {SaferCommunitiesJson.subtitle}
                            </Typography>
                            <div>
                                <button className="black-btn">
                                    <Typography className="black-btn-text">
                                        {SaferCommunitiesJson.button}
                                    </Typography>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
    return design;
}

export default SaferCommunities;