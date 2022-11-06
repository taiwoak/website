import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Profile.css';

const FooterLink = () => {
    return <div className='mt-4 mb-4'>
        <div id="line"></div>
        <div className="d-flex flex-sm-row align-items-sm-center mt-3 mb-4 justify-content-sm-around" id="footer">
            <img alt="Zuri Internship Logo" width="187.59px" height="32px" src= {process.env.PUBLIC_URL + "/Zuri.Internship_Logo.png" } id="zuri-logo" />
            <p>HNG Internship 9 Frontend Task</p>
            <img alt="I4G Logo" width="132.13px" height="32px" src= {process.env.PUBLIC_URL + "/I4G.png" } id="i4g-logo" />
        </div>
    </div>
};

export default FooterLink;