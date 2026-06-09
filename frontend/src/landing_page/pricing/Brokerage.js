import React from 'react';
function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-8'>
                  <a href='' style={{textDecoration:'none'}}>  
                    <h3> Brokerage Calculator</h3></a>
                 <ul
  style={{
    textAlign: "left",
    lineHeight: "2.5",
    fontSize: "12px",
  }}
  className="text-muted"
>
  <li>
    Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
    GST per order.
  </li>

  <li>
    Digital contract notes will be sent via e-mail.
  </li>

  <li>
    Physical copies of contract notes, if required, shall be charged
    ₹20 per contract note. Courier charges apply.
  </li>

  <li>
    For NRI accounts, brokerage charges may vary based on the segment.
  </li>

  <li>
    Taxes such as STT, GST, SEBI charges, and stamp duty are charged
    separately.
  </li>

  <li>
    Brokerage will not exceed the SEBI prescribed limit.
  </li>

  <li>
    AMC (Account Maintenance Charges) applicable for Demat accounts.
  </li>

  <li>
    Charges are subject to change as per exchange regulations.
  </li>
</ul>
                </div>
                 <div className='col-4'>
                     <a href='' style={{textDecoration:'none'}}>  <h3> List of charges</h3></a>
                 </div>
            </div>
        </div>
     );
}

export default Brokerage;