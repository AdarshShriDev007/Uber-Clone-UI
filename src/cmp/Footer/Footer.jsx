import { IconButton, Typography, Button } from "@mui/material";
import "./Footer.css";

import {
    Twitter,
    Facebook,
    YouTube,
    LinkedIn,
    Instagram,
    Language,
    LocationOn
} from '@mui/icons-material';

import FooterJson from "../../JsonApi/Footer/Footer.json";

const Footer = ()=>{

    const FooterMenuListCmp = ({data})=>{
        const design = (
            <>
                <li className="footerLi"><Typography><a href="#" className="footerA">{data.title}</a></Typography></li>
            </>
        );
        return design;
    }

    const FooterMenuCmp = ({data})=>{
        const design = (
            <>
                <div className="col-md-3 mb-5">
                    <Typography sx={{fontSize:"17px",fontWeight:"bold"}}>{data.title}</Typography>
                    <nav>
                        <ul className="footerUl">
                            {
                                data.list.map((item)=>{
                                    return <FooterMenuListCmp data={item} key={item.id}/>
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </>
        );
        return design;
    }

    const design = (
        <>
            <div className="FooterCon">
                <div className="row mb-4">
                    <div className="col-md-4">
                        <Typography sx={{fontSize:"22px",fontWeight:"bold"}} className="mb-4">Uber</Typography>
                        <button className="pb-5 FooterVisitBtn"><Typography>Visit Help Center</Typography></button>
                    </div>
                    <div className="col-md-8"></div>
                </div>

                <div className="row mb-5">
                    {
                        FooterJson.map((item)=>{
                            return <FooterMenuCmp data={item} key={item.id} />
                        })
                    }

                      
                </div>

                <div className="row footerUlCon">
                    <div className="col-md-6">
                        <nav >
                            <ul className="footerUl d-flex justify-content-between">
                                <li>
                                    <div style={{marginRight:"0px"}} className="footerSocialIconCon d-flex justify-content-center align-items-center">
                                        <Facebook className="footerSocialIcon"/>
                                    </div>
                                    
                                </li>
                                <li>
                                    <div style={{marginRight:"0px"}} className="footerSocialIconCon d-flex justify-content-center align-items-center">
                                        <Twitter className="footerSocialIcon" />  
                                    </div>  
                                </li>
                                <li>
                                    <div style={{marginRight:"0px"}} className="footerSocialIconCon d-flex justify-content-center align-items-center">
                                        <YouTube className="footerSocialIcon" />
                                    </div>
                                </li>
                                <li>
                                    <div style={{marginRight:"0px"}} className="footerSocialIconCon d-flex justify-content-center align-items-center">
                                        <LinkedIn className="footerSocialIcon" />
                                    </div>
                                </li>
                                <li>
                                    <div style={{marginRight:"0px"}} className="footerSocialIconCon d-flex justify-content-center align-items-center">
                                        <Instagram className="footerSocialIcon" />
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-6">
                        <div>
                        <nav>
                            <ul className="footerUl footerUlbtn d-flex justify-content-end">  
                                <li>
                                    <div style={{marginRight:"60px"}} className="footerLanCon d-flex justify-content-center align-items-center">
                                        <button className="footerLan d-flex justify-content-between align-items-center">
                                            <Language className="footerLanIcon" />
                                            <Typography sx={{fontSize:"14px",ml:"5px",fontWeight:"bold"}}>English</Typography>
                                            
                                        </button>
                                    </div>
                                </li>
                                <li>
                                    <div style={{marginRight:"60px"}} className="footerAddCon d-flex justify-content-center align-items-center">
                                        <button className="footerAdd d-flex justify-content-between align-items-center">
                                            <LocationOn className="footerAddIcon" />
                                            <Typography sx={{fontSize:"14px",ml:"5px",fontWeight:"bold"}}>Delhi NCR</Typography>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    return design;
}

export default Footer;