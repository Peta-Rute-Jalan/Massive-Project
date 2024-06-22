import React from 'react';
import '../assets/css/style.css';

function Searchbar() {
  return (
    <div className="Searchbar-container">
      <h2>Pilih Daerah Anda Berada!</h2>
      <button type="button" className="selection-btn">Jakarta</button>
      <button type="button" className="selection-btn">Bogor</button>
      <button type="button" className="selection-btn">Depok</button>
      <button type="button" className="selection-btn">Tangerang</button>
      <button type="button" className="selection-btn">Bekasi</button>
    </div>
  );
}

export default Searchbar;


