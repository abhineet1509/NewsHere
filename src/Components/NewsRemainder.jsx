import React, { useState, useEffect } from 'react';
import './NewsRemainder.css';
import img10 from '../assets/img10.png';

const NewsRemainder = ({ typingSpeed = 100, deletingSpeed = 0, pauseTime = 1000 }) => {
  const quote = `In a world that never slows down, <br />
  Headlines rise in every town. <br />
  From facts to stories that spark the soul, <br />
  Our app keeps you in control.`;

  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!deleting && index < quote.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText(quote.slice(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);

      return () => clearTimeout(typingTimeout);
    } else if (deleting && index > 0) {
      const deletingTimeout = setTimeout(() => {
        setDisplayedText(quote.slice(0, index - 1));
        setIndex(index - 1);
      }, deletingSpeed);

      return () => clearTimeout(deletingTimeout);
    } else if (index === quote.length && !deleting) {
      setTimeout(() => setDeleting(true), pauseTime);
    } else if (index === 0 && deleting) {
      setDeleting(false);
    }
  }, [index, deleting, quote, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <div className="typing-container">
      <h1
        className="typing-text"
        dangerouslySetInnerHTML={{ __html: displayedText }}
      />
      <img src={img10} alt="Overlay" className="typing-image" />
    </div>
  );
};

export default NewsRemainder;









