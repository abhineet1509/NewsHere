import React from 'react'
import './Category.css'
import cat1 from "../assets/cat1.png"
import cat2 from "../assets/cat2.jpg"
import cat3 from "../assets/cat3.jpg"
import cat4 from "../assets/cat4.jpg"
import cat5 from "../assets/cat5.jpg"
const Category = () => {
  return (
    <div>
      <h1 style={{ marginTop:'90px' }}>Explore Us</h1>
      
      <div className="category">

         <a href="https://indianhistorycollective.com/" target="_blank" rel="noopener noreferrer">
           <div className="category-card">
             <img src={cat1} alt="History" />
             <h3>History</h3>
           </div>
         </a>

         <a href="https://smarthistory.org/" target="_blank" rel="noopener noreferrer">
           <div className="category-card">
             <img src={cat2} alt="Art" />
             <h3>Art</h3>
           </div>
         </a>

         <a href="https://indianculture.gov.in/" target="_blank" rel="noopener noreferrer">
           <div className="category-card">
             <img src={cat3} alt="Culture" />
             <h3>Culture</h3>
           </div>
         </a>

         <a href="https://www.mapsofindia.com/geography/" target="_blank" rel="noopener noreferrer">
           <div className="category-card">
             <img src={cat4} alt="Geography" />
             <h3>Geography</h3>
           </div>
         </a>

         <a href="https://science.nasa.gov/solar-system/" target="_blank" rel="noopener noreferrer">
           <div className="category-card">
             <img src={cat5} alt="Spaces" />
             <h3>Spaces</h3>
           </div>
         </a>
      </div>
    </div>
  )
}

export default Category




