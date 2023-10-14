import {
    Typography
} from "@mui/material";

const SignupTo = ({data})=>{
    const design = (
        <>
            <div className="row row-con">
                <div className="col-md-6">
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
            </div>
        </>
    );
    return design;
}

export default SignupTo;