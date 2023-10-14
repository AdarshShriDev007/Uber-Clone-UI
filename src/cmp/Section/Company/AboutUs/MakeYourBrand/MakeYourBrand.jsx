import {
    Typography 
} from "@mui/material";

const MakeYourBrand = ()=>{
    const design = (
        <>
            
                <div className="row row-con">
                    <div className="col-lg-5 d-flex flex-column justify-content-center">
                        <div className="mb-4">
                            <Typography component="h4" className="title">
                                Make your brand go where people go
                            </Typography>
                            <Typography component="h4" className="subtitle">
                            Promote it to millions on the move by advertising your brand through Uber.
                            </Typography>
                        </div>
                        <div>
                            <button style={{paddingLeft:"0px",marginRight:"20px"}} className="hoverButton">
                                <Typography className="hovertext">Learn more</Typography>
                                <div className="relcon">
                                    <div className="abcon">
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <img src="../images/MakeYourBrand.webp" width="100%" />
                    </div>
                </div>
        </>
    );
    return design; 
}

export default MakeYourBrand;