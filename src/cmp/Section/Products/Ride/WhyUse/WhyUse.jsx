import { Typography } from "@mui/material";
import WhyUseJson from "../../../../../JsonApi/Products/Ride/WhyUse/WhyUse.json";

import MediaQuery from "react-responsive";

const WhyUse = ()=>{

    const WhyUseCmp = ({data})=>{
        const design = (
            <>
                <div className="col-md-4">
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
                        
                    </div>
                </div>
            </>
        );
        return design;
    }

    const design = (
        <>
            <div className="row row-con">
                <div className="col-md-12 mb-5">
                    <div>
                        <Typography component="h4" className="title">
                            {WhyUseJson.title}
                        </Typography>
                        <img src={`../${WhyUseJson.img}`}/>
                    </div>
                </div>

                {
                    WhyUseJson.list.map((item)=>{
                        return <WhyUseCmp data={item} key={item.id} />
                    })
                }

                <div className="col-md-4">
                    <div>
                        <button style={{paddingLeft:"0px",marginRight:"20px"}} className="hoverButton">
                            <Typography className="hovertext">
                                {WhyUseJson.button}
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

export default WhyUse;