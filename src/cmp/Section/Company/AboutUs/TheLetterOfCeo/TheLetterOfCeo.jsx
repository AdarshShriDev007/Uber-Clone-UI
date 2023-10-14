import "./TheLetterOfCeo.css";
import {
    Typography,
    Button
} from "@mui/material";

import TheLetterOfCeoJson from "../../../../../JsonApi/Company/AboutUs/TheLetterOfCeo/TheLetterOfCeo.json";

const TheLetterOfCeo = ()=>{
    const design = (
        <>
            <div className="CeoCon">
                <img src={"../"+TheLetterOfCeoJson.img} width="100%"/>
                
                <div className="ceoLetterCon">
                    <div className="row main-con">
                        <div className="col-md-6">
                            <Typography component="h4" className="bigtext" sx={{color:"white"}}>
                                {TheLetterOfCeoJson.title}
                            </Typography>
                            <Typography component="h4" className="subtitle" sx={{color:"white"}}>
                                {TheLetterOfCeoJson.subtitle}
                            </Typography>
                            <button className="letter-btn">
                                <Typography sx={{color:"white"}} className="text-capitalize">
                                    {TheLetterOfCeoJson.button}
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

export default TheLetterOfCeo;