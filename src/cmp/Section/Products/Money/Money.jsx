import "./Money.css";

import IntroducingUberMoney from "./IntroducingUberMoney/IntroducingUberMoney";
import MakeYourMoney from "./MakeYourMoney/MakeYourMoney";
import UberWallet from "./UberWallet/UberWallet";
import LearnMore from "./LearnMore/LearnMore";
import UberPay from "./UberPay/UberPay";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import BackToTop from "../../../BackToTop/BackToTop";

const Money = ()=>{
    const design = (
        <>
            <Navbar />
            <IntroducingUberMoney />
            <div className="main-con">
                <MakeYourMoney />
                <UberWallet />
                <LearnMore />
            </div>
            <UberPay />
            <Footer />
            <BackToTop />
        </>
    );
    return design;
}

export default Money;