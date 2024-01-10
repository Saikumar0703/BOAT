import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer className="container-fluid mt-auto py-3 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Company Name: Boat</h5>
            
            <p>About Us : Brand</p>
            <p>Contact Us : <FacebookIcon></FacebookIcon>  <InstagramIcon></InstagramIcon> <LinkedInIcon></LinkedInIcon>  <GitHubIcon></GitHubIcon></p>
          </div>
          <div className="col-md-4">
            <h5>Services</h5>
            <p>Airdops</p>
            <p>Neckbands</p>
            <p>Smartwatches</p>
            <p>Headphones</p>
            
          </div>
          <div className="col-md-4">
            <h5>Connect with Us</h5>
            <p>Email: saikumarnarmula2000@gmail.com</p>
            <p>Phone: +9867330460</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="mb-0">© {new Date().getFullYear()} Company,Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
