import {
    Typography
} from "@mui/material";

import NewToolsJson from "../../../../../JsonApi/Company/GlobalCitizenship/NewTools/NewTools.json";

const NewTools = ()=>{
    const design = (
        <>
                <div className="row row-con">
                    <div className="col-md-5 col-con">
                        <div>
                            <Typography component="h4" className="title">
                                {NewToolsJson.title}
                            </Typography>
                            <Typography component="h4" className="subtitle">
                                {NewToolsJson.subtitle}
                            </Typography>
                            <div className="mb-4">
                                <button className="black-btn">
                                    <Typography className="black-btn-text">
                                        {NewToolsJson.button}
                                    </Typography>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6 d-flex align-items-center">
                        <img src={"../"+NewToolsJson.img} width="100%" />
                    </div>
                </div>
        </>
    );
    return design;
}

export default NewTools;