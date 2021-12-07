import React from 'react';
import './Footer.css'
import logo from '../../../images/logo2.png'
const Footer = () => {
    return (
        <div className=" mt-5 bg-dark">
        <div className="fCard bg-dark ">
            <div className="row mb-4">
                <div className="col-md-4 col-sm-4 col-xs-4">
                    <div className="footer-text pull-left">
                        <div className="d-flex">
                           <img style={{height:'100px' , width:'290px'}} src={logo} alt=''/>
                        </div>
                        <p className="fCard-text text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.</p>
                        <div className="social mt-2 mb-3"> <i className="fa fa-facebook-official fa-lg"></i> <i className="fa fa-instagram fa-lg"></i> <i className="fa fa-twitter fa-lg"></i> <i className="fa fa-linkedin-square fa-lg"></i> <i className="fa fa-facebook"></i> </div>
                    </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-2"></div>
                <div className="col-md-2 col-sm-2 col-xs-2">
                    <h5 className="heading text-white">Services</h5>
                    <ul>
                        <li>Home delivery</li>
                        <li>Fast Delivery</li>
                        <li>Response</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-2">
                    <h5 className="heading text-white">Support</h5>
                    <ul className="fCard-text">
                        <li>Contact</li>
                        <li>FAQ</li>
                        <li>Resturant Near You</li>
                        <li>Retail</li>
                    </ul>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-2">
                    <h5 className="heading text-white">Company</h5>
                    <ul className="fCard-text">
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Join Us</li>
                    </ul>
                </div>
            </div>
            <div className="divider mb-4"> </div>
            <div className="row"style={{fontSize:'10px'}}>
                <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className="pull-left">
                        <p className="text-white ">©2020 fahad</p>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6">
                    <div className="pull-right mr-4 d-flex policy">
                        <div style={{color:'white'}}>Terms of Use</div>
                        <div style={{color:'white'}}>Privacy Policy</div>
                        <div style={{color:'white'}}>Cookie Policy</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Footer;