import React from 'react';
function Pricing() {
    return (
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-4 mb-5'>
                    <h1>Unbeatable Pricing</h1>
                    <p>We pioneered the concept of discount broking and price transperency in india .Flat fees and no hidden charges.</p>
                    <a href=''>See pricing <i className="fa fa-long-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='container text-center p-2'>
                    <div className='row'>
                        <div className='col border '>
                            <h1>0</h1>
                            <p>free equity delivery and direct mutual funds</p>
                        </div>
                          <div className='col border'>
                            <h1>20</h1>
                            <p>Intraday and f&o</p>
                          </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;