import { Typography } from "@mui/material";
import HelpingToKeepJson from "../../../../JsonApi/Safety/HelpingToKeep/HelpingToKeep.json"

const HelpingToKeep = ()=>{

    const HelpingToKeepBtn = ({data})=>{
        const design = (
            <>
                <button style={{paddingLeft:"0px",marginRight:"20px"}} className="hoverButton mb-3">
                    <Typography className="hovertext">{data.btntxt}</Typography>
                    <div className="relcon">
                        <div className="abcon">
                        </div>
                    </div>
                </button>
            </>
        );
        return design;
    }

    const design = (
        <>
            <div className="row row-con">
                <div className="col-lg-8">
                    <div className="mb-5">
                        <Typography component="h4" className="title">
                            {HelpingToKeepJson.title}
                        </Typography>
                        <Typography component="h4" className="subtitle">
                            {HelpingToKeepJson.subtitle}
                        </Typography>
                    </div>
                    <div className="HelpingToKeepBtn">
                        {
                            HelpingToKeepJson.buttons.map((item)=>{
                                return <HelpingToKeepBtn data={item} key={item.id} />
                            })
                        }
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </>
    );
    return design;
}

export default HelpingToKeep;