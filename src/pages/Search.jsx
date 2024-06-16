import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';
// import './assets/css/custom.css';

const Search = () => {
  const [halte, setHalte] = useState('');
  const [tujuan, setTujuan] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const searchRoute = () => {
    if (halte && tujuan) {
      const busImage = document.getElementById('busImage');

      const resultFrame = (
        <div className="result-frame" style={{ width: `${busImage.clientWidth}px` }}>
          <div className="route-path">
            <div className="left">
              <img src="assets/images/logo/walk.png" alt="Walk" style={{ height: '30px' }} />
              <span>M2</span>
            </div>
            <div className="left">
              <span>-</span>
            </div>
            <div className="left">
              <img src="assets/images/logo/train.jpg" alt="Train" style={{ height: '30px' }} />
              <span>M1/1</span>
            </div>
            <div className="right">
              <p className="train-info">Kereta: <strong>Depok/Bogor</strong></p>
              <p><span>Juanda - Bundaran HI</span></p>
              <p><span>IDR: ???</span></p>
            </div>
          </div>
        </div>
      );

      setSearchResults(resultFrame);
    }
  };

  return (
    <div id="container">
      <div id="sidebar">
        <div className="input-group">
          <input
            type="text"
            id="halte"
            placeholder="Halte TransJakarta Juanda"
            className="form-control"
            value={halte}
            onChange={(e) => setHalte(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            id="tujuan"
            placeholder="Tujuan"
            className="form-control"
            value={tujuan}
            onChange={(e) => setTujuan(e.target.value)}
          />
        </div>
        <button onClick={searchRoute} className="btn btn-primary btn-sm">Cari Rute</button>
        <div className="images">
          <img id="busImage" src="assets/images/transportasi/bus.jpg" className="img-fluid" alt="Bus" />
        </div>
        <div id="search-results">
          {searchResults}
        </div>
      </div>

      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.4065880218997!2d106.82832931528112!3d-6.170258995527024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5e900000001%3A0x776885e5e0b1b9c3!2sHalte%20TransJakarta%20Juanda!5e0!3m2!1sen!2sid!4v1627896158984!5m2!1sen!2sid"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Search;
