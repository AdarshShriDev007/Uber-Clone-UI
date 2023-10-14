import {
    Typography 
} from "@mui/material";

import DRSafetyJson from "../../../../JsonApi/Safety/DRSafety/DRSafety.json";

const DRSafety = ()=>{

    const DRSafetyCmp = ({data})=>{
        const design = (
            <>
                <div className="col-md-6 mb-5">
                    <div>
                        <span style={{fontSize:"30px"}} className="material-icons-outlined">
                            {data.icon}
                        </span>
                        <Typography component="h4" className="bold-subtitle">
                            {data.title}
                        </Typography>
                        <Typography className="subtitle">
                            {data.subtitle}
                        </Typography>
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
            <div className="row row-con">
                {
                    DRSafetyJson.map((item)=>{
                        return <DRSafetyCmp data={item} key={item.id} />
                    })
                }   
            </div>
        </>
    );
    return design;
}

export default DRSafety;