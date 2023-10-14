import "./AboutUsTop.css";

import AboutUsTopJson from "../../../../../JsonApi/Company/AboutUs/AboutUsTop/AboutUsTop.json";
import { Typography } from "@mui/material";


const AboutUsTop = ()=>{
    const design = (
        <>
            <div className="topCon row-con">
                <img src={"../"+AboutUsTopJson.img} className="imgAbout" />
                <div className="toptext">
                    <Typography component="h4" className="bigtext" sx={{color:"white"}}>
                        {AboutUsTopJson.text}
                    </Typography>
                </div>
            </div>
            
        </>
    );
    return design;
}

export default AboutUsTop;