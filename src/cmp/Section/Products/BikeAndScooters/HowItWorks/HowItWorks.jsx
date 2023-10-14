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

import HowItWorksJson from "../../../../../JsonApi/Products/BikeAndScooters/HowItWorks/HowItWorks.json";

import MediaQuery from "react-responsive";


const HowItWorks = ()=>{


    const StepCmp = ({data})=>{
        const design = (
            <>
                <MediaQuery minWidth={992}>
                    <div className="col-md-12">
                            <Timeline position="alternate">
                                <TimelineItem>
                                        <div className="col-md-4">
                                            <TimelineOppositeContent>
                                                <div style={{padding:"6px 30px 30px 0px"}}>
                                                    <img src={"../"+data.img} width="100%" />
                                                </div>
                                            </TimelineOppositeContent>
                                        </div>
                                    <TimelineSeparator>
                                    <TimelineDot style={{borderRadius:"0px",padding:"3px"}} color="primary" />
                                    {
                                        data.title === "Strap on a helmet and go" ? null : <TimelineConnector sx={{bgcolor:"black",marginTop:"-20px",marginBottom:"-40px",width:"1px"}} />
                                    }
                                    
                                    </TimelineSeparator>
                                            <div className="col-md-8">
                                            <TimelineContent>
                                                <div style={{paddingLeft:"30px",paddingBottom:"30px"}}>
                                                    <Typography className="bold-subtitle">
                                                        {
                                                            data.title
                                                        }
                                                    </Typography>   
                                                    <Typography component="h4" className="subtitle">
                                                        {data.beforebold} <b>{data.bold}</b> {data.subtitle}
                                                    </Typography>
                                                    
                                                </div>
                                                </TimelineContent>
                                            </div>
                                </TimelineItem>  
                            </Timeline>
                    </div>
                </MediaQuery>

                <MediaQuery maxWidth={992}>
                    <div className="col-md-12">
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
                                                data.title === "Strap on a helmet and go" ? null : <TimelineConnector sx={{bgcolor:"black",marginTop:"-20px",marginBottom:"-40px",width:"1px"}} />
                                            }
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <div style={{paddingLeft:"30px",paddingBottom:"30px",paddingTop:"7px"}}>
                                            <img src={"../"+data.img} width="100%" className="mb-3" />
                                            <Typography className="bold-subtitle">
                                                {
                                                    data.title
                                                }
                                            </Typography>   
                                            <Typography component="h4" className="subtitle">
                                                {data.beforebold} <b>{data.bold}</b> {data.subtitle}
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
             <div className="row row-con">
                <div className="col-md-12">
                    <MediaQuery minWidth={992}>
                        <Typography component="h4" style={{paddingLeft:"60px"}} className="title">
                            {HowItWorksJson.title}
                        </Typography>
                    </MediaQuery>

                    <MediaQuery maxWidth={992}>
                        <Typography component="h4" className="title">
                            {HowItWorksJson.title}
                        </Typography>
                    </MediaQuery>
                    
                </div>

                {
                    HowItWorksJson.step.map((item)=>{
                        return <StepCmp data={item} key={item.id} />
                    })
                }
            </div> 
        </>
    );
    return design;
}

export default HowItWorks;