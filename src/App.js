import * as React from "react";

import "@fontsource/montserrat-alternates/400.css";
import "animate.css/animate.min.css";

import {
  ThemeProvider,
  createTheme,
  CircularProgress
} from "@mui/material";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import {
  deepPurple,
  teal,
  pink,
  deepOrange,
  lightBlue,
  cyan,
  grey
} from '@mui/material/colors';

import 'material-icons/iconfont/material-icons.css';
import "./App.css";

import Navbar from "./cmp/Navbar/Navbar";
import Footer from "./cmp/Footer/Footer";
import BackToTop from "./cmp/BackToTop/BackToTop";


const Homepage = React.lazy(()=>import("./cmp/Section/Homepage/Homepage"));
const Safety = React.lazy(()=>import("./cmp/Section/Safety/Safety"));
const Help = React.lazy(()=>import("./cmp/Section/Help/Help"));

const AboutUs = React.lazy(()=>import("./cmp/Section/Company/AboutUs/AboutUs"));
const GlobalCitizenship = React.lazy(()=>import("./cmp/Section/Company/GlobalCitizenship/GlobalCitizenship"));
const HowUberWorks = React.lazy(()=>import("./cmp/Section/Company/HowUberWorks/HowUberWorks"));
const OurOfferings = React.lazy(()=>import("./cmp/Section/Company/OurOfferings/OurOfferings"));

const Ride = React.lazy(()=>import("./cmp/Section/Products/Ride/Ride"));
const BikeAndScooters = React.lazy(()=>import("./cmp/Section/Products/BikeAndScooters/BikeAndScooters"));
const Money = React.lazy(()=>import("./cmp/Section/Products/Money/Money"));

const Loader = ()=>{
  const l = (
    <>
      <CircularProgress className="loader" color="info" />
    </>
  );
  return l;
}

const App = ()=>{

  const Theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
      },
    },
    typography: {
      fontFamily: "Montserrat Alternates"
    }
  });

  const design = (
    <>
      <ThemeProvider theme={Theme}>

        <Router>
          
          <Routes>
            <Route path="/" element={
              <React.Suspense fallback={<Loader />}>
                  <Homepage />
              </React.Suspense>
            }/>
            <Route path="/safety" element={
              <React.Suspense fallback={<Loader />}>
                <Safety />
              </React.Suspense>
            } />
            <Route path="/help" element={
              <React.Suspense fallback={<Loader />}>
                <Help />
              </React.Suspense>
            } />
            <Route path="/company/about-us" element={
              <React.Suspense fallback={<Loader />}>
                <AboutUs />
              </React.Suspense>
            } />
            <Route path="/company/global-citizenship" element={
              <React.Suspense fallback={<Loader />}>
                <GlobalCitizenship />
              </React.Suspense>
            } />
            <Route path="/company/how-does-uber-work" element={
              <React.Suspense fallback={<Loader />}>
                <HowUberWorks />
              </React.Suspense>
            }/>
            <Route path="/company/uber-offerings" element={
              <React.Suspense fallback={<Loader />}>
                <OurOfferings />
              </React.Suspense>
            } />
            <Route path="/products/ride" element={
              <React.Suspense fallback={<Loader />}>
                <Ride />
              </React.Suspense>
            } />
            <Route path="/products/bike-and-scooters" element={
              <React.Suspense fallback={<Loader />}>
                <BikeAndScooters />
              </React.Suspense>
            } />
            <Route path="/products/money" element={
              <React.Suspense fallback={<Loader />}>
                <Money />
              </React.Suspense>
            } />
          </Routes>
          
        </Router>
      </ThemeProvider>
    </>
  );
  return design;
}

export default App;