import {
    Typography
} from "@mui/material";

import YourSafetyJson from "../../../../../JsonApi/Products/Ride/YourSafety/YourSafety.json";

const YourSafety = ()=>{

    const YourSafetyCmp = ({data})=>{
        const design = (
            <>
                <div className="col-md-4">
                    <div>
                        <img src={`../${data.img}`} className="blue-icon"/>
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

                <div className="col-md-12">
                    <div>
                        <Typography component="h4" className="title">
                            {YourSafetyJson.title}
                        </Typography>
                        <Typography component="h4" className="subtitle">
                            {YourSafetyJson.subtitle}
                        </Typography>
                    </div>
                </div>

                {
                    YourSafetyJson.list.map((item)=>{
                        return <YourSafetyCmp data={item} key={item.id} />
                    })
                }

               

                <div className="col-md-4">
                    <div>
                        <button style={{paddingLeft:"0px",marginRight:"20px"}} className="hoverButton">
                            <Typography className="hovertext">
                                {YourSafetyJson.button}
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

export default YourSafety;