
import {
    Typography
} from "@mui/material";

const LastNotice = ({data})=>{
    const design = (
        <>
            <div className="row-con">
                <Typography className="noticetext">
                    {
                        data.notice
                    }
                </Typography>
            </div>
        </>
    );
    return design;
}

export default LastNotice;