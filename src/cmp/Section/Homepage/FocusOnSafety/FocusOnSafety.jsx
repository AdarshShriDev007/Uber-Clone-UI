
import { 
    Typography,
    Button
} from "@mui/material";
import "./FocusOnSafety.css";

import FocusOnSafetyJson from "../../../../JsonApi/JsonHomepage/FocusOnSafety/FocusOnSafety.json";

import MediaQuery from "react-responsive";

const FocusOnSafety = ()=>{

    const FocusOnSafetyCmp = ({data})=>{
        const design = (
            <>
                <div className="col-lg-6 mb-5">
                    <img src={data.img} width="100%" className="mb-3"/>
                    <div>
                        <Typography component="h4" className="bold-subtitle">{data.title}</Typography>
                        <Typography className="subtitle">{data.subtitle}</Typography>
                    </div>
                    <div>
                        {
                            data.button ? <button style={{paddingLeft:"0px"}} className="hoverButton">
                            <Typography className="hovertext">{data.button}</Typography>
                            <div className="relcon">
                                <div className="abcon">
                                </div>
                            </div>
                        </button> : <><button style={{paddingLeft:"0px",marginRight:"15px"}} className="mb-3 hoverButton">
                                    <Typography className="hovertext">{data.button1}</Typography>
                                    <div className="relcon">
                                        <div className="abcon">
                                        </div>
                                    </div>
                                </button><button style={{paddingLeft:"0px"}} className="hoverButton">
                                        <Typography className="hovertext">{data.button2}</Typography>
                                        <div className="relcon">
                                            <div className="abcon">
                                            </div>
                                        </div>
                                    </button></>
                        }
                        
                    </div>
                </div>
            </>
        );
        return design;
    }

    const design = (
        <>
            
                <div className="FocusCon">
                    <div className="row">
                        <Typography component="h4" className="title">Focused on safety, wherever you go</Typography>
                        {
                            FocusOnSafetyJson.map((item)=>{
                                return <FocusOnSafetyCmp data={item} key={item.id} />
                            })
                        }
                    </div>
                </div>
            
        </>
    );
    return design;
}

export default FocusOnSafety;
