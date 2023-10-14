import {
    Container,
    Stack,
    Tabs,
    Tab,
    CardContent,
    CardActions,
    CardHeader,
    Button,
    Card,
    Typography,
    Input,
    Form,
    FilledInput,
    InputAdornment,
    IconButton,
    FormControl,
    InputLabel,
    InputBase,
    Divider
} from "@mui/material";

import {
    DirectionsCar,
    SignalCellularAlt,
    CarRental
} from '@mui/icons-material';

import {
    useState
} from "react";

import "./HeaderTabs.css";

import JsonTabs from "../../../../JsonApi/JsonHomepage/JsonHeaderTabs/HeaderTabs.json";
import MediaQuery from "react-responsive";

const HeaderTabs = ()=>{

    const [active,setActive] = useState(0);
    const [inputLocationIcon,setInputLocationIcon] = useState("near_me");
    const [inputDestinationIcon,setInputDestinationIcon] = useState("");

    const handleActiveTab = (event,activeVal)=>{
        console.log(activeVal);
        setActive(activeVal);
    }

    const TabPanel = (props)=>{
        const {children,value,index} = props;
        const design = (
            <>
                {
                    value == index &&(
                        <div>{children}</div>
                    )
                }
            </>
        );
        return design;
    }

    const handleLocation = (event)=>{
        const value = event.target.value.trim();
        if(value === "")
        {
            setInputLocationIcon("near_me");
        }
        else{
            setInputLocationIcon("close");
        }

        
    }

    const handleDestination = (event)=>{
        const value = event.target.value.trim();
        if(value === "")
        {
            setInputDestinationIcon("");
        }
        else{
            setInputDestinationIcon("close");
        }
        
    }


    const JsonInputTabPanels = ({data})=>{
        const design = (
            <>
                <TabPanel value={active} index={data.indexVal}>
                    <Card className="cardCon">
                        <CardContent>
                            <Typography className="mb-5 bigtext" variant="h4">{data.Title}</Typography>

                           <form>
                                <div className="d-flex mb-5">
                                    <div style={{width:"10%"}}></div>
                                    <div style={{width:"90%"}}>
                                        <FormControl sx={{width:"100%",mb:4}}>
                                            <InputBase
                                                placeholder="Enter pickup location" 
                                                type="text"
                                                onInput={handleLocation}
                                                endAdornment={
                                                <InputAdornment position="start">
                                                    <IconButton>
                                                        <span className="material-icons">{inputLocationIcon}</span>
                                                    </IconButton>
                                                </InputAdornment>
                                                }  
                                            />
                                        </FormControl>

                                        <FormControl sx={{width:"100%"}}>
                                            <InputBase 
                                                type="text" 
                                                placeholder="Enter destination"
                                                onInput={handleDestination}
                                                endAdornment={
                                                    <InputAdornment position="start">
                                                    <IconButton>
                                                        <span className="material-icons">{inputDestinationIcon}</span>
                                                    </IconButton>
                                                </InputAdornment>
                                                } 
                                             />
                                        </FormControl>
                                    </div>
                                </div>

                                <div className="w-100">
                                    <FormControl>  
                                        <Button style={{fontWeight:"bold",marginRight:"50px"}} className="text-capitalize py-2" variant="contained">{data.RequestButtton}</Button>
                                    </FormControl>
                                                    
                                    <FormControl>
                                        <Button style={{fontWeight:"bold"}} className="text-capitalize py-2">{data.ScheduleButton}</Button>
                                    </FormControl>
                                </div>
                            </form>                    
                        </CardContent>                   
                    </Card>
                </TabPanel>
            </>
        );
        return design;
    }

    const TabHeaderImg = ({data})=>{
        const design = (
            <>
                <TabPanel value={active} index={data.indexVal}>
                    <img src={data.headerImg} width="100%" />
                </TabPanel>
            </>
        );
        return design;
    }

  


    const JsonTabPanels = ({data})=>{
        const design = (
            <>
                <TabPanel value={active} index={data.indexVal}>
                    <Card className="cardCon">
                        <CardContent>
                            <Typography className="mb-4 bigtext" variant="h4">{data.Title}</Typography>
                            <Typography className="subtitle">{data.subTitle}</Typography>
                            <Button style={{fontWeight:"bold",marginRight:"50px"}} className="text-capitalize py-2" variant="contained">{data.Button}</Button>
                                            
                        </CardContent>
                        {
                            data.headerImg === "tabimg2.jpg" ?  <CardActions>
                            <button className="hoverButton mt-4">
                            <Typography className="hovertext">{data.lastTitle}</Typography>
                            <div className="relcon">
                                <div className="abcon">
                                </div>
                            </div>
                        </button>
                        </CardActions> : null     
                        }  

                        
                                            
                    </Card>
                </TabPanel>
            </>
        );
        return design;
    }

    const design = (
        <>
            <MediaQuery minWidth={992}>
                <div className="tabImgBox d-flex flex-column">
                    <div>
                        {
                            JsonTabs.map((item)=>{
                                return <TabHeaderImg data={item} key={item.id} />
                            })
                        }
                    </div>
                    
                    
                        <div className="tabBoxCon">
                            <div className="tabBox p-4">
                                <div className="d-flex flex-column justify-content-start align-items-center mb-4">
                                    <Tabs textColor="primary" indicatorColor="primary" value={active} onChange={handleActiveTab}>    
                                        <Tab icon={<DirectionsCar />} label="Drive" className="tabbtn" />
                                        <Tab icon={<SignalCellularAlt />} label="Drive or deliver" className="tabbtn" />
                                        <Tab icon={<CarRental />} label="Rent your fleet" className="tabbtn" />
                                    </Tabs>
                                </div>  
                                <div>
                                    {
                                        JsonTabs.map((item)=>{
                                            if(item.InputTab)
                                            {
                                                return <JsonInputTabPanels data={item} key={item.id} />
                                            }
                                            else{
                                                return <JsonTabPanels data={item} key={item.id} />
                                            }
                                            
                                        })
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    
                </div>
            </MediaQuery>


            <MediaQuery maxWidth={992}>
                                  
                <div className="tabImgBox">
                    <div className="tabBoxCon">
                        <div className="tabBox p-4">
                            <div className="d-flex flex-column justify-content-start align-items-center mb-4">
                                <Tabs textColor="primary" indicatorColor="primary" value={active} onChange={handleActiveTab}>    
                                    <Tab icon={<DirectionsCar />} label="Drive" className="tabbtn" />
                                    <Tab icon={<SignalCellularAlt />} label="Drive or deliver" className="tabbtn" />
                                    <Tab icon={<CarRental />} label="Rent your fleet" className="tabbtn" />
                                </Tabs>
                            </div>  
                            <div>
                                {
                                    JsonTabs.map((item)=>{
                                        if(item.InputTab)
                                        {
                                            return <JsonInputTabPanels data={item} key={item.id} />
                                        }
                                        else{
                                            return <JsonTabPanels data={item} key={item.id} />
                                        }
                                                
                                    })
                                }         
                            </div>
                        </div>
                    </div> 
                </div>
                <div>
                    {
                        JsonTabs.map((item)=>{
                            return <TabHeaderImg data={item} key={item.id} />
                        })
                    }
                </div>
            </MediaQuery>
            
        </>
    );
    return design;
}

export default HeaderTabs;