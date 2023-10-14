import { useState } from "react";
import "./UberForBusiness.css";

import {
    Typography,
    Button,
    IconButton
} from "@mui/material";

import Business from "../../../../JsonApi/JsonHomepage/UberForBusiness/UberForBusiness.json";

const UberForBusiness = ()=>{

    const design = (
        <>
            <div className="mainCon">
                <img src={Business.conimg} width="100%"/>
                <div className="con main-con">
                    <Typography component="h4" className="title">{Business.title}</Typography>
                    <Typography component="h4" className="subtitle">{Business.subtitle}</Typography>
                    <Button sx={{fontWeight:"bold"}} className="text-capitalize py-2" variant="contained">{Business.button}</Button> 
                </div>
            </div>
        </>
    );
    return design;
}

export default UberForBusiness;

