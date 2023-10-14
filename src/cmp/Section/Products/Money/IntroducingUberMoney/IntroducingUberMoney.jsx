import { Typography } from "@mui/material";

import IntroJson from "../../../../../JsonApi/Products/Money/IntroducingUberMoney/IntroducingUberMoney.json";

import MediaQuery from "react-responsive";

const IntroducingUberMoney = ()=>{
    const design = (
        <>
            <div className="video-con row-con">
                <video width="100%" autoPlay muted loop>
                    <MediaQuery minWidth={769}>
                        <source src={`../${IntroJson.video}`}></source>
                    </MediaQuery>

                    <MediaQuery maxWidth={768}>
                        <source src={`../${IntroJson.videomob}`}></source>
                    </MediaQuery>  
                </video>
                
                <div className="video-overlay">
                    <div className="row main-con" style={{width:"100%"}}>
                        <div className="col-md-8" style={{paddingTop:"90px"}}>
                            <div>
                                <Typography component="h4" sx={{color:"white"}} className="bigtext pb-3">
                                    {IntroJson.text}
                                </Typography>
                                <div>
                                    <button className="video-btn">
                                        <span className="material-icons" style={{fontSize:"32px",marginRight:"5px"}}>
                                            {IntroJson.icon}
                                        </span>
                                        <Typography className="hovertext" sx={{fontWeight:"bold"}} component="h4">
                                            {IntroJson.button}
                                        </Typography>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        </>
    );
    return design;
}

export default IntroducingUberMoney;