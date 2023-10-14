import { Typography } from "@mui/material";
import DownloadAppsJson from "../../../../JsonApi/JsonHomepage/DownloadApps/DownloadApps.json";
import "./DownloadApps.css";

const DownloadApps = ()=>{

    const DownloadAppsCmp = ({data})=>{
        const design = (
            <>
                <div className="col-lg-6 mb-5">
                    <div className="d-flex justify-content-between align-items-center arrowMoveCon" style={{border:"1px solid #ddd",width:"100%",padding:"20px"}}>
                        <div className="d-flex flex-row align-items-center">
                            <div className="d-flex flex-column align-items-center justify-content-center" style={{color:"white",backgroundColor:"black",height:"150px",width:"150px"}}>
                                <div className="p-3">
                                    <Typography component="h4" className="bigtext">{data.name}</Typography>
                                    {
                                        data.bigicon ? <div><span className="material-icons" style={{fontSize:"50px"}}>{data.icon}</span></div> : null
                                    }
                                </div>
                            </div>
                            <div>
                                
                            </div>
                            <div style={{paddingLeft:"12px",paddingRight:"17px"}}>
                                <Typography component="h4" className="bold-subtitle-no-padding">{data.title}</Typography>
                            </div>
                        </div>
                        
                        <div className="relArrowMove d-flex align-items-center" style={{width:"50px"}}>
                            <span className="material-icons abArrowMove">{data.icon}</span>   
                        </div>
                    </div>
                </div>
            </>
        );
        return design;
    }

    const design = (
        <>
            <div className="AppsCon">
                <div className="row">
                    <Typography component="h4" className="title">There’s more to love in the apps</Typography>
                    {
                        DownloadAppsJson.map((item)=>{
                            return <DownloadAppsCmp data={item} key={item.id} />
                        })
                    }
                </div>
            </div>
        </>
    );
    return design;
}

export default DownloadApps;