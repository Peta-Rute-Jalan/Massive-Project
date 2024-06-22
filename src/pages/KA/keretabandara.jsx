import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';

const Keretabandara = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/keretaapi');
  };

  return (
    <div className="whoosh-container">
      <button className="whoosh-back-button" onClick={handleBackClick}>Kembali</button>
      <div className="whoosh-content-frame">
        <div className="whoosh-content">
          <img src="/assets/images/content/keretabandara.png" alt="Whoosh" className="whoosh-image" />
          <div className="whoosh-text">
            <p>Kereta Api Cepat Whoosh, singkatan dari Waktu Hemat, Operasi Optimal, Sistem Hebat, merupakan kereta api pertama di Indonesia dan Asia Tenggara yang menawarkan kecepatan tinggi hingga 350 km/jam. Diluncurkan pada 2 Oktober 2023, Whoosh hadir sebagai solusi mobilitas baru yang mempersingkat waktu tempuh antara Jakarta dan Bandung.</p>
          </div>
        </div>
        <div className="whoosh-details">
          <p><strong>Rute dan Stasiun:</strong></p>
          <ul>
            <li>Whoosh menghubungkan Stasiun Halim di Jakarta Timur dengan Stasiun Tegalluar di Bandung.</li>
            <li>Sepanjang perjalanannya, Whoosh singgah di 3 stasiun lainnya: Karawang, Padalarang, dan Cikarang.</li>
          </ul>
          <p>Harga tiket Whoosh bervariasi tergantung pada kelas, waktu pemesanan, dan hari perjalanan. Berikut kisaran biayanya:</p>
          <ul>
            <li>Eksekutif: Rp 750.000 - Rp 1.100.000</li>
            <li>Bisnis: Rp 500.000 - Rp 700.000</li>
            <li>Ekonomi: Rp 250.000 - Rp 350.000</li>
          </ul>
        </div>
      </div>
      <div className="keretaapi-image-wrapper">
        <img src="/assets/images/keretaapi/Bandara.jpg" alt="Kereta Api" className="keretabandara-image" />
        <div className="keretaapi-overlay"></div>
      </div>
    </div>
  );
};

export default Keretabandara;
