import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';

const Damri = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/bus');
  };

  return (
    <div className="whoosh-container">
      <button className="whoosh-back-button" onClick={handleBackClick}>Kembali</button>
      <div className="whoosh-content-frame">
        <div className="whoosh-content">
          <img src="/assets/images/keretaapi/damri.jpg" alt="Whoosh" className="whoosh-image" />
          <div className="whoosh-text">
            <p>DAMRI (Djawatan Angkoetan Motor Repoeblik Indonesia) adalah perusahaan BUMN yang menyediakan layanan bus di berbagai wilayah di Indonesia, termasuk Jabodetabek (Jakarta, Bogor, Depok, Tangerang, dan Bekasi). Bus DAMRI Jabodetabek merupakan pilihan yang populer bagi masyarakat yang ingin bepergian dengan nyaman dan terjangkau di wilayah Jabodetabek.</p>
            <p>Tarif bus DAMRI Jabodetabek sangat terjangkau, mulai dari Rp 3.500 untuk sekali jalan.
            </p>

          </div>
        </div>
        <div className="whoosh-details">
          <p>
        DAMRI Jabodetabek memiliki beberapa jenis bus, antara lain:</p>

          <ul>
            <li>Bus Ekonomi: Bus ini memiliki tarif yang paling murah dan memiliki kapasitas yang lebih besar.</li>
            <li>Bus AC: Bus ini dilengkapi dengan AC untuk memberikan kenyamanan ekstra bagi penumpang.</li>
            <li>Bus Eksekutif: Bus ini memiliki tempat duduk yang lebih nyaman dan dilengkapi dengan berbagai fasilitas seperti Wi-Fi dan USB charging port.</li>
            <li>Bus Bandara: Bus ini melayani rute dari dan ke bandara di Jabodetabek.</li>
          </ul>
          <p>Informasi rute dan tarif bus DAMRI Jabodetabek dapat ditemukan di situs web DAMRI, aplikasi DAMRI, atau di halte-halte bus DAMRI.
          </p>
          <ul>
            <li>Situs Web: <a href=" https://damri.co.id/"> https://damri.co.id/</a></li>
            <li>Aplikasi: <a href=" https://play.google.com/store/apps/details?id=com.simadamri.damriapps&hl=en&gl=US"> https://play.google.com/store/apps/details?id=com.simadamri.damriapps&hl=en&gl=US</a></li>
          </ul>
        </div>
      </div>
      <div className="keretaapi-image-wrapper">
        <img src="/assets/images/keretaapi/rutedamri.jpg" alt="Kereta Api" className="" />
        <div className="keretaapi-overlay"></div>
      </div>
    </div>
  );
};

export default Damri;
