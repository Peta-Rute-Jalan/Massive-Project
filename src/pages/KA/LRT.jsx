import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';

const LRT = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/keretaapi');
  };

  return (
    <div className="whoosh-container">
      <button className="whoosh-back-button" onClick={handleBackClick}>Kembali</button>
      <div className="whoosh-content-frame">
        <div className="whoosh-content">
          <img src="/assets/images/content/lrt.jpg" alt="Whoosh" className="lrt-image" />
          <div className="whoosh-text">
            <p>LRT, singkatan dari Light Rail Transit, adalah kereta api ringan yang beroperasi di wilayah perkotaan. LRT menjadi solusi transportasi publik yang efektif untuk mengatasi kemacetan dan kepadatan lalu lintas. Saat ini, LRT sudah beroperasi di beberapa kota besar di Indonesia, salah satunya Jakarta.
            LRT Jakarta saat ini memiliki 1 jalur yang beroperasi, yaitu:</p>
          </div>
        </div>
        <div className="whoosh-details">
          <ul>          
            <li>Cawang - Cibubudur: Jalur sepanjang 5,8 km ini melayani 6 stasiun: Cawang, Cililit, Pulogadung, Kampung Melayu, Tebet, dan Cibubudur.</li>
          </ul>
          <p><strong>Keuntungan Menggunakan LRT:</strong></p>
          <ul>
            <li>Cepat dan Efisien: LRT menghindari kemacetan lalu lintas sehingga perjalanan menjadi lebih cepat dan efisien.</li>
            <li>Terjangkau: Biaya tiket LRT tergolong murah dibandingkan dengan moda transportasi lain.</li>
            <li>Nyaman: LRT menawarkan perjalanan yang nyaman dengan kabin ber-AC dan tempat duduk yang cukup.</li>
            <li>Ramah Lingkungan: LRT menggunakan tenaga listrik sehingga lebih ramah lingkungan dibanding kendaraan berbahan bakar fosil.</li>
          </ul>
          <p>Biaya tiket LRT Jakarta sangat terjangkau, yaitu hanya Rp 5.000 untuk sekali jalan. Tiket dapat dibeli menggunakan kartu elektronik seperti MRT-Jakarta Card, Jak Lingko Card, dan kartu perbankan yang berlogo Bersama.</p>
          <p>Informasi lebih lanjut:</p>
          <ul>
            <li>Situs web resmi KAI Commuter: <a href="https://commuterline.id/" target="_blank" rel="noopener noreferrer">https://commuterline.id/</a></li>
            <li>Aplikasi KRL Access: Download the KRL Access application</li>
          </ul>
        </div>
      </div>
      <div className="keretaapi-image-wrapper">
        <img src="/assets/images/keretaapi/ruteLRT.jpg" alt="Kereta Api" className="keretaapi-image" />
        <div className="keretaapi-overlay"></div>
      </div>
    </div>
  );
};

export default LRT;
