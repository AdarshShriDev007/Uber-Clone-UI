import {
    Typography
} from "@mui/material";

import QuoteOfCeoJson from "../../../../JsonApi/Safety/QuoteOfCeo/QuoteOfCeo.json";

const QuoteOfCeo = ()=>{
    const design = (
        <>
            <div className="QuateOfCeoCon">
                <Typography component="h4" className="bold-subtitle">
                    {QuoteOfCeoJson.quote}
                </Typography>
                <Typography component="h4" className="subtitle">
                    {QuoteOfCeoJson.ceo}
                </Typography>
            </div>
        </>
    );
    return design;
}

export default QuoteOfCeo;