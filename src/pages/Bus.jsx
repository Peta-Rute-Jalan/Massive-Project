import React from 'react';
import { useNavigate } from 'react-router-dom';

const Bus = () => {
  const navigate = useNavigate();

  const pageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/content/bgbus.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '1.5rem',
    textAlign: 'center',
    padding: '20px',
    position: 'relative',
  };

  const subtitleStyle = {
    margin: '20px 0',
    fontSize: '2rem', // Enlarged font size
    textAlign: 'center',
  };

  const descriptionStyle = {
    margin: '10px 0 40px 0', // Adjusted margin for better spacing
    fontSize: '1.2rem',
    textAlign: 'center',
  };

  const imageContainerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px', // Space between images
    marginBottom: '40px', // Space between images and krl image
  };

  const imageWrapperStyle = {
    position: 'relative',
    cursor: 'pointer', // Change cursor to pointer to indicate clickability
  };

  const imageStyle = {
    width: '349.49px',
    height: '269.59px',
  };

  const imageLabelStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    color: 'white',
    fontSize: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent background for better readability
    padding: '5px',
  };

  const krlWrapperStyle = {
    position: 'relative',
    marginBottom: '30px', // Space between krl image and button
    cursor: 'pointer', // Change cursor to pointer to indicate clickability
  };

  const krlStyle = {
    width: '349.49px',
    height: '269.59px',
  };

  const buttonStyle = {
    color: 'black',
    border: '2px solid white',
    borderRadius: '15px',
    width: '185px',
    height: '40px',
    textAlign: 'center',
    lineHeight: '40px',
    cursor: 'pointer',
  };

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <div style={pageStyle}>
      <div style={subtitleStyle}>
        <h1>BUS</h1>
      </div>
      <div style={descriptionStyle}>
        <p>Pilih jenis BUS yang ingin dinaiki</p>
      </div>
      <div style={imageContainerStyle}>
        <div style={imageWrapperStyle} onClick={() => navigate('/jakarta')}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/content/transjakarta.jpg`} style={imageStyle} alt="whoosh" />
          <div style={imageLabelStyle}>Trans Jakarta</div>
        </div>
        <div style={imageWrapperStyle} onClick={() => navigate('/bogor')}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/content/transbogor.jpg`} style={imageStyle} alt="keretabandara" />
          <div style={imageLabelStyle}>TransBogor</div>
        </div>
        <div style={imageWrapperStyle} onClick={() => navigate('/depok')}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/content/transdepok.jpg`} style={imageStyle} alt="lrt" />
          <div style={imageLabelStyle}>DepokGo</div>
        </div>
      </div>
      <div style={imageContainerStyle}>
        <div style={imageWrapperStyle} onClick={() => navigate('/tangerang')}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/content/transtangerang.jpg`} style={imageStyle} alt="whoosh" />
          <div style={imageLabelStyle}>TransTangerang</div>
        </div>
        <div style={imageWrapperStyle} onClick={() => navigate('/bekasi')}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/content/transbekasi.jpg`} style={imageStyle} alt="keretabandara" />
          <div style={imageLabelStyle}>TransBekasi</div>
        </div>
        <div style={imageWrapperStyle} onClick={() => navigate('/damri')}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/content/damri.jpg`} style={imageStyle} alt="lrt" />
          <div style={imageLabelStyle}>Damri</div>
        </div>
      </div>
      <button style={buttonStyle} onClick={handleButtonClick}>Kembali</button>
    </div>
  );
};

export default Bus; 
