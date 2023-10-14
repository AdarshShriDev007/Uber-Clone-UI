import { Typography } from "@mui/material";

import MakeYourMoneyJson from "../../../../../JsonApi/Products/Money/MakeYourMoney/MakeYourMoney.json";

const MakeYourMoney = ()=>{
    const design = (
        <>
            <div className="row row-con">
                <div className="col-md-9">
                    <div>
                        <Typography component="h4" className="title">
                            {MakeYourMoneyJson.title}
                        </Typography>
                        <Typography component="h4" className="subtitle">
                            {MakeYourMoneyJson.subtitle}
                        </Typography>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </>
    );
    return design;
}

export default MakeYourMoney;