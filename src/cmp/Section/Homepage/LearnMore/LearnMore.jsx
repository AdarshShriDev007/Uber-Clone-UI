import { Typography } from "@mui/material";
import LearnMoreJson from "../../../../JsonApi/JsonHomepage/LearnMore/LearnMore.json";
import "./LearnMore.css";

const LearnMore = ()=>{

    const LearnMoreCmp = ({data})=>{
        const design = (
            <>
                <div className="col-lg-4 mb-5">
                    <div className="mb-4">
                        <span style={{fontSize:"30px"}} className="material-icons-outlined">{data.icon}</span>
                        <Typography component="h4" className="bold-subtitle">{data.title}</Typography>
                        <Typography className="subtitle">{data.subtitle}</Typography>
                    </div>
                    <div>
                        <button style={{paddingLeft:"0px"}} className="hoverButton">
                            <Typography className="hovertext">{data.button}</Typography>
                            <div className="relcon">
                                <div className="abcon">
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </>
        );
        return design;
    }

    const design = (
        <>
            <div className="LearnCon">
                <div className="row" >
                    {
                        LearnMoreJson.map((item)=>{
                            return <LearnMoreCmp data={item} key={item.id} />
                        })
                    } 
                </div>
            </div>
        </>
    );
    return design;
}

export default LearnMore;