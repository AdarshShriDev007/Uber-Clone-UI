import { Typography } from "@mui/material";
import "./SignupTo.css";

import SignupToJson from "../../../../JsonApi/JsonHomepage/SignupTo/SignupTo.json";

const SignupTo = ()=>{

    const SignupToCmp = ({data})=>{
        const design = (
            <>
                <div className="col-md-6 mb-5">
                    <div className="signupToCon" style={{borderBottom:"1px solid black",width:"100%",paddingBottom:"40px"}}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <Typography component="h4" className="signtitle">{data.title}</Typography>
                            </div>
                            <div className="signupToIconCon">
                                <span className="material-icons signupToIcon signicon">{data.icon}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
        return design;
    }

    const design = (
        <>
            <div className="ToCon">
                <div className="row">
                    {
                        SignupToJson.map((item)=>{
                            return <SignupToCmp data={item} key={item.id} />
                        })
                    }
                </div>
            </div>
        </>
    );
    return design;
}

export default SignupTo;  