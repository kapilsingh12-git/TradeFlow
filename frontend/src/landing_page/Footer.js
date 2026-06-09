import React from 'react';
function Footer() {
    return ( 
        <footer style={{backgroundColor:"#f8f9fa"}}>
    <div className='container mt-5 border-top'>
        <div className='row mt-5 '>
            <div className='col'>
                <img src='media/images/logo.svg' style={{width:'50%'}}></img>
                <p>&copy; 2010-2014, Not Zerodha Broking Ltd.All rights reserved.</p>
            </div>
            <div className='col'>
                <p>Company</p>
              <a href='' style={{textDecoration:'none'}} className='text-muted'>About</a><br/><br/>
              <a href='' style={{textDecoration:'none'}} className='text-muted'>   Products </a><br/><br/>
               <a href=''style={{textDecoration:'none'}} className='text-muted'>  Pricing</a><br/><br/>
               <a href=''style={{textDecoration:'none'}} className='text-muted'>  Referral Programme</a><br/><br/>
               <a href=''style={{textDecoration:'none'}} className='text-muted'>  Careers</a><br/><br/>
               <a href=''style={{textDecoration:'none'}} className='text-muted'>  Zerodha tech</a><br/><br/>
               <a href=''style={{textDecoration:'none'}} className='text-muted'>  Press &media</a><br/><br/>
               <a href=''style={{textDecoration:'none'}} className='text-muted'>  Zerodha cares(CSR)</a><br/><br/>
            </div>
            <div className='col'>
                 <p>Support</p>
                   <a href=''style={{textDecoration:'none'}} className='text-muted'> Contact</a><br/><br/>
              <a href=''style={{textDecoration:'none'}} className='text-muted'>  Support portal</a><br/><br/>
              <a href=''style={{textDecoration:'none'}} className='text-muted'>   Z-Connect blog </a><br/><br/>
               <a href=''style={{textDecoration:'none'}} className='text-muted'> List of charges</a><br/><br/>
               <a href=''style={{textDecoration:'none'}} className='text-muted'>  Downloads & resources</a><br/><br/>
              
            </div>
            <div className='col'>
                 <p>Account</p>
                   <a href=''style={{textDecoration:'none'}} className='text-muted'> Open an Account</a><br/><br/>
              <a href=''style={{textDecoration:'none'}} className='text-muted'> Fund transfer</a><br/><br/>
              <a href=''style={{textDecoration:'none'}} className='text-muted'>   60 day challenge</a><br/><br/>
              
              
            </div>
        </div>
        <div className='mt-5 fs-7 text-muted'>
          <p>
        Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.:
        INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. –
        SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd.,
        #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
        J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
    </p>

    <p>
        For any complaints pertaining to securities broking please write to
        complaints@zerodha.com, for DP related queries write to dp@zerodha.com.
        Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI.
    </p>

    <p>
        Procedure to file a complaint on SEBI SCORES:
        Register on the SCORES portal. Mandatory details for filing complaints:
        Name, PAN, Address, Mobile Number, and E-mail ID.
    </p>

    <p>
        Investments in securities market are subject to market risks;
        read all the related documents carefully before investing.
    </p>

    <p>
        Prevent unauthorised transactions in your account.
        Update your mobile numbers/email IDs with your stock brokers/depository participants.
    </p>

    <p>
        KYC is a one time exercise while dealing in securities markets.
        Once KYC is done through a SEBI registered intermediary,
        you need not undergo the same process again.
    </p>

    <p>
        As a business, we don't give stock tips and have not authorized anyone
        to trade on behalf of others.
    </p>
    </div>
    </div>
    </footer>
    );
}

export default Footer;