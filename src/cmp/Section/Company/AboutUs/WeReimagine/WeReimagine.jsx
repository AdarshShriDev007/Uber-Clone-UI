import { Typography } from "@mui/material";
import WeReimagineJson from "../../../../../JsonApi/Company/AboutUs/WeReimagine/WeReimagine.json";

const WeReimagine = ()=>{
    const design = (
        <>
                <div className="row row-con">
                    <div className="col-md-8">
                        <Typography component="h4" className="title">
                            {WeReimagineJson.title}
                        </Typography>
                        <Typography component="h4" className="subtitle">
                            {WeReimagineJson.subtitle}
                        </Typography>
                    </div>
                    <div className="col-md-4"></div>
                </div>
        </>
    );
    return design;
}

export default WeReimagine;