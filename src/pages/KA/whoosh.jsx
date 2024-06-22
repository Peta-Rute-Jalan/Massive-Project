import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';

const Whoosh = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/keretaapi');
  };

  return (
    <div className="whoosh-container">
      <button className="whoosh-back-button" onClick={handleBackClick}>Kembali</button>
      <div className="whoosh-content-frame">
        <div className="whoosh-content">
          <img src="/assets/images/content/whoosh.png" alt="Whoosh" className="whoosh-image" />
          <div className="whoosh-text">
            <p>Kereta Api Cepat Whoosh, singkatan dari Waktu Hemat, Operasi Optimal, Sistem Hebat, merupakan kereta api pertama di Indonesia dan Asia Tenggara yang menawarkan kecepatan tinggi hingga 350 km/jam. Diluncurkan pada 2 Oktober 2023, Whoosh hadir sebagai solusi mobilitas baru yang mempersingkat waktu tempuh antara Jakarta dan Bandung.</p>
          </div>
        </div>
        <div className="whoosh-details">
          <p><strong>Rute dan Stasiun:</strong></p>
          <p>Kereta Bandara Soekarno-Hatta melayani 2 rute utama:</p>
          <div className="whoosh-routes">
            <div className="whoosh-route-frame">
              <p>Bandara Soekarno-Hatta - Manggarai</p>
            </div>
            <div className="whoosh-route-frame">
              <p>Bandara Soekarno-Hatta - Duri</p>
            </div>
          </div>
          <p></p>
          <ul>
            <li>Bandara Soekarno-Hatta - Manggarai: Rute ini menghubungkan Terminal 1, 2, 3, dan 4 Bandara Soekarno-Hatta dengan Stasiun Manggarai di Jakarta Selatan.</li>
            <li>Bandara Soekarno-Hatta - Duri: Rute ini menghubungkan Terminal 1, 2, 3, dan 4 Bandara Soekarno-Hatta dengan Stasiun Duri di Jakarta Barat.</li>
          </ul>
          <p>Kereta Bandara Soekarno-Hatta menyediakan 2 kelas layanan:</p>
          <ul>
            <li>Eksekutif: Menawarkan kursi yang lebih luas dan nyaman, AC, colokan listrik, toilet, dan bagasi kabin.</li>
            <li>Premium: Menyediakan kursi standar dengan legroom yang cukup, AC, colokan listrik, dan toilet.</li>
          </ul>
          <p>Selain itu, terdapat beberapa stasiun pemberhentian lainnya, yaitu:</p>
          <ul>
            <li>Batu Ceper (Tangerang)</li>
            <li>BNI City (Sudirman)</li>
          </ul>
          <p>Harga tiket Kereta Bandara Soekarno-Hatta bervariasi tergantung pada kelas, rute, dan waktu pemesanan. Berikut kisaran biayanya:</p>
          <ul>
            <li>Eksekutif: Rp 70.000 - Rp 100.000</li>
            <li>Premium: Rp 30.000 - Rp 50.000</li>
          </ul>
          <p>Informasi lebih lanjut:</p>
          <ul>
            <li>Situs web resmi KAI Commuter: <a href="https://commuterline.id/" target="_blank" rel="noopener noreferrer">https://commuterline.id/</a></li>
            <li>Aplikasi KRL Access: Download the KRL Access application</li>
          </ul>
        </div>
      </div>
      <div className="keretaapi-image-wrapper">
        <img src="/assets/images/keretaapi/KCIC.jpg" alt="Kereta Api" className="keretaapi-image" />
        <div className="keretaapi-overlay"></div>
      </div>
    </div>
  );
};

export default Whoosh;
