import {
    Typography
} from "@mui/material";

import "./SearchOpenRoles.css";

const SearchOpenRoles = ()=>{
    const design = (
        <>
            
                <div className="row row-con d-flex align-items-center">
                    <div style={{paddingRight:"50px"}} className="col-lg-6">
                        <div className="mb-5">
                            <Typography component="h4" className="bigtext">
                                Come reimagine with us
                            </Typography>
                        </div>
                        <div>
                            <button className="roles-btn">
                                <Typography sx={{color:"white"}} className="text-capitalize">
                                    Search open roles
                                </Typography>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <img src="../images/SearchOpenRoles.svg" width="100%" />
                    </div>
                </div>
        
        </>
    );
    return design;
}

export default SearchOpenRoles;