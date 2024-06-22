import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';

const Bekasi = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/bus');
  };

  return (
    <div className="whoosh-container">
      <button className="whoosh-back-button" onClick={handleBackClick}>Kembali</button>
      <div className="whoosh-content-frame">
        <div className="whoosh-content">
          <img src="/assets/images/keretaapi/bekasi.jpg" alt="Whoosh" className="whoosh-image" />
          <div className="whoosh-text">
            <p>BISKITA Trans Patriot, disingkat Trans Patriot, adalah sistem bus rapid transit (BRT) yang beroperasi di Kota Bekasi, Jawa Barat. Diluncurkan pada tanggal 3 Maret 2024, Trans Patriot hadir sebagai solusi mobilitas modern dan gratis bagi masyarakat Bekasi</p>
            <p>Menariknya, naik Trans Patriot tidak dikenakan biaya alias gratis. Pengguna hanya perlu tap kartu pembayaran elektronik (e-money) saat naik dan turun bus.</p>
          </div>
        </div>
        <div className="whoosh-details">
        <p>Rute dan Halte:</p>
        <p>Saat ini, Trans Patriot memiliki satu koridor utama yaitu:</p>

        <ul>
            <li>Summarecon Bekasi - Vida Bantar Gebang via Revo Mall: Koridor ini melayani 23 halte di sepanjang Jalan Ahmad Yani, Jalan Sultan Agung, dan Jalan Raya Bantar Gebang.</li>
          </ul><p><strong>Meskipun gratis, penumpang tetap perlu men tap kartu e-money saat naik dan turun bus Trans Patriot. Hal ini dilakukan untuk pendataan jumlah penumpang dan menjaga kelancaran operasional bus.
          </strong></p>
          <p>Informasi lebih lanjut:</p>
          <ul>
            <li>Situs web resmi Biskita Trans Patriot: <a href="https://bekasikota.go.id/detail/biskita-trans-bekasi-patriot-resmi-diluncurkan-menteri-perhubungan-bersama-pj-wali-kota-bekasi">https:https://bekasikota.go.id/detail/biskita-trans-bekasi-patriot-resmi-diluncurkan-menteri-perhubungan-bersama-pj-wali-kota-bekasi</a></li>
          </ul>
        </div>
      </div>
      <div className="keretaapi-image-wrapper">
        <img src="/assets/images/keretaapi/rutebekasi.jpg" alt="Kereta Api" className="" />
        <div className="keretaapi-overlay"></div>
      </div>
    </div>
  );
};

export default Bekasi;
