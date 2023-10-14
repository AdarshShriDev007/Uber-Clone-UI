import {
    Typography
} from "@mui/material";

import SustainabilityJson from "../../../../../JsonApi/Company/AboutUs/Sustainability/Sustainability.json";

const Sustainability = ()=>{
    const design = (
        <>
           
                <div className="row row-con">
                    <div className="col-lg-6 d-flex align-items-center">
                        <img src={"../"+SustainabilityJson.img} width="100%" className="mb-3" />
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 d-flex flex-column justify-content-center">
                        <div className="mb-4">
                            <Typography component="h4" className="title">
                                {SustainabilityJson.title}
                            </Typography>
                            <Typography component="h4" className="subtitle">
                                {SustainabilityJson.subtitle}
                            </Typography>
                        </div>
                        <div>
                            <button style={{paddingLeft:"0px",marginRight:"20px"}} className="hoverButton">
                                <Typography className="hovertext">{SustainabilityJson.button}</Typography>
                                <div className="relcon">
                                    <div className="abcon">
                                    </div>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            
        </>
    );
    return design;
}

export default Sustainability;