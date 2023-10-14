import {
    Typography
} from "@mui/material";

import OpportunityForAllJson from "../../../../../JsonApi/Company/GlobalCitizenship/OpportunityForAll/OpportunityForAll.json";

const OpportunityForAll = ()=>{
    const design = (
        <>
                <div className="row row-con">
                    <div className="col-md-6 d-flex align-items-center">
                        <img src={"../"+OpportunityForAllJson.img} width="100%" />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5 col-con">
                        <div>
                            <Typography component="h4" className="title">
                                {OpportunityForAllJson.title}
                            </Typography>
                            <Typography component="h4" className="subtitle">
                                {OpportunityForAllJson.subtitle}
                            </Typography>
                            <div>
                                <button className="black-btn">
                                    <Typography className="black-btn-text">
                                        {OpportunityForAllJson.button}
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

export default OpportunityForAll;