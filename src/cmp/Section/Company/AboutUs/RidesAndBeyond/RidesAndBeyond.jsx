import {
    Typography
} from "@mui/material";

import RidesAndBeyondJson from "../../../../../JsonApi/Company/AboutUs/RidesAndBeyond/RidesAndBeyond.json";

const RidesAndBeyond = ()=>{

    const ButtonsCmp = ({data})=>{
        const design = (
            <>
                <button style={{paddingLeft:"0px",marginRight:"20px"}} className="hoverButton mb-3">
                    <Typography className="hovertext">{data.text}</Typography>
                    <div className="relcon">
                        <div className="abcon">
                        </div>
                    </div>
                </button>
            </>
        );
        return design;
    }

    const design = (
        <>
            
                <div className="row row-con">
                    <div className="col-lg-6 d-flex align-items-center">
                        <img src={"../"+RidesAndBeyondJson.img} width="100%" className="mb-3" />
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 d-flex flex-column justify-content-center">
                        <div className="mb-4">
                            <Typography component="h4" className="title">
                                {RidesAndBeyondJson.title}
                            </Typography>
                            <Typography component="h4" className="subtitle">
                                {RidesAndBeyondJson.subtitle}
                            </Typography>
                        </div>
                        <div>
                            {
                                RidesAndBeyondJson.buttons.map((item)=>{
                                    return <ButtonsCmp data={item} key={item.id} />
                                })
                            }
                        </div>

                    </div>
                </div>
        </>
    );
    return design;
}

export default RidesAndBeyond;