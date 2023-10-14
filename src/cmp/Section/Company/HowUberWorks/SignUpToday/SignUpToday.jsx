import { Typography } from "@mui/material";

import SignUpTodayJson from "../../../../../JsonApi/Company/HowUberWorks/SignUpToday/SignUpToday.json";

const SignUpToday = ()=>{

    const ButtonCmp = ({data})=>{
        const design = (
            <>
                 <button className="black-btn mb-3" style={{marginRight:"20px"}}>
                    <Typography className="black-btn-text">
                        {data.text}
                    </Typography>
                </button>
                            
            </>
        );
        return design;
    }

    const design = (
        <>
            <div className="row row-con">
                <div className="col-md-8 col-con">
                    <div>
                        <Typography component="h4" className="title">
                            {SignUpTodayJson.title} 
                        </Typography>
                        <Typography component="h4" className="subtitle">
                            {SignUpTodayJson.subtitle}
                        </Typography>
                        <div>
                            {
                                SignUpTodayJson.button.map((item)=>{
                                    return <ButtonCmp data={item} key={item.id} />
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </>
    );
    return design;
}

export default SignUpToday;