import {
    Typography
} from "@mui/material";

import DiversityJson from "../../../../../JsonApi/Company/GlobalCitizenship/DiversityAndInclusion/DiversityAndInclusion.json";

const DiversityAndInclusion = ()=>{
    const design = (
        <>
                <div className="row row-con">
                    <div className="col-md-6 d-flex align-items-center mb-3">
                        <img src={"../"+DiversityJson.img} width="100%" />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5 col-con">
                        <div>
                            <Typography component="h4" className="title">
                                {DiversityJson.title}
                            </Typography>
                            <Typography component="h4" className="subtitle">
                                {DiversityJson.subtitle}
                            </Typography>
                            <div>
                                <button className="black-btn">
                                    <Typography className="black-btn-text">
                                        {DiversityJson.button}
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

export default DiversityAndInclusion;