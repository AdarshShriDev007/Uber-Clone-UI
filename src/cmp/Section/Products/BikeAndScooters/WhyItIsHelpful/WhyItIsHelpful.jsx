import { Typography } from "@mui/material";

import WhyItIsHelpfulJson from "../../../../../JsonApi/Products/BikeAndScooters/WhyItIsHelpful/WhyItIsHelpful.json";

const WhyItIsHelpful = ()=>{

    const WhyItIsHelpfulCmp = ({data})=>{
        const design = (
            <>
                <div className="col-md-4">
                    <Typography component="h4" className="bold-subtitle">
                        {data.title}
                    </Typography>
                    <Typography component="h4" className="subtitle">
                        {data.subtitle}
                    </Typography>
                </div>
            </>
        );
        return design;
    }

    const design = (
        <>
            <div className="row row-con">
                <div className="col-md-12">
                    <Typography component="h4" className="title">
                        {WhyItIsHelpfulJson.title}
                    </Typography>
                </div>
                {
                    WhyItIsHelpfulJson.list.map((item)=>{
                        return <WhyItIsHelpfulCmp data={item} key={item.id} />
                    })
                }
            </div>
        </>
    );
    return design;
}

export default WhyItIsHelpful;