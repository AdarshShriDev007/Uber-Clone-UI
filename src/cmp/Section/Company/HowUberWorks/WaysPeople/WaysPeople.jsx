import {
    Typography
} from "@mui/material";

import WaysPeopleJson from "../../../../../JsonApi/Company/HowUberWorks/WaysPeople/WaysPeople.json";
import { FitScreen } from "@mui/icons-material";

const WaysPeople = ()=>{
    const design = (
        <>
                <div className="row row-con">
                    <div className="col-md-6 d-flex align-items-center mb-3" style={{overflow:"hidden"}}>
                        <img src={"../"+WaysPeopleJson.img} width="100%" />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5 col-con">
                        <div>
                            <Typography component="h4" className="title">
                                {WaysPeopleJson.title}
                            </Typography>
                            <Typography component="h4" className="subtitle">
                                {WaysPeopleJson.subtitle}
                            </Typography>
                            <div>
                                <button className="black-btn">
                                    <Typography className="black-btn-text">
                                        {WaysPeopleJson.button}
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

export default WaysPeople;