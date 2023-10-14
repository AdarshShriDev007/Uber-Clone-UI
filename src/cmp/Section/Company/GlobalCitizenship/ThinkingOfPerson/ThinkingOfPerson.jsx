import {
    Typography
} from "@mui/material";

const ThinkingOfPerson = ({data})=>{
    const design = (
        <>
                <div className="row row-con">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 col-con">
                        <div>
                            <Typography style={{textAlign:"center"}} component="h4" className="bold-subtitle">
                                {data.title}
                            </Typography>
                            <Typography style={{textAlign:"center"}} component="h4" className="subtitle">
                                {data.subtitle}
                            </Typography>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
        </>
    );
    return design;
}

export default ThinkingOfPerson;