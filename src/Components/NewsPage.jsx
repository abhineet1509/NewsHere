import React from 'react';
import "./NewsPage.css";
import img7 from '../assets/img7.png';
import cat2 from '../assets/cat2.jpg'; 
import videoFile from "../assets/video.mp4";
import img8 from '../assets/img8.png'; 
import NewsSource from './NewsSource';

const NewsPage = () => {
  return (
    <div className="news-page-container">
      {/* Header Section */}
      <div className="header-container">
        <h1 className="header-title">
          <span className="header-title-part1">Stay updated</span>
        </h1>
      </div>
      
      {/* Parallax Section */}
      <div className="parallax-container">
        <div className="parallax-image" style={{ backgroundImage: `url(${cat2})` }}></div>
        <div className="parallax-text">
          <h1>Breaking News,<br /> Made Simple.</h1>
          <p>
            "News isn't just about what's happening today — it's about understanding how it shapes the future. From the smallest local stories to the largest global events, we bring you the truth, the facts, and the stories that matter most, right at your fingertips."
          </p>
        </div>
      </div>

      {/* Video Section */}
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
     
      <NewsSource />

      <div className="image-text-container">
        <div className="image-container">
          <img src={img7} alt="Above Image" className="above-image" />
        </div>
        <div className="vertical-text-bg">NEWSHERE</div>
        <div className='content-wrapper'>
          <div className="vertical-line"></div>
          <div className="text-side">
            <p>Our job is to hold the powerful accountable and give voice to the voiceless.</p>
            <h2>- Christiane Amanpour</h2>
          </div>
          <div className="vertical-line"></div>
          <div className="text-side">
            <p>A good newspaper is a nation talking to itself.</p>
            <h2>- Arthur Miller</h2>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="image-below-parallax">
        <div className="image-below-text">
          <h1 className='image-below-parallax-text'>
            <span>we</span>
            <span className="red-text">delivers news here...</span>
          </h1>
        </div>
        <img
          src={img8}
          alt="Below Parallax Image"
          className="below-parallax-image"
        />
      </div>
    </div>
  );
};

export default NewsPage;