import {
    Typography
} from "@mui/material";

const Partnering = ()=>{
    const design = (
        <>
            <div className="row row-con">
                <div className="col-lg-6 d-flex align-items-center">
                    <div className="w-100">
                        <img src="Partnering.webp" width="100%" />
                    </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-5 d-flex align-items-center">
                    <div>
                        <div className="mb-5"> 
                        <Typography component="h4" className="title mt-3">
                            Partnering to make a difference
                        </Typography>
                        <Typography component="h4" className="subtitle">
                            Our commitment to safety goes beyond your ride. We have teamed up with leading experts—from public safety officials to anti-violence organizations—to help make roads and cities safer for all.
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
                </div>
            </div>
        </>
    );
    return design;
}

export default Partnering;