import { Typography } from "@mui/material";

import SupportingCitiesJson from "../../../../../JsonApi/Company/GlobalCitizenship/SupportingCities/SupportingCities.json";

const SupportingCities = ()=>{
    const design = (
        <>
            
                <div className="row row-con">
                    <div className="col-md-6 mb-3 d-flex align-items-center">
                        <img src={"../"+SupportingCitiesJson.img} width="100%" />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5 col-con">
                        <div>
                            <Typography component="h4" className="title">
                                {SupportingCitiesJson.title}
                            </Typography>
                            <Typography component="h4" className="subtitle">
                                {SupportingCitiesJson.subtitle}
                            </Typography>
                            <div>
                                <button className="black-btn">
                                    <Typography className="black-btn-text">
                                        {SupportingCitiesJson.button}
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

export default SupportingCities;