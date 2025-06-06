

import React, { useState, useEffect } from "react";

const HeadLineCard = ({ articles }) => {
  const [images, setImages] = useState([]);
  const [selectedImg, setSelectedImg] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Resize listener for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load images from articles
  useEffect(() => {
    if (articles && articles.length > 0) {
      try {
        const articleImages = articles
          .filter((article) => article.urlToImage)
          .map((article) => ({
            src: article.urlToImage,
            title: article.title,
            description: article.description,
            url: article.url,
          }));
        setImages(articleImages);
        setLoading(false);
      } catch (err) {
        setError("Failed to load images.");
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [articles]);

  // Image slideshow
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setSelectedImg((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images]);

  if (loading) return <div>Loading images...</div>;
  if (error) return <div>Error: {error}</div>;
  if (images.length === 0) return <div>No images available</div>;

  const currentImage = images[selectedImg];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          width: isMobile ? "90%" : "850px",
          height: isMobile ? "500px" : "500px",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 20px 20px rgba(5, 5, 5, 0.515)",
          transition: "all 0.3s ease",
        }}
      >
        <a
          href={currentImage.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={currentImage.src}
            alt={currentImage.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />
        </a>

        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            maxWidth: "90%",
          }}
        >
          <h2
            style={{
              margin: "0",
              fontSize: isMobile ? "16px" : "30px",
              fontFamily: "'Bebas Neue', sans-serif",
              textTransform: "uppercase",
            }}
          >
            {currentImage.title}
          </h2>

          <p
            style={{
              margin: "5px 0 0",
              fontSize: isMobile ? "10px" : "16px",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {currentImage.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadLineCard;
