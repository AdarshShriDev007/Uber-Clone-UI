import { Typography } from "@mui/material";

import DownloadTheAppJson from "../../../../../JsonApi/Company/OurOfferings/DownloadTheApp/DownloadTheApp.json";

const DownloadTheApp = ()=>{
    const design = (
        <>
            <div className="row row-con" style={{marginTop:"90px"}}>
                <div className="col-md-8 col-con">
                    <div>
                        <Typography component="h4" className="bigtext mb-3">
                            {DownloadTheAppJson.title}
                        </Typography>
                        <Typography component="h4" className="subtitle">
                            {DownloadTheAppJson.subtitle}
                        </Typography>
                        <div>
                            <button className="black-btn" style={{marginRight:"20px"}}>
                                <Typography className="black-btn-text">
                                    {DownloadTheAppJson.button}
                                </Typography>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </>
    );
    return design;
}

export default DownloadTheApp;