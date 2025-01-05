const Newsitems = ({ title, description, src, url }) => {
 
  if (!src) return null;

  return (
    <div 
      className="card  text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" 
      style={{ 
        maxWidth: '300px', 
        height: '350px',  
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor:' #e8ecef',
        marginBottom:'60px',
        justifyContent: 'space-between',  
       
         border: 'none',  
    boxShadow: 'none'
      }}
    >
      <img 
        src={src} 
        style={{ 
          height: '45%',  
          width: '100%', 
          borderRadius: '10px',
          objectFit: 'cover', 
        }} 
        className="card-img-top" 
        alt={title} 
      />
      <div className="card-body" style={{ padding: '10px', flexGrow: 1 }}>
      
        <h5 className="card-title" style={{ 
          margin: '0', 
          fontSize: window.innerWidth <= 768 ? '16px' : '20px', 
          fontFamily: "'Bebas Neue', sans-serif", 
          textTransform: 'uppercase', 
          color:"#202423",
        }}>
          {title.slice(0, 50)}
        </h5>
        
        <p className="card-text" style={{ 
          margin: '5px 0 15px', 
          fontSize: window.innerWidth <= 768 ? '10px' : '14px', 
          fontFamily: "'Montserrat', sans-serif", 
          color:"#202423",
        }}>
          {description ? description.slice(0, 90) : 'No description available'}
        </p>
        <a 
          href={url} 
          className="btn btn-primary" 
          style={{ marginTop: 'auto' }} 
        >
          Know More
        </a>
      </div>
    </div>
  );
};

export default Newsitems;







