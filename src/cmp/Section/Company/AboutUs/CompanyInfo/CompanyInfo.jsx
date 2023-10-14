import { Typography } from "@mui/material";

import CompanyInfoJson from "../../../../../JsonApi/Company/AboutUs/CompanyInfo/CompanyInfo.json";

const CompanyInfo = ()=>{

    const CompanyInfoCmp = ({data})=>{
        const design = (
            <>
                <div className="col-md-4 mb-5 d-flex flex-column">
                    <div className="mb-3">
                        <img src={"../"+data.img} width="100%" />
                    </div>
                    <div className="mb-4">
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
            </>
        );
        return design;
    }

    const design = (
        <>
            
                <div className="row row-con">
                    <div>
                        <Typography component="h4" className="title">
                            Company info
                        </Typography>
                    </div>
                    {
                        CompanyInfoJson.map((item)=>{
                            return <CompanyInfoCmp data={item} key={item.id} />
                        })
                    }  
                </div>
            
        </>
    );
    return design;
}

export default CompanyInfo;