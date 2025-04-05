

import React, { useState, useEffect } from "react";
import Newsitems from "./Newsitems"; 
import Footer from './Footer'
import Category from './Category';
import NewsRemainder from './NewsRemainder';
import NewsPage from "./NewsPage";
import HeadLineCard from "./HeadLineCard";
const Newsboard = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchArticles = async () => {
      try {
         const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
      
        const response = await fetch(url);
        const data = await response.json();

        if (data.articles) {
          setArticles(data.articles);
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch articles.");
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]); 

  return (
    <div style={{
      background:"#fbfcf4", 
      padding: "20px",
    }}>
     
      <HeadLineCard articles={articles} />
     
      <h1  className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <style jsx>{`
           @media (max-width: 768px) {
              .category-title {
                font-size: 90px;
                 }
               }
           @media (max-width: 480px) {
              .category-title {
                 font-size: 48px;
                   }
                }
      `}</style>
    
      {articles.slice(0, 20).map((news, index) => (
        <Newsitems
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}

      <Category/>
      <NewsRemainder speed={1} />
      <NewsPage />
      <Footer/>
    
    </div>
  );
};

export default Newsboard;

