import React from 'react';
function Education() {
    return (
        <div className= 'container mt-5'>
           < div className='row p-1'>
           <div className='col-6'>
            <img src='media\images\education.svg'></img> </div>
            <div className='col-6 mt-5'>
            <h1>Free and open market education</h1>
            <p>varsity the largest  online stock market education book in the world covering evrything from the basics to advanced trading.</p>
            <a href=''style={{textDecoration:"none"}}>versity <i className="fa fa-long-arrow-right" ></i></a>
            <p>Trading Q&A, the most active trading and investment  market related queries.</p>
            <a href='' style={{textDecoration:"none"}}>TradingQ&A <i className="fa fa-long-arrow-right" ></i></a>
            </div>
          
           </div>
        </div>
    );
}

export default Education;