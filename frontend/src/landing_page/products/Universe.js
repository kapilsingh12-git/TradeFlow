import React from 'react';
function Universe() {
    return (<div className='container p- mt-3'>
        <div className='row '>
            <h3 className='mb-2 text-center'>Want to know more about our technology stack? Check out the<a href="">Zerodha.tech </a>blog.</h3>
            <h1 className='mt-4 text-center'>The Zerodha Universe</h1>
            <h3 className='mt-4 text-center'>Extend your trading and investment experience even further with our partner platforms</h3>
            <div className='col-4 p-3 mt-5'>
                <img src="\media\images\zerodhaFundhouse.png" className='mb-2'></img>
                <p className='text-muted'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
             <div className='col-4 p-3 mt-5'>
                <img src="\media\images\streakLogo.png" style={{ width: '70%' }}></img>
                <p className='text-muted'>Systematic trading platform that allows you to create and backtest
                    strategies without coding.</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="\media\images\sensibullLogo.svg " style={{ width: '50%' }} className='mb-2'></img>
                <p className='text-muted'>Options trading platform that lets you
                    create strategies, analyze positions, and examine
                    data points like open interest, FII/DII, and more.
                </p></div>
               <div className='col-4 p-3 mt-3'> <img src="\media\images\smallcaseLogo.png" style={{ width: '70%' }}></img>
                <p className='text-muted'>
                    Thematic investing platform
                    that helps you invest in diversified
                    baskets of stocks on ETFs.</p>
            </div>
            <div className='col-4 p-3 mt-3'>
                <img src="\media\images\goldenpiLogo.png" style={{ width: '50%' }}></img>
                <p className='text-muted'>
                    Investment research platform
                    that offers detailed insights on stocks,
                    sectors, supply chains, and more.
                </p></div>
              <div className='col-4 p-3 mt-3'>
                  <img src="\media\images\dittoLogo.png" style={{ width: '50%' }}></img>
                <p className='text-muted'>Personalized advice on life
                    and health insurance. No spam
                    and no mis-selling.</p>
            </div>
           <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"25%",margin:"0 auto"}}>Sign up for free</button>
        </div>

    </div>);
}

export default Universe;