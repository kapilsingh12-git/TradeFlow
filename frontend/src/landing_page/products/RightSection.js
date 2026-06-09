import React from 'react';
function Rightsection({headof,centraldes,Learns,image}) {
    return ( <div className='container align-items-center'>
        <div className="row">
            <div className='col-4 mt-5 align-items-center p-5'>
                <h1 className='mt-5'>{headof}</h1>
                <p className='fs-5 mt-3'>{centraldes}</p>
                <a href="" style={{textDecoration:"none"}}>{Learns} <i className="fa fa-long-arrow-right"></i> </a>
                
            </div>
             <div className='col-2'></div>
              <div className='col-6 mb-5 text-center'>
                <img src={image} ></img>
              </div>
        </div>
    </div> );
}

export default Rightsection;
