import { 
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails
 } from "@mui/material";

 import {
    ExpandMore
 } from "@mui/icons-material";

 import AskedQuestionsJson from "../../../../../JsonApi/Products/Ride/AskedQuestions/AskedQuestions.json";

const AskedQuestions = ()=>{

    const AskedQuestionsCmp = ({data})=>{
        const design = (
            <>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore />} 
                    >
                        <Typography className="bold-subtitle-no-padding">{data.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="subtitle">
                            {data.subtitle} <b>{data.textBoldText}</b> <btn className="textBtnText">{data.textBtnText}</btn>
                        </Typography>
                        <div>
                            <button style={{paddingLeft:"0px",marginRight:"20px"}} className="hoverButton">
                                <Typography className="hovertext">{data.button}</Typography>
                                <div className="relcon">
                                    <div className="abcon">
                                    </div>
                                </div>
                            </button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </>
        );
        return design;
    }

    const design = (
        <>
            <div className="row row-con">
                <div className="col-md-12">
                    <Typography component="h4" className="title">
                        {AskedQuestionsJson.title}
                    </Typography>
                </div>
                <div className="col-md-12">
                    {
                        AskedQuestionsJson.accordion.map((item)=>{
                            return <AskedQuestionsCmp data={item} key={item.id} />
                        })
                    }
                </div>
            </div>
        </>
    );
    return design;
}

export default AskedQuestions;