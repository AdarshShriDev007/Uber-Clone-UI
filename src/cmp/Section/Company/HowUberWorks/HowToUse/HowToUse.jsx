
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import {
    Timeline,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from "@mui/lab";

import { Typography } from "@mui/material";


import HowToUseJson from "../../../../../JsonApi/Company/HowUberWorks/HowToUse/HowToUse.json";
import MediaQuery from "react-responsive";

const HowToUse = ()=>{

    const StepCmp = ({data})=>{
        const design = (
            <>
                <MediaQuery minWidth={992}>
                    <div className="col-md-12" style={{marginTop:"-40px"}}>
                            <Timeline position="alternate">
                                <TimelineItem>
                                        <div className="col-md-4 m-0 p-0">
                                            <TimelineOppositeContent>
                                                <div style={{paddingRight:"30px",paddingBottom:"30px"}}>
                                                    <img src={"../"+data.img} width="100%" />
                                                </div>
                                            </TimelineOppositeContent>
                                        </div>
                                    <TimelineSeparator>
                                    <TimelineDot style={{borderRadius:"0px",padding:"3px"}} color="primary" />
                                    {
                                        data.stepName === "Step 5" ? null : <TimelineConnector sx={{bgcolor:"black",marginTop:"-20px",width:"1px"}} />
                                    }
                                    
                                    </TimelineSeparator>
                                            <div className="col-md-8 m-0 p-0">
                                            <TimelineContent>
                                                <div style={{paddingLeft:"30px",paddingBottom:"30px"}}>
                                                    <Typography style={{marginBottom:"15px",color:"grey"}}>
                                                        {data.stepName}
                                                    </Typography>   
                                                    <Typography component="h4" className="bold-subtitle">
                                                        {data.title}
                                                    </Typography>
                                                    <Typography component="h4" className="subtitle">
                                                        {data.subtitle}
                                                    </Typography>
                                                </div>
                                                </TimelineContent>
                                            </div>
                                </TimelineItem>  
                            </Timeline>
                    </div>
                </MediaQuery>

                <MediaQuery maxWidth={992}>
                    <div className="col-md-12" style={{marginTop:"-40px"}}>
                        <Timeline sx={{
                                [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0,
                                marginBotom: "0px"
                                },
                            }}
                        >
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot style={{borderRadius:"0px",padding:"3px"}} color="primary" />
                                        {
                                            data.stepName === "Step 5" ? null : <TimelineConnector sx={{bgcolor:"black",marginTop:"-20px",width:"1px"}} />
                                        }
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div>
                                        <Typography style={{marginBottom:"15px",color:"grey"}}>
                                            {data.stepName}
                                        </Typography> 
                                        <img src={"../"+data.img} width="100%" style={{marginBottom:"15px"}}/>  
                                        <Typography component="h4" className="bold-subtitle">
                                            {data.title}
                                        </Typography>
                                        <Typography component="h4" className="subtitle">
                                            {data.subtitle}
                                        </Typography>
                                        
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </MediaQuery>
                
            </>
        );
        return design;
    }

    const design = (
        <>
            <div style={{marginTop:"90px"}} className="row row-con">
                <div className="row-con">
                <div className="col-md-8">
                    <Typography component="h4" className="bigtext mb-4">
                        {HowToUseJson.title}
                    </Typography>
                    <Typography component="h4" className="subtitle">
                        {HowToUseJson.subtitle}
                    </Typography>
                </div>
                <div className="col-md-4"></div>
                </div>

                {
                    HowToUseJson.step.map((item)=>{
                        return <StepCmp data={item} key={item.id} />
                    })
                }
            </div>   
        </>
    );
    return design;
}

export default HowToUse;