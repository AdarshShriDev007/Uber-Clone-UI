import {
    Typography
} from "@mui/material";

import ESGReportJson from "../../../../../JsonApi/Company/GlobalCitizenship/ESGReport/ESGReport.json";

const ESGReport = ()=>{
    const design = (
        <>
                <div className="row row-con">
                    <div className="col-md-5 col-con">
                        <div>
                            <Typography component="h4" className="title">
                                {ESGReportJson.title}
                            </Typography>
                            <Typography component="h4" className="subtitle">
                                {ESGReportJson.subtitle}
                            </Typography>
                            <div className="mb-4">
                                <button className="black-btn">
                                    <Typography className="black-btn-text">
                                        {ESGReportJson.button}
                                    </Typography>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6 d-flex align-items-center">
                        <img src={"../"+ESGReportJson.img} width="100%" />
                    </div>
                </div>
        </>
    );
    return design;
}

export default ESGReport;