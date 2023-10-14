import { Typography } from "@mui/material";

import GoingBeyondCarsJson from "../../../../../JsonApi/Products/BikeAndScooters/GoingBeyondCars/GoingBeyondCars.json";

import MediaQuery from "react-responsive";

const GoingBeyondCars = ()=>{
    const design = (
        <>
            <MediaQuery minWidth={992}>
            <div className="row row-con">
                <div className="col-md-5 col-con">
                    <div>
                        <Typography component="h4" className="bigtext">
                            {GoingBeyondCarsJson.title}
                        </Typography>
                        <Typography component="h4" className="bold-subtitle">
                            {GoingBeyondCarsJson.bold_subtitle}
                        </Typography>
                        <Typography component="h4" className="subtitle">
                            {GoingBeyondCarsJson.subtitle}
                        </Typography>
                        <div>
                            <button className="black-btn" style={{marginRight:"20px"}}>
                                <Typography className="black-btn-text">
                                    {GoingBeyondCarsJson.button}
                                </Typography>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 p-0 m-0"></div>
                <div className="col-md-5 p-0 m-0">
                    <div>
                        <img src={`../${GoingBeyondCarsJson.img}`} width="100%" />
                    </div>
                </div>
            </div>
            </MediaQuery>

            <MediaQuery maxWidth={992}>
            
                    <div className="row row-con bikeAndScooterCon">
                        <div className="col-md-12">
                            <div className="mb-4">
                                <img src={`../${GoingBeyondCarsJson.imgmob}`} width="100%" />
                            </div>
                        </div>
                        
                        <div className="col-md-12">
                            <div>
                                <Typography component="h4" className="bigtext mb-2">
                                    {GoingBeyondCarsJson.title}
                                </Typography>
                                <Typography component="h4" className="bold-subtitle">
                                    {GoingBeyondCarsJson.bold_subtitle}
                                </Typography>
                                <Typography component="h4" className="subtitle">
                                    {GoingBeyondCarsJson.subtitle}
                                </Typography>
                                <div>
                                <button className="black-btn" style={{marginRight:"20px"}}>
                                    <Typography className="black-btn-text">
                                        {GoingBeyondCarsJson.button}
                                    </Typography>
                                </button>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                
            </MediaQuery>
           
        </>
    );
    return design;
}

export default GoingBeyondCars;