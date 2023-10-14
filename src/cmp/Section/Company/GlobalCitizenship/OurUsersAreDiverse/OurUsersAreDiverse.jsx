import {
    Typography
} from "@mui/material";

import OurUsersAreDiverseJson from "../../../../../JsonApi/Company/GlobalCitizenship/OurUsersAreDiverse/OurUsersAreDiverse.json";

const OurUsersAreDiverse = ()=>{
    const design = (
        <>
                <div className="row row-con">
                    <div className="col-md-5 col-con">
                        <div>
                            <Typography component="h4" className="title">
                                {OurUsersAreDiverseJson.title}
                            </Typography>
                            <Typography component="h4" className="subtitle">
                                {OurUsersAreDiverseJson.subtitle}
                            </Typography>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6 d-flex align-items-center">
                        <img src={"../"+OurUsersAreDiverseJson.img} width="100%" />
                    </div>
                </div>
        </>
    );
    return design;
}

export default OurUsersAreDiverse;