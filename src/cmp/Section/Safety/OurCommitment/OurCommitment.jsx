import { Typography } from "@mui/material";
import OurCommitmentJson from "../../../../JsonApi/Safety/OurCommitment/OurCommitment.json";

const OurCommitment = ()=>{
    const design = (
        <>
            <div style={{marginTop:"64px",marginBottom:"64px"}} className="row OurCommCon">
                <div className="col-lg-5 d-flex align-items-center">
                    <div>
                        <Typography component="h4" className="bigtext">
                            {OurCommitmentJson.title}
                        </Typography>
                        <Typography component="h4" className="subtitle">
                            {OurCommitmentJson.subtitle}
                        </Typography>
                    </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6 mb-4 d-flex align-items-center">
                    <div className="w-100">
                        <img src={OurCommitmentJson.img} width="100%" />
                    </div>
                </div>
            </div>
            
        </>
    );
    return design;
}

export default OurCommitment;