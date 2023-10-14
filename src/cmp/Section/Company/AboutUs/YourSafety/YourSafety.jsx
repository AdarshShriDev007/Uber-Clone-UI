import {
    Typography
} from "@mui/material";

import YourSafetyJson from "../../../../../JsonApi/Company/AboutUs/YourSafety/YourSafety.json";

const YourSafety = ()=>{
    const design = (
        <>
            
                <div className="row row-con">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <div className="mb-4">
                            <Typography component="h4" className="title">
                                {YourSafetyJson.title}
                            </Typography>
                            <Typography component="h4" className="subtitle">
                                {YourSafetyJson.subtitle}
                            </Typography>
                        </div>
                        <div>
                            <button style={{paddingLeft:"0px",marginRight:"20px"}} className="hoverButton">
                                <Typography className="hovertext">
                                    {YourSafetyJson.button}
                                </Typography>
                                <div className="relcon">
                                    <div className="abcon">
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={"../"+YourSafetyJson.img} />
                    </div>
                </div>
            
        </>
    );
    return design;
}

export default YourSafety;