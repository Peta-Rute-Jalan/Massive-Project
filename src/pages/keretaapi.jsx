import React from 'react';
import { useNavigate } from 'react-router-dom';

const KeretaApiPage = () => {
  const navigate = useNavigate();

  const pageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/content/keretaapi.jpg)`,
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
        <h1>Kereta Api</h1>
      </div>
      <div style={descriptionStyle}>
        <p>Pilih jenis kereta yang ingin dinaiki</p>
      </div>
      <div style={imageContainerStyle}>
        <div style={imageWrapperStyle} onClick={() => navigate('/whoosh')}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/content/whoosh.png`} style={imageStyle} alt="whoosh" />
          <div style={imageLabelStyle}>Whoosh</div>
        </div>
        <div style={imageWrapperStyle} onClick={() => navigate('/keretabandara')}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/content/keretabandara.png`} style={imageStyle} alt="keretabandara" />
          <div style={imageLabelStyle}>Kereta Bandara</div>
        </div>
        <div style={imageWrapperStyle} onClick={() => navigate('/lrt')}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/content/lrt.jpg`} style={imageStyle} alt="lrt" />
          <div style={imageLabelStyle}>LRT</div>
        </div>
      </div>
      <div style={krlWrapperStyle} onClick={() => navigate('/krl')}>
        <img src={`${process.env.PUBLIC_URL}/assets/images/content/krl.jpg`} style={krlStyle} alt="krl" />
        <div style={imageLabelStyle}>KRL</div>
      </div>
      <button style={buttonStyle} onClick={handleButtonClick}>Kembali</button>
    </div>
  );
};

export default KeretaApiPage;
