import { IconButton, Typography } from "@mui/material";
import "./SafetyRulesForDR.css";
import Pagination from '@mui/material/Pagination';
import SafetyRulesForDRJson from "../../../../JsonApi/Safety/SafetyRulesForDR/SafetyRulesForDR.json";

import {
    useEffect,
    useState
} from "react";

const SafetyRulesForDR = ()=>{
    
    const [defaultcount,setdefaultcount] = useState(1);
    const [disable,setDisabled] = useState(true);

    const prevhandle = ()=>{
        let prevBtn = document.querySelector(".prev-btn");
        let box = document.querySelector(".SafetyRulesSubCon");
        if(!prevBtn.disabled)
        { 
            let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft - width;
            let total = box.childElementCount / 3;
            let last = total-1;
            setdefaultcount(last);  
        }
            
    }

    const nexthandle = ()=>{
        let nextBtn = document.querySelector(".next-btn");
        let prevBtn = document.querySelector(".prev-btn");
        let box = document.querySelector(".SafetyRulesSubCon");
        if(!nextBtn.disabled)
        {    
            let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft + width; 
            let total = box.childElementCount / 3;
            let last = total++;
            setdefaultcount(last);
            
             
        }
        
    }


    const defaultcountHandle = ()=>{
        let totalcount = document.querySelector(".totalcount");
        let box = document.querySelector(".SafetyRulesSubCon");
        let prevBtn = document.querySelector(".prev-btn");
        let total = box.childElementCount / 3;
        totalcount.innerHTML = total;
        

    }

   

    useEffect(()=>{
        defaultcountHandle()
    });

    
 

    const SafetyRulesForDRCmp = ({data})=>{
        const design = (
            <>
                <div style={{minWidth:"33.33%",maxWidth:"33.33%"}}>
                   <div style={{paddingRight:"20px"}}>
                        <img src={data.icon} className="mb-3" />
                        <Typography component="h4" sx={{fontSize:"18px",fontWeight:"bold",mb:1}}>
                            {data.title}
                        </Typography>
                        <Typography component="h4" sx={{fontSize:"16px"}}>
                            {data.subtitle}
                        </Typography>
                        
                   </div>
                </div>
            </>
        );
        return design;
    }


 

    const design = (
        <>
            <div className="SafetyRulesCon">
                <div className="SafetyRulesSubCon">
                        {
                            SafetyRulesForDRJson.map((item)=>{
                                return <SafetyRulesForDRCmp data={item} key={item.id} />
                            })
                        }
                </div> 
            </div>

            <div className="w-100 d-flex justify-content-end align-items-center">
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

export default SafetyRulesForDR;