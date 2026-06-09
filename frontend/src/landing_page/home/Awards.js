import React from 'react';
function Awards() {
    return (
        <div className='container mb-3'>
<div className='row'>
   < div className='col-6 p-5'>
   <img src='media\images\largestBroker.svg' className='mb-5'></img></div>
    
    < div className='col-6 p-5 mt-3'>
    <h1>Largest stock Broker in India</h1>
    <p className='mb-4'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily.</p>
    <div className='row'>
        <div className='col-6'>
            <ul>
                <li><p>Future and Options</p></li>
                <li><p>Commedity derivatives</p></li>
                <li><p>currency derivatives</p></li>
            </ul>
        </div>
           <div className='col-6'> <ul>
                <li><p>stocks and IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Securities</p></li>
            </ul></div>
    </div>
    <img src='media\images\pressLogos.png' style={{width:'90%'}} className=' mb-5 mt-3'></img>
    </div>
</div>
            </div>
      );
}

export default Awards;