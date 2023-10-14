import { Typography } from "@mui/material";

import UberOfferingsJson from "../../../../../JsonApi/Company/OurOfferings/UberOfferings/UberOfferings.json";

const UberOfferings = ()=>{


    const TextListCmp = ({data})=>{
        const design = (
            <>
                <Typography component="h4" className="subtitle">
                    {data.para1}
                </Typography>
                <Typography component="h4" className="subtitle">
                    {data.para2}
                </Typography>
            </>
        );
        return design;
    }

    const ParaListCmp = ({data})=>{
        const design = (
            <>
                <div className="col-md-6">
                    <div>
                        {
                            data.text.map((item)=>{
                                return <TextListCmp data={item} key={item.id} />
                            })
                        } 
                    </div>
                </div>
            </>
        );
        return design;
    }


    const OfferingsCmp = ({data})=>{
        const design = (
            <>
                <div className="col-md-4 mt-5">
                    <div>
                        <img src={"../"+data.img} className="Offerings-icon"/>
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
            <div className="row">
                <div>
                    <Typography component="h4" className="title">
                        {UberOfferingsJson.title}
                    </Typography>
                </div>

                {
                    UberOfferingsJson.paralist.map((item)=>{
                        return <ParaListCmp data={item} key={item.id} />
                    })
                }
            </div>

            <div className="row row-con">
                {
                    UberOfferingsJson.offerings.map((item)=>{
                        return <OfferingsCmp data={item} key={item.id} />
                    })
                }  
            </div>
        </>
    );
    return design;
}

export default UberOfferings;