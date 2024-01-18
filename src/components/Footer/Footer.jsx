import React from 'react';
import './footer.scss';
import { FacebookRounded, Instagram, Twitter, LinkedIn} from '@mui/icons-material';
import { PhoneInTalk, Email, NearMe } from '@mui/icons-material';
import DrawIcon from '@mui/icons-material/Draw';

const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='footer-empty'></div>
      <div className='container'>
        <div className='footer-social'>
              <div className='footer-social-logo'>
              <h2 className='logo'>  BLOG<DrawIcon className='icon'/> </h2>
              <p >   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <ul className='social'>
                <li>
                  <a href='#'><FacebookRounded/></a>
                </li>
                <li>
                  <a href='#'><Instagram/></a>
                </li>
                <li>
                  <a href='#'> <Twitter/> </a>
                </li>
                <li>
                  <a href='#'> <LinkedIn/></a>
                </li>
              </ul>
              </div>
        </div>
        <div className='footer-quick-link'>
          <h2>Quick Links</h2>
          <div className='footer-quick-links'>
          <ul>
        <li><a href=''>About us</a></li>
        <li><a href=''>Blogs</a></li>
        <li><a href=''>Contact us</a></li>
       </ul>
          </div>
       
        </div>
        <div className='footer-contact'>
          <h2>Contact info</h2>
          <div className='footer-contact-info'>
            <li>< PhoneInTalk /> <h4>+77477151141</h4></li>
            <li><Email /><h4>toyaposha@mail.ru</h4></li>
            <li><NearMe /><h4>Almaty,Kazahkstan</h4></li>
            
          </div>
             
        </div>

      </div>
    <div className='footer-done-by'>
       <h3>Design by Yaposha</h3>
    </div>
 
    </div>
    
    </>
  )
}

export default Footer