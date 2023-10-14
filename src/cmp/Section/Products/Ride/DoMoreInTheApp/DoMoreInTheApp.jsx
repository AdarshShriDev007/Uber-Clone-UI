import {
    Typography
} from "@mui/material";

import DoMoreInTheAppJson from "../../../../../JsonApi/Products/Ride/DoMoreInTheApp/DoMoreInTheApp.json";

const DoMoreInTheApp = ()=>{
    const design = (
        <>
            <div className="row row-con">
                <Typography component="h4" className="title">
                    {DoMoreInTheAppJson.title}
                </Typography>
                <div className="col-md-6">
                    <div className="d-flex justify-content-between align-items-center arrowMoveCon" style={{border:"1px solid #ddd",width:"100%",padding:"20px"}}>
                        <div className="d-flex flex-column align-items-center justify-content-center" style={{color:"white",backgroundColor:"black",height:"150px",width:"150px"}}>
                            <div>
                                <Typography component="h4" className="bigtext">{DoMoreInTheAppJson.bigtext}</Typography> 
                            </div>
                        </div>
                        <div  style={{paddingLeft:"12px",paddingRight:"17px"}}>
                            <Typography component="h4" className="bold-subtitle-no-padding">{DoMoreInTheAppJson.subtitle}</Typography>
                        </div>
                        <div className="relArrowMove d-flex align-items-center" style={{width:"50px"}}>
                            <span className="material-icons abArrowMove">{DoMoreInTheAppJson.icon}</span>   
                        </div>
                    </div>
                </div>
                <div className="col-md-6"></div>
            </div>
        </>
    );
    return design;
}

export default DoMoreInTheApp;