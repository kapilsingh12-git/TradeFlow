import React from 'react';
import Hero from './Hero';
import Leftsection from './LeftSection';
import Rightsection from './RightSection';
import Universe from './Universe';
function Product() {
    return (
        <>
            <Hero />
            <Leftsection imgurl="/media/images/kite.png"
                heading="Kite"
                para={<>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an <br/> elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</>}
                trydemo="Try demo"
                Learnmore="Learn more"
                googleplay=""
                appstore=""
                 />
                 <Rightsection
                 headof="Console" 
                 centraldes="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                 Learns="Learn more"
                 image="media/images/console.png"
                 />

                   <Leftsection imgurl="/media/images/coin.png"
                heading="Coin"
                para={<>Buy direct mutual funds online, commission-free, delivered directly to your Demat <br/> account. Enjoy the investment experience on your Android and iOS devices.</>}
                trydemo="Coin"
                Learnmore=""
                googleplay=""
                appstore=""
                 />
                  <Rightsection
                 headof="Kite Connect API" 
                 centraldes="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                 Learns="Kite Connect"
                 image="media/images/kiteconnect.png"
                 />
                  <Leftsection imgurl="/media/images/varsity.png"
                heading="Versity mobile"
                para={<>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</>}
               trydemo=""
                Learnmore=""
                googleplay=""
                appstore=""
                 />
                 <Universe/>
                </>
    );
}

export default Product;