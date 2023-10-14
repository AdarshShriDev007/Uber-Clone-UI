import { Typography } from "@mui/material";

import GetMoreJson from "../../../../../JsonApi/Products/BikeAndScooters/GetMore/GetMore.json";

const GetMore = ()=>{

    const ButtonCmp = ({data})=>{
        const design = (
            <>
                <div>
                    <button className="hoverBtn mb-3">
                        <Typography className="subtitle-no-padding">
                            {data.name}
                        </Typography>
                    </button>
                </div>
            </>
        );
        return design;
    }

    const ListCmp = ({data})=>{
        const design = (
            <>
                <div className="col-md-4 mb-4">
                    <div>
                        <span className="material-icons icon mb-3">
                            {data.icon}
                        </span>
                        <Typography component="h4" className="bold-subtitle">
                            {data.subtitle}
                        </Typography>
                        <div className="d-flex flex-column ">
                            {
                                data.button.map((item)=>{
                                    return <ButtonCmp data={item} key={item.id} />
                                })
                            }
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
                <div className="col-md-12">
                    <Typography component="h4" className="title">
                        {GetMoreJson.title}
                    </Typography>
                </div>

                {
                    GetMoreJson.list.map((item)=>{
                        return <ListCmp data={item} key={item.id} />
                    })
                }

                

                
            </div>
        </>
    );
    return design;
}

export default GetMore;