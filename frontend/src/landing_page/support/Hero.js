import React from 'react';
function Hero() {
    return ( <section className='container-fluid py-5' id='supporthero'>
        <div className='py-3 my-4' id="supportwrapper">
            <h4>Support Portal</h4>
            <a href=''>Track Tickets</a>
        </div>
        <div className='row p-2 m-4'>
            <div className='col-lg-6 mt-5 mt-lg-0'>
                <h1 className='fs-3 text-white mb-4'>
                    Search for an Answer or browse help topics to create a ticket 
                </h1>
                <input placeholder='EG. how do I acticvate F&O'></input><br/>
                <a href='' style={{marginLeft:'10px'}}>Track account Opening</a>
                <a href=''style={{marginLeft:'10px'}}>Track segment activation</a>

                <a href=''style={{marginLeft:'10px'}}>Intrady margins</a>

                <a href=''style={{marginLeft:'10px'}}>Kite user manual</a>

            </div>
             <div className='col-lg-6 mt-5 mt-lg-0'>
                <h1 className='fs-3 text-white mb-4'> Featured</h1>
                <ol style={{ lineHeight: 2.5 }}>
                     <li><a href=''>Current Tackeovers and Delisting-January 2024</a></li>
                    <li><a href=''>Latest Intrady Leverages- MIS & CO</a></li>
                </ol>
             </div>
        </div>
    </section> );
}

export default Hero;