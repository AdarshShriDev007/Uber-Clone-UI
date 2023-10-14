import {
    Stack,
    Button,
    AppBar,
    Toolbar,
    Typography,
    Menu,
    MenuItem,
    Modal,
    Box,
    IconButton,
} from "@mui/material";

import {
  Link
} from "react-router-dom";

import Brand from "../../JsonApi/Brand";
import NavbarMenus from "../../JsonApi/NavbarMenus";
import "./Navbar.css";

import MediaQuery from "react-responsive";


import {
    useState
} from "react";
import { DisplaySettingsOutlined, DoNotTouch } from "@mui/icons-material";

const ITEM_HEIGHT = 48;
const Navbar = ()=>{

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const [anchorElMob, setAnchorElMob] = useState(null);
    const openMob = Boolean(anchorElMob);

    const [drag,setDrag] = useState("drag_handle");
    const [display,setDisplay] = useState({
      display : "none"
    });

    const [anchorElScroll, setAnchorElScroll] = useState(null);
    const openScroll = Boolean(anchorElScroll);
    
    const [icon,setIcon] = useState("expand_more");
    const [MobIcon,setMobIcon] = useState("chevron_right");

    const handleMenuOpen = (event)=>{
        return (
          setAnchorEl(event.currentTarget),
          setIcon("expand_less")
        );
    } 
    const handleMenuClose = ()=> {
        return (
            setAnchorEl(null),
            setIcon("expand_more")
        ); 
    }

    const handleMenuOpenMob = (event)=>{
      return (
        setAnchorElMob(event.currentTarget),
        setMobIcon("chevron_left")
      );
  } 
    const handleMenuCloseMob = ()=> {
        return (
            setAnchorElMob(null),
            setMobIcon("chevron_right")
        ); 
    }

    const handleMenuOpenScroll = (event)=>{
      return (
        setAnchorElScroll(event.currentTarget)
      );
    } 

    const handleMenuCloseScroll = ()=> {
      return (
          setAnchorElScroll(null)
      ); 
    }


      const NormalMenu = ({ data }) => {
        const design = (
          <>
              <Button
                onClick={closeDrag}
                component={Link}
                to={data.url}
                className={
                data.label === "Sign up"
                  ? "text-capitalize signup-btn text-dark bg-light"
                  : "text-capitalize normalMenu-btn"
                }
                sx={{ fontSize: "13px", fontWeight: "normal", mx: "3px",color:"white" }}
              >
                {data.label}
              </Button>
          </>
        );
        return design;
      };


    const handleDrag = ()=>{
        const mob2Appbarcon = document.querySelector(".mob-2Appbar-con");
        const displayItem = mob2Appbarcon.style.display;
        if(displayItem === "none")
        {
          return (
            setDisplay({
              display : "block"
            }),
            setDrag("close")
          );
        }
        else{
          return (
            setDisplay({
              display : "none"
            }),
            setDrag("drag_handle")
          );
        }
    }

    const closeDrag = ()=>{
      return (
        setDisplay({
          display : "none"
        }),
        setDrag("drag_handle")
      );
    }

    const design = (
        <>
            <Stack>
              <MediaQuery minWidth={992}>
                <AppBar sx={{px:4,height:"65px"}} position="static" className="bg-black shadow-none" enableColorOnDark>
                    <Toolbar className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between align-items-center">   
                            <Typography className="brand-name" component={Link} to={Brand.url} variant="h4" sx={{
                                    color: "white",
                                    textDecoration : "none",
                                    fontSize:"22px",
                                    fontWeight:"normal",
                                    mr: 3
                                }}>{Brand.name}</Typography>

                            {
                                NavbarMenus.map((item)=>{
                                    if(item.dropdown)
                                    {
                                        if(item.position === "left")
                                        {
                                          return (
                                            <>
                                              <Button
                                                color="inherit"
                                                onClick={handleMenuOpen}
                                                className="text-capitalize dropdown-btn"
                                                sx={{ fontSize: "13px", fontWeight: "normal" }}
                                              >
                                                {item.label}&nbsp;
                                                <span className="material-icons-outlined" style={{ fontSize: "17px" }}>
                                                  {icon}
                                                </span>
                                              </Button>
                                              <Menu
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleMenuClose}
                                                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                                                transformOrigin={{ vertical: "top", horizontal: "left" }}
                                                sx={{mt:"15px"}}
                                                
                                                PaperProps={{
                                                  style: {
                                                    
                                                    width: '20ch'
                                                  },
                                                }}
                                              >
                                                {item.dropdownMenu.map((item) => (
                                                  <MenuItem
                                                    className="dropdownItem-btn"
                                                    onClick={handleMenuClose}
                                                    component={Link}
                                                    to={item.url}
                                                    key={item.id}
                                                  >
                                                    {item.label}
                                                  </MenuItem>
                                                ))}
                                              </Menu>
                                            </>
                                          );
                                        }
                                    }
                                    else{
                                        if(item.position === "left")
                                        { 
                                            return <NormalMenu data={item} key={item.id} />   
                                        }
                                        
                                    }    
                                })
                            } 
                        </div>

                        <div>
                                {
                                    NavbarMenus.map((item)=>{
                                        if(item.position === "right")
                                        {
                                          if(item.dropdown)
                                          {
                                            const design = (
                                              <>
                                                 
                                                <Button
                                                  onClick={handleMenuOpenScroll}
                                                  color="inherit"
                                                  className="text-capitalize dropdown-btn"
                                                  sx={{ fontSize: "13px", fontWeight: "normal" }}
                                                >
                                                  <span className="material-icons-outlined" style={{ fontSize: "20px" }}>
                                                    {item.icon}
                                                  </span>&nbsp;
                                                  {item.label}
                                                </Button>
                                                <Menu                                              
                                                  anchorEl={anchorElScroll}
                                                  open={openScroll}
                                                  onClose={handleMenuCloseScroll}
                                                  sx={{mt:"15px"}}
                                                  MenuListProps={{
                                                    'aria-labelledby': 'long-button',
                                                  }}
                                                  PaperProps={{
                                                    style: {
                                                      maxHeight: ITEM_HEIGHT * 4.5,
                                                      width: '25ch',
                                                    },
                                                  }}
                                                >
                                                  {item.dropdownMenu.map((item) => (
                                                  <MenuItem
                                                    className="dropdownItemScroll-btn"
                                                    onClick={handleMenuCloseScroll}
                                                    key={item.id}
                                                    component={Link}
                                                    to={item.url}
                                                  >
                                                    <span className="material-icons-outlined dropdownScrollIcon">{item.icon}</span>
                                                    {item.label}
                                                  </MenuItem>
                                                ))}
                                                </Menu>
                                              </>
                                            );
                                            return design;
                                          }
                                          else{
                                            return <NormalMenu data={item} key={item.id} />
                                          }
                                            
                                        }

                                    })
                                }
                        </div> 
                    </Toolbar>
                </AppBar> 
              </MediaQuery>



              <MediaQuery maxWidth={992}>
                <AppBar sx={{px:1,height:"55px"}} position="fixed" className="bg-black shadow-none navCon" enableColorOnDark>
                    <Toolbar className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between align-items-center">   
                            <Typography onClick={closeDrag} className="brand-name" component={Link} to={Brand.url} variant="h4" sx={{
                                    color: "white",
                                    textDecoration : "none",
                                    fontSize:"22px",
                                    fontWeight:"normal",
                                    mr: 3
                                }}>{Brand.name}</Typography>  
                        </div>

                        <div>
                                {
                                    NavbarMenus.map((item)=>{
                                        if(item.position === "right" && item.label !== "Products")
                                        {
                                            return <NormalMenu data={item} key={item.id} />   
                                        }

                                    })
                                }

                            <IconButton onClick={handleDrag}>
                              <span className="material-icons menuIcon" style={{color:"white"}}>
                                {drag}
                              </span>
                            </IconButton> 
                        </div>
                        
                    </Toolbar>
                </AppBar> 



                <AppBar sx={{px:1,marginTop:"50px"}} style={display} position="fixed" className="bg-black shadow-none mob-2Appbar-con" enableColorOnDark>
                    <Toolbar className="d-flex flex-column align-items-start" sx={{width:"100%"}}>

                    <div className="d-flex flex-column align-items-start itemMobCon" style={{width:"100%"}}>   
                            

                            {
                                NavbarMenus.map((item)=>{
                                    if(item.dropdown)
                                    {
                                        if(item.position === "left")
                                        {
                                          return (
                                            <>
                                              <Button
                                                color="inherit"
                                                onClick={handleMenuOpenMob}
                                                className="text-capitalize dropdown-btn"
                                                sx={{ fontSize: "13px", fontWeight: "normal" }}
                                              >
                                                {item.label}&nbsp;
                                                <span className="material-icons-outlined" style={{ fontSize: "17px" }}>
                                                  {MobIcon}
                                                </span>
                                              </Button>
                                              <Menu
                                                anchorEl={anchorElMob}
                                                open={openMob}
                                                onClose={handleMenuCloseMob}
                                                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                                                transformOrigin={{ vertical: "top", horizontal: "left" }}
                                                
                                                
                                                PaperProps={{
                                                  style: {
                                                    marginLeft: "130px",
                                                    marginTop: "-20px",
                                                    width: '20ch'
                                                  },
                                                }}
                                              >
                                                {item.dropdownMenu.map((item) => (
                                                  <MenuItem
                                                    className="dropdownItem-btn"
                                                    
                                                    onClick={()=>{ handleMenuCloseMob(); closeDrag();}}
                                                    component={Link}
                                                    to={item.url}
                                                    key={item.id}
                                                  >
                                                    {item.label}
                                                  </MenuItem>
                                                ))}
                                              </Menu>
                                            </>
                                          );
                                        }
                                    }
                                    else{
                                        if(item.position === "left")
                                        { 
                                            return <NormalMenu data={item} key={item.id} />   
                                        }
                                        
                                    }    
                                })
                            } 
                        </div>

                        <div>
                                {
                                    NavbarMenus.map((item)=>{
                                        if(item.position === "right")
                                        {
                                          if(item.dropdown)
                                          {
                                            const design = (
                                              <>
                                                 
                                                <Button
                                                  onClick={handleMenuOpenScroll}
                                                  color="inherit"
                                                  className="text-capitalize dropdown-btn"
                                                  sx={{ fontSize: "13px", fontWeight: "normal" }}
                                                >
                                                  <span className="material-icons-outlined" style={{ fontSize: "20px" }}>
                                                    {item.icon}
                                                  </span>&nbsp;
                                                  {item.label}
                                                </Button>
                                                <Menu                                              
                                                  anchorEl={anchorElScroll}
                                                  open={openScroll}
                                                  className="menu-con"
                                                  onClose={handleMenuCloseScroll}
                                                  
                                                  MenuListProps={{
                                                    'aria-labelledby': 'long-button',
                                                  }}
                                                  PaperProps={{
                                                    style: {
                                                      maxHeight: ITEM_HEIGHT * 4.5,
                                                      marginTop : "10px",
                                                      width: '25ch'
                                                      
                                                    },
                                                  }}
                                                >
                                                  {item.dropdownMenu.map((item) => (
                                                  <MenuItem
                                                    className="dropdownItemScroll-btn"
                                                   
                                                    onClick={()=>{handleMenuCloseScroll();closeDrag();}}
                                                    key={item.id}
                                                    component={Link}
                                                    to={item.url}
                                                  >
                                                    <span className="material-icons-outlined dropdownScrollIcon">{item.icon}</span>
                                                    {item.label}
                                                  </MenuItem>
                                                ))}
                                                </Menu>
                                              </>
                                            );
                                            return design;
                                          }
                                          
                                            
                                        }

                                    })
                                }
                        </div>      
                  
                    </Toolbar>
                </AppBar>
                
              </MediaQuery>       
            </Stack>
        </>
    );
    return design;
}

export default Navbar;