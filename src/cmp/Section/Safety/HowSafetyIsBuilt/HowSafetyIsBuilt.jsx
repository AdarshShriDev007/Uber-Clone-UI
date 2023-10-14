import { Typography } from "@mui/material";
import HowSafetyIsBuiltJson from "../../../../JsonApi/Safety/HowSafetyIsBuilt/HowSafetyIsBuilt.json";

const HowSafetyIsBuilt = ()=>{

    const HowSafetyIsBuiltCmp = ({data})=>{
        const design = (
            <>
                <div className="col-md-4 mb-3">
                    <div>
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
        <div className="row row-con">
            <div>
                <Typography component="h4" className="title">
                    How safety is built into your experience
                </Typography>
            </div>
            {
                HowSafetyIsBuiltJson.map((item)=>{
                    return <HowSafetyIsBuiltCmp data={item} key={item.id} />
                })
            }
        </div>
    );
    return design;
}

export default HowSafetyIsBuilt;