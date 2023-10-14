import { Typography } from "@mui/material";
import HelpingBusinessesJson from "../../../../../JsonApi/Company/OurOfferings/HelpingBusinesses/HelpingBusinesses.json";

const HelpingBusinesses = ()=>{

    const HelpingBusinessesCmp = ({data})=>{
        const design = (
            <>
                <div className="col-md-6 mb-5">
                    <div className="mb-4">
                        <img src={"../"+data.img} width="100%" />
                    </div>
                    <div>
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
                <div>
                    <Typography component="h4" className="title">
                        {HelpingBusinessesJson.title}
                    </Typography>
                </div>
                {
                    HelpingBusinessesJson.list.map((item)=>{
                        return <HelpingBusinessesCmp data={item} key={item.id} />
                    })
                }
                
            </div>
        </>
    );
    return design;
}

export default HelpingBusinesses;