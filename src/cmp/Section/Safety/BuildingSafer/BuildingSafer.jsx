import { Typography } from "@mui/material";
import BuildingSaferJson from "../../../../JsonApi/Safety/BuildingSafer/BuildingSafer.json";

const BuildingSafer = ()=>{

    const BuildingSaferCmp = ({data})=>{
        const design = (
            <>
                <div className="col-md-6 mb-5">
                    <div>
                        <img src={data.img} width="100%" style={{marginBottom:"18px"}} />
                        <div className="mb-5">
                            <Typography component="h4" className="bold-subtitle">
                                {data.title}
                            </Typography>
                            <Typography component="h4" className="subtitle">
                                {data.subtitle}
                            </Typography>
                        </div>
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
                        Building safer journeys for everyone
                    </Typography>
                </div>
                {
                    BuildingSaferJson.map((item)=>{
                        return <BuildingSaferCmp data={item} key={item.id} />
                    })
                }   
            </div>
        </>
    );
    return design;
}

export default BuildingSafer;