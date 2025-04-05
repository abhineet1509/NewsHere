import React from 'react';
import './NewsSource.css'; // External CSS file
import hinduImage from '../assets/TH.png'; 
import toiImage from '../assets/TOI.png'; 
import bbcImage from '../assets/BBC.png'; 
import ndtvImage from '../assets/NDTV.jpeg'; 
import htImage from '../assets/HT.jpeg'; 

const NewsSource = () => {
  const newsSources = [
    {
      title: "The Hindu",
      year: "1878",
      description: [
        "Known for its unbiased and factual reporting.",
        "Offers extensive coverage of national and international politics.",
        "Trusted by students preparing for exams like UPSC, JEE, and CAT."
      ],
      link: "https://www.thehindu.com",
      image: hinduImage,
    },
    {
      title: "Times of India (TOI)",
      year: "1838",
      description: [
        "One of the oldest newspapers in India.",
        "Covers a wide range of topics from politics to entertainment.",
        "Known for its easy-to-read format and mass appeal."
      ],
      link: "https://timesofindia.indiatimes.com",
      image: toiImage,
    },
    {
      title: "BBC News India",
      year: "1992",
      description: [
        "Covers Indian news from a global perspective.",
        "Focuses on human rights, social issues, and unbiased reporting.",
        "Highly respected globally for its integrity."
      ],
      link: "https://www.bbc.com/news/world/india",
      image: bbcImage,
    },
    {
      title: "NDTV",
      year: "1988",
      description: [
        "Known for in-depth interviews and panel discussions.",
        "Covers politics, business, and environment extensively.",
        "Strong digital presence through NDTV.com."
      ],
      link: "https://www.ndtv.com",
      image: ndtvImage,
    },
    {
      title: "Hindustan Times",
      year: "1924",
      description: [
        "Popular for its coverage of lifestyle, education, and technology.",
        "One of the most read newspapers in North India.",
        "Offers a balanced mix of hard news and soft news."
      ],
      link: "https://www.hindustantimes.com",
      image: htImage,
    },
  ];

  return (
    <div className="timeline">
      {newsSources.map((source, index) => (
        <div className="container" key={index}>
          <div className="text-box">
            <img src={source.image} alt={source.title} className="text-box-image" />
            <h2>{source.title}</h2>
            <small>{source.year}</small>
            {source.description.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            <div className="news-link">
              <a href={source.link} target="_blank" rel="noopener noreferrer">
                Go to the site.
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsSource;
