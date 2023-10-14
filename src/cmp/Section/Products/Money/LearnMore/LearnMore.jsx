import { Typography } from "@mui/material";
import LearnMoreJson from "../../../../../JsonApi/Products/Money/LearnMore/LearnMore.json";

const LearnMore = ()=>{

    const LearnMoreCmp = ({data})=>{
        const design = (
            <>
                <div className="col-md-6">
                    <div>
                        <img src={`../${data.img}`} className="mb-3" width="100%" />
                        <Typography component="h4" className="bold-subtitle">
                            {data.title}
                        </Typography>
                        <Typography component="h4" className="subtitle">
                            {data.subtitle}
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
                    </div>
                </div>
            </>
        );
        return design;
    }

    const design = (
        <>
            <div className="row row-con">
                {
                    LearnMoreJson.map((item)=>{
                        return <LearnMoreCmp data={item} key={item.id} />
                    })
                }  
            </div>
        </>
    );
    return design;
}

export default LearnMore;