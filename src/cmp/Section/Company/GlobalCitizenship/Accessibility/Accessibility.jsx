import {
    Typography
} from "@mui/material";

import  AccessibilityJson from "../../../../../JsonApi/Company/GlobalCitizenship/Accessibility/Accessibility.json"; 

const Accessibility = ()=>{
    const design = (
        <>
                <div className="row row-con">
                    <div className="col-md-5 col-con">
                        <div>
                            <Typography component="h4" className="title">
                                {AccessibilityJson.title}
                            </Typography>
                            <Typography component="h4" className="subtitle">
                                {AccessibilityJson.subtitle}
                            </Typography>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6 d-flex align-items-center">
                        <img src={"../"+AccessibilityJson.img} width="100%" />
                    </div>
                </div>
        </>
    );
    return design;
} 

export default Accessibility;