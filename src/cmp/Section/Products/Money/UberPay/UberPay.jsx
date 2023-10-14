import { Typography } from "@mui/material";

import UberPayJson from "../../../../../JsonApi/Products/Money/UberPay/UberPay.json";

import MediaQuery from "react-responsive";

const UberPay = ()=>{
    const design = (
        <>
            <div className="uberPay-con">
                <img src={`../${UberPayJson.img}`} width="100%" />

                
                    <div className="uberPay-subcon row main-con">
                        <MediaQuery minWidth={769}>
                            <div className="col-md-6 col-con">
                                <div>
                                    <Typography sx={{color:"white"}} component="h4" className="title">
                                        {UberPayJson.title}
                                    </Typography>
                                    <Typography sx={{color:"white"}} component="h4" className="subtitle">
                                        {UberPayJson.beforeText}
                                        <button className="hoverBtnInherit">
                                            <Typography className="subtitle-no-padding">
                                                {UberPayJson.text}
                                            </Typography>
                                        </button>  
                                        {UberPayJson.afterText}
                                    </Typography>
                                    <div>
                                        <button className="hoverBtnInherit mb-3">
                                            <Typography className="subtitle-no-padding">
                                                {UberPayJson.button}
                                            </Typography>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6"></div>
                        </MediaQuery> 


                        <MediaQuery maxWidth={768}>
                            <div className="col-md-12 col-con">
                                <div>
                                    <Typography sx={{color:"white"}} component="h4" className="title">
                                        {UberPayJson.title}
                                    </Typography>
                                    <Typography sx={{color:"white"}} component="h4" className="subtitle">
                                        {UberPayJson.beforeText}
                                        <button className="hoverBtnInherit">
                                            <Typography className="subtitle-no-padding">
                                                {UberPayJson.text}
                                            </Typography>
                                        </button>  
                                        {UberPayJson.afterText}
                                    </Typography>
                                    <div>
                                        <button className="hoverBtnInherit mb-3">
                                            <Typography className="subtitle-no-padding">
                                                {UberPayJson.button}
                                            </Typography>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                        </MediaQuery>  
                    </div>
                
            </div>
        </>
    );
    return design;
}

export default UberPay;