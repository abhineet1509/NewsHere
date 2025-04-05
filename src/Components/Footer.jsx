import React from 'react'
import './Footer.css'
import seo from '../assets/seo.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

const Footer = () => {
  return (
   
    <div className="footer-container">
    <footer>
      
      <div className="col">
        <img src={seo} alt="JEE Logo" className="footer-logo" />
      </div>
  
      
      <div className="col">
        <input type="email" placeholder="Enter your email here" className="footer-input" />
        <button  className="footer-submit">
           Subscribed
        </button>
      </div>
  
     
      <div className="col">
        <div className="icons">
          <img src={img1} alt="Facebook" />
          <img src={img2} alt="Instagram" />
          <img src={img3} alt="LinkedIn" />
        </div>

        <div className="address">
          <address>
            <h3>Contact Us</h3>
            <p>Email: <a href="mailto:kumarabhineet409@gmail.com">kumarabhineet409@gmail.com</a></p>
            <p>Phone: <a href="tel:+917004683499">+91 7004683499</a></p>
            <p>Address: 123, JEE Lane, Education City, India</p>
            <p>&copy; 2024 JEE Preparation. All rights reserved.</p>
          </address>
        </div>
      </div>
    </footer>
  </div>
  )
}

<<<<<<< HEAD
export default Leg;
=======
export default Footer
>>>>>>> 50381a3397bc21d60c98e5a52f550c2efe5b94ab
