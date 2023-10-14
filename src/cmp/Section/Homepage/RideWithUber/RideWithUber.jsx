import { 
    IconButton,
    Typography
} from "@mui/material";
import "./RideWithUber.css";

import {
    useState
} from "react";

import contentOfRideJson from "../../../../JsonApi/JsonHomepage/RideWithUber/RideWithUber.json";
import MediaQuery from "react-responsive";

const RideWithUber = ()=>{ 

const ContentOfRide = ({data})=>{ 
        const design = (
            <>
                <div style={{cursor:"pointer",marginBottom:"70px"}} className="col-lg-6 d-flex justify-content-between align-items-center arrowMoveCon">
                    <div style={{marginRight:"20px"}}>
                        <img src={data.img} width="150px" />
                    </div>
                    <div style={{width:"100%"}}>
                        <Typography component="h4" className="bold-subtitle">{data.title}</Typography>
                        <Typography className="subtitle">{data.subtitle}</Typography>
                    </div>
                    <div className="relArrowMove" style={{width:"100px"}}>  
                        <span className="material-icons abArrowMove">{data.icon}</span>   
                    </div>
                </div>
                
            </>
        );
        return design;
    }

    const design = (
        <>
                <div className="RideWithCon">
                    <div className="row">
                        <Typography component="h4" className="title">Ride with Uber</Typography>
                        {
                            contentOfRideJson.map((item,index)=>{
                                item.index = index;
                                return <ContentOfRide data={item} key={item.id} />
                            })
                        }    
                    </div>
                </div>
        </>
    );
    return design;
}

export default RideWithUber;