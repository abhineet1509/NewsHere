import React from 'react';

const Newsitems = ({ title, description, src, url }) => {
  if (!src) return null;

  return (
    <div 
      className="card text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 w-100 w-sm-75 w-md-50 w-lg-auto"
      style={{ 
        maxWidth: '300px', 
        height: '350px',  
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#e8ecef',
        marginBottom: '60px',
        justifyContent: 'space-between',  
        border: 'none',  
        boxShadow: 'none',
      }}
    >
      <img 
        src={src} 
        className="card-img-top"
        style={{ 
          height: '45%',  
          width: '100%', 
          borderRadius: '10px',
          objectFit: 'cover', 
        }} 
        alt={title} 
      />

      <div className="card-body" style={{ padding: '10px', flexGrow: 1 }}>
        <h5 
          className="card-title text-dark"
          style={{ 
            margin: '0', 
            fontSize: 'clamp(0.9rem, 1.1vw, 1.2rem)',
            fontFamily: "'Bebas Neue', sans-serif", 
            textTransform: 'uppercase', 
            color: "#202423",
          }}
        >
          {title.slice(0, 50)}
        </h5>
        
        <p 
          className="card-text text-dark"
          style={{ 
            margin: '5px 0 15px', 
            fontSize: 'clamp(0.7rem, 1vw, 0.9rem)',
            fontFamily: "'Montserrat', sans-serif", 
            color: "#202423",
          }}
        >
          {description ? description.slice(0, 90) : 'No description available'}
        </p>

        <a 
          href={url} 
          className="btn btn-primary mt-auto" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Know More
        </a>
      </div>
    </div>
  );
};

export default Newsitems;






