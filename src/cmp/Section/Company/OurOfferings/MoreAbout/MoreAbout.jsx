import { Typography } from "@mui/material";
import MoreAboutJson from "../../../../../JsonApi/Company/OurOfferings/MoreAbout/MoreAbout.json";

const MoreAbout = ()=>{

    const MoreAboutCmp = ({data})=>{
        const design = (
            <>
                 <div className="col-md-4 mb-5">
                    <div>
                        <span className="material-icons mb-3" style={{fontSize:"30px"}}>
                            {data.icon}
                        </span>
                        <Typography component="h4" className="bold-subtitle">
                            {data.title}
                        </Typography>
                        <Typography component="h4" className="subtitle">
                            {data.subtitle}
                        </Typography>
                        <div>
                            <button style={{paddingLeft:"0px",marginRight:"20px"}} className="hoverButton">
                                <Typography className="hovertext">
                                    {data.button}
                                </Typography>
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
                    MoreAboutJson.map((item)=>{
                        return <MoreAboutCmp data={item} key={item.id} />
                    })
                }
               
            </div>
        </>
    );
    return design;
}

export default MoreAbout;