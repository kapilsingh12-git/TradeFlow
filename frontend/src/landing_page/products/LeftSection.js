import React from 'react';
function Leftsection({imgurl,
     heading, para, trydemo, Learnmore, googleplay, appstore}) {
    return (
        <div className='container border-top'>
            <div className='row mt-5'>
                <div className='col-4 p-5'>
                    <img src={imgurl} alt='err'></img>
                </div>
                <div className=' col-2'></div>
                <div className='col-6 p-5 mt-5'>
                    <h1>{heading}</h1>
                    <p className='text-muted fs-5'>{para}</p>
                   <div className='mb-3 p-2 ' >
                     <a href="" className='me-4' style={{textDecoration:"none"}}>{trydemo}<i className="fa fa-long-arrow-right"></i></a>
                    <a href="" className='me-5' style={{textDecoration:"none"}}>{Learnmore}<i className="fa fa-long-arrow-right"></i></a>
                    </div>
                    <div >
                       <a href={googleplay}> <img src="media/images/googlePlayBadge.svg" style={{marginRight:'10px'}}></img></a>
                   <a href={appstore}> <img src="media/images/appstoreBadge.svg"></img></a>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Leftsection;