import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from "@mui/material";

import {
    Add,
    Remove,
    ExpandMore
} from '@mui/icons-material';

import MissionStatementJson from "../../../../../JsonApi/Company/AboutUs/MissionStatement/MissionStatement.json";

const MissionStatement = ()=>{

    const SubTitleCmp = ({data})=>{
        const design = (
            <>
                <Typography component="h4" className="subtitle">
                    {data.text}               
                </Typography>
            </>
        );
        return design;
    }

    const design = (
        <>
           
                <div className="row row-con">
                    <div className="col-md-12">
                        <Accordion>
                            <AccordionSummary aria-controls="panel1a-content" expandIcon={<ExpandMore />}>
                                <Typography component="h4" sx={{fontSize:"16px",fontWeight:"bold"}}>
                                    {MissionStatementJson.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {
                                    MissionStatementJson.subtitle.map((item)=>{
                                        return <SubTitleCmp data={item} key={item.id} />
                                    })
                                }
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            
        </>
    );
    return design;
}

export default MissionStatement;