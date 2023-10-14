import { Typography } from "@mui/material";
import "./AlwaysTheRide.css";
import AlwaysTheRideJson from "../../../../../JsonApi/Products/Ride/AlwaysTheRide/AlwaysTheRide.json";

import MediaQuery from "react-responsive";

const AlwaysTheRide = ()=>{
    const design = (
        <>
            <MediaQuery minWidth={992}>
            <div className="Always-Con row-con">
                    <div className="row">
                        <div className="col-md-5 col-con">
                            <div>
                                <Typography component="h4" className="bigtext">
                                    {AlwaysTheRideJson.title}
                                </Typography>
                                <Typography component="h4" className="subtitle">
                                    {AlwaysTheRideJson.subtitle}
                                </Typography>
                                <div>
                                <button className="black-btn" style={{marginRight:"20px"}}>
                                    <Typography className="black-btn-text">
                                        {AlwaysTheRideJson.button}
                                    </Typography>
                                </button>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 d-flex justify-content-end">
                            <div>
                                <img src={`../${AlwaysTheRideJson.img}`} height="520px" />
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
           
                
            
            <MediaQuery maxWidth={992}>
            <div className="Always-Con row-con">
                    <div className="row" >
                        <div className="col-md-12">
                            <div className="mb-4">
                                <img src={`../${AlwaysTheRideJson.imgmob}`} width="100%" />
                            </div>
                        </div>
                        
                        <div className="col-md-12">
                            <div>
                                <Typography component="h4" className="bigtext">
                                    {AlwaysTheRideJson.title}
                                </Typography>
                                <Typography component="h4" className="subtitle">
                                    {AlwaysTheRideJson.subtitle}
                                </Typography>
                                <div>
                                <button className="black-btn" style={{marginRight:"20px"}}>
                                    <Typography className="black-btn-text">
                                        {AlwaysTheRideJson.button}
                                    </Typography>
                                </button>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </MediaQuery>
           
            
        </>
    );
    return design;
}

export default AlwaysTheRide;