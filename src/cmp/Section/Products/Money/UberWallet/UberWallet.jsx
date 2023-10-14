import { Typography } from "@mui/material";

import UberWalletJson from "../../../../../JsonApi/Products/Money/UberWallet/UberWallet.json";

const UberWallet = ()=>{
    const design = (
        <>
           <div className="row row-con">
            <div className="col-md-5 col-con">
                <div>
                    <Typography component="h4" className="title">
                        {UberWalletJson.title}
                    </Typography>
                    <Typography component="h4" className="subtitle">
                        {UberWalletJson.subtitle}
                    </Typography>
                </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
                <img src={`../${UberWalletJson.img}`} width="100%"/>
            </div>
           </div>
        </>
    );
    return design;
}

export default UberWallet;