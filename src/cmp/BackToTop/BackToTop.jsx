import "./BackToTop.css";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {
    Button, Typography
} from "@mui/material";

import {
    useState
} from "react";

const BackToTop = ()=>{

    

    const design = (
        <>
            <button className="backtotopIconCon d-flex justify-content-center align-items-center">
                <Typography className="backtotoptext">Back to top&nbsp;&nbsp;</Typography>
                <ArrowUpwardIcon className="backtotopIcon" />
            </button> 
        </>
    );
    return design;
}

export default BackToTop;