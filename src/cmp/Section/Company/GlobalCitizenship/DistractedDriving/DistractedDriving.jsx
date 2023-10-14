import {
    Typography
} from "@mui/material";

import DistractedDrivingJson from "../../../../../JsonApi/Company/GlobalCitizenship/DistractedDriving/DistractedDriving.json";

const DistractedDriving = ()=>{
    const design = (
        <>
                <div className="row row-con">
                    <div className="col-md-5 col-con">
                        <div>
                            <Typography component="h4" className="title">
                                {DistractedDrivingJson.title}
                            </Typography>
                            <Typography component="h4" className="subtitle">
                                {DistractedDrivingJson.subtitle}
                            </Typography>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6 d-flex align-items-center">
                        <img src={"../"+DistractedDrivingJson.img} width="100%" />
                    </div>
                </div>
        </>
    );
    return design;
}

export default DistractedDriving;