import React from 'react';
import "./NewsPage.css"
import cat2 from '../assets/cat2.jpg'; 
import videoFile from "../assets/video.mp4";
import img8 from '../assets/img8.png'; 
const NewsPage = () => {
  return (
    <div>
  
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
  <h1  style={{ fontSize: '80px', color: '#232223' }}>
    <span style={{ color: '#232223' }}>Stay updated</span><span
      style={{
        color: '#fff',
        WebkitTextStroke: '1px #232223',
        textStroke: '1px #232223',
        marginLeft: '20px',
            }}
    >
      with us..
    </span>
  </h1>
</div>

<div className="parallax-container">
      <div
        className="parallax-image"
        style={{ backgroundImage: `url(${cat2})` }}
      ></div>

      <div className="parallax-text">
        <h1>Breaking News,<br/> Made Simple.</h1>
        <p>
        "News isn’t just about what’s happening today — it’s about understanding how it shapes the future. From the smallest local stories to the largest global events, we bring you the truth, the facts, and the stories that matter most, right at your fingertips."
        </p>
      </div>
    </div>

    <div className="video-container">
          <video
            src={videoFile}
            autoPlay
            loop
            muted
            playsInline
            className="background-video"
          ></video>
          <div className="dark-overlay"></div>
          <div className="text-overlay">
    Stay curious. <br />
    Stay aware. <br />
    Stay ahead!
  </div>

        </div>
        <div className="image-below-parallax" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
  
  <div style={{ textAlign: 'center', marginRight: '20px' }}>
    <h1 className='image-below-parallax-text' style={{ fontSize: '80px', color: '#232223' ,
         }}>
      <span style={{ color: '#232223' }}>we</span>
      <span
        style={{
          color: '#f41b1b',
          marginLeft:'40px',
        }}
      >
        delivers news here...
      </span>
    </h1>
  </div>

  <img
    src={img8}
    alt="Below Parallax Image"
    style={{
      width: '50%',
      height: 'auto',
      marginLeft: '20px', 
    }}
  />
     </div>
    </div>
  );
};

export default NewsPage;


