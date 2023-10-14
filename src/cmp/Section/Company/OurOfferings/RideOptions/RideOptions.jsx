import { Typography } from "@mui/material";
import "./RideOptions.css";

import {
    useEffect,
    useState
} from "react";


import RideOptionsJson from "../../../../../JsonApi/Company/OurOfferings/RideOptions/RideOptions.json";

const RideOptions = ()=>{


    const [defaultcount,setdefaultcount] = useState(1);
    const [disable,setDisabled] = useState(true);

    const prevhandle = ()=>{
        let prevBtn = document.querySelector(".prev-btn");
        let nextBtn = document.querySelector(".next-btn");
        let box = document.querySelector(".RideOptionSubCon");
        
            let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft - width;
            let total = box.childElementCount / 3;
            let last = total-1;
            setdefaultcount(last);         
    }

    const nexthandle = ()=>{
        let nextBtn = document.querySelector(".next-btn");
        let prevBtn = document.querySelector(".prev-btn");
        let box = document.querySelector(".RideOptionSubCon");
        
            let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft + width; 
            let total = box.childElementCount / 3;
            let last = total++;
            setdefaultcount(last);   
    }


    const defaultcountHandle = ()=>{
        let nextBtn = document.querySelector(".next-btn");
        let totalcount = document.querySelector(".totalcount");
        let box = document.querySelector(".RideOptionSubCon");
        let prevBtn = document.querySelector(".prev-btn");
        let total = box.childElementCount / 3;
        totalcount.innerHTML = total;
    }

   

    useEffect(()=>{
        defaultcountHandle()
    });

    const RideOptionsCmp = ({data})=>{
        const design = (
            <>
                <div style={{minWidth:"33.33%",maxWidth:"33.33%"}}>
                   <div style={{paddingRight:"20px"}}>
                        <img src={"../"+data.img} className="mb-3" />
                        <Typography component="h4" className="bold-subtitle">
                            {data.title}
                        </Typography>
                        <Typography component="h4" className="subtitle">
                            {data.subtitle}
                        </Typography>
                        <div>
                            <button style={{paddingLeft:"0px",marginRight:"20px"}} className="hoverButton">
                                <Typography>
                                    {data.button}
                                </Typography>
                                <div className="relcon">
                                    <div className="abcon">
                                    </div>
                                </div>
                            </button>
                        </div>
                   </div>
                </div>
            </>
        );
        return design;
    }

    const design = (
        <>
            <div className="row mb-4">
                <div className="col-md-8">
                    <div>
                        <Typography component="h4" className="title">
                        Uber's most popular ride options
                        </Typography>
                        <Typography component="h4" className="subtitle">
                        Request a ride, hop in, and go.
                        </Typography>
                        <div>
                            <button style={{paddingLeft:"0px",marginRight:"20px"}} className="hoverButton">
                                <Typography>
                                    Download the app
                                </Typography>
                                <div className="relcon">
                                    <div className="abcon">
                                    </div>
                                </div>
                            </button>
                            <button style={{paddingLeft:"0px",marginRight:"20px"}} className="hoverButton">
                                <Typography>
                                    See more ride options
                                </Typography>
                                <div className="relcon">
                                    <div className="abcon">
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>


            <div className="RideOptionsCon">
                <div className="RideOptionSubCon">
                        {
                            RideOptionsJson.map((item)=>{
                                return <RideOptionsCmp data={item} key={item.id} />
                            })
                        }
                </div> 
            </div>

            <div className="w-100 d-flex justify-content-end align-items-center mt-5 mb-5" >
                <div className="d-flex" style={{marginTop:"2px",marginRight:"8px"}}>
                    <Typography className="runcount" style={{fontSize:"14px",fontWeight:"bold"}}>{defaultcount}</Typography>
                    <Typography style={{fontSize:"14px",fontWeight:"bold"}}>/</Typography>
                    <Typography className="totalcount" style={{fontSize:"14px",fontWeight:"bold"}}></Typography>
                </div>
                <div className="d-flex"> 
                        <button className="prev-btn">
                            <span className="material-icons" style={{fontWeight:"bold"}} onClick={prevhandle}>
                                keyboard_arrow_left
                            </span>
                        </button>
                        
                        <button className=" next-btn">
                            <span className="material-icons" style={{fontWeight:"bold"}} onClick={nexthandle}>
                                keyboard_arrow_right
                            </span>
                        </button>
                    
                   
                </div>
            </div>
        </>
    );
    return design;
}

export default RideOptions;