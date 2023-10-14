

import {
    Typography,
    Tab,
    Tabs,
    Box,
    Button
} from '@mui/material';

import {
    Children,
    useState,
    useEffect
} from "react";

import "./WaysToRide.css";

import WaysToRideJson from "../../../../../JsonApi/Products/Ride/WaysToRide/WaysToRide.json";

const WaysToRide = ()=>{


    const [value,setValue] = useState(0);
    const [defaultcount,setdefaultcount] = useState(1);
    const [disable,setDisabled] = useState(true);

    const prevhandle = ()=>{
        let box = document.querySelector(".WaysToRideSubCon");
        if(box.childElementCount > 3)
        {
        let prevBtn = document.querySelector(".prev-btn");
        let nextBtn = document.querySelector(".next-btn");
        
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        let total = box.childElementCount / 3;
        let last = total-1;
        setdefaultcount(last);
        }         
    }

    const nexthandle = ()=>{
        let box = document.querySelector(".WaysToRideSubCon");
        if(box.childElementCount > 3)
        {
        let nextBtn = document.querySelector(".next-btn");
        let prevBtn = document.querySelector(".prev-btn");
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width; 
        let total = box.childElementCount / 3;
        let last = total++;
        setdefaultcount(last);  
        } 
    }

 

    const handleTabs = (event,val)=>{
        console.log(val);
        setValue(val);
    }

    const TabPanel = (props)=>{
        const {children,value,index} = props;
        const design = (
            <>
                <div>
                    {
                        value === index && (
                            <div>{children}</div>
                        )
                    }
                </div>
            </>
        );
        return design;
    }

    const TabPanelData = ({data})=>{
        const design = (
            <>
                <div style={{ minWidth: "33.33%", maxWidth: "33.33%" }}>
                    <div style={{ paddingRight: "20px" }}>
                        <img src={`../${data.img}`} className="mb-3" />
                            <div className='d-flex'>
                                <Typography component="h4" className="bold-subtitle">
                                    {data.title}
                                </Typography>
                                <div className='number-con'>
                                    <small><Typography sx={{fontSize:"12px",fontWeight:"bold"}}>{data.number}</Typography></small>
                                </div>
                            </div>
                            <Typography component="h4" className="subtitle">
                                {data.subtitle}
                            </Typography>

                    </div>
                </div>
            </>
        );
        return design;
    }

    const TabPanelCmp = ({data})=>{
        const design = (
            <>
                <TabPanel value={value} index={data.indexVal}>
                
                    <div className="WaysToRideCon">
                            <div className="WaysToRideSubCon">
                                {
                                    data.tabpanel.map((item)=>{
                                        return <TabPanelData data={item} key={item.id} />
                                    })
                                }
                            </div>
                        </div>
                        {
                            data.tab === "Economy" ? <div className="w-100 d-flex justify-content-end align-items-center mt-5 mb-5">
                            <div className="d-flex" style={{ marginTop: "2px", marginRight: "8px" }}>
                                <Typography className="runcount" style={{ fontSize: "14px", fontWeight: "bold" }}>{defaultcount}</Typography>
                                <Typography style={{ fontSize: "14px", fontWeight: "bold" }}>/2</Typography>
                                <Typography className="totalcount" style={{ fontSize: "14px", fontWeight: "bold" }}></Typography>
                            </div>
                            <div className="d-flex">
                                <button className="prev-btn">
                                    <span className="material-icons" style={{ fontWeight: "bold" }} onClick={prevhandle}>
                                        keyboard_arrow_left
                                    </span>
                                </button>

                                <button className=" next-btn">
                                    <span className="material-icons" style={{ fontWeight: "bold" }} onClick={nexthandle}>
                                        keyboard_arrow_right
                                    </span>
                                </button>
                            </div>
                        </div> : null
                        }
                
                
                </TabPanel>
            </>
        );
        return design;
    }
   
    const design = (
        <>
           <div className='row-con'>
                <div width="100%">
                    <Typography className='title'>
                        {WaysToRideJson.title}
                    </Typography>
                </div>
                <Box sx={{borderBottom: "5px solid #ddd",height:"48px"}}>
                    <Tabs sx={{"& button":{color:"black"}}} TabIndicatorProps={{sx: {height: 5}}}  value={value} onChange={handleTabs}>
                        
                        <Tab sx={{fontWeight:"bold",fontSize:"13px"}} label="Popular" />
                        <Tab sx={{fontWeight:"bold",fontSize:"13px"}} label="Economy" />
                    </Tabs>
                </Box>

                {
                    WaysToRideJson.tabs.map((item)=>{
                        return <TabPanelCmp data={item} key={item.id} />
                    })
                }
                
                
                
                
           </div>
        </>
    );
    return design;
}

export default WaysToRide;