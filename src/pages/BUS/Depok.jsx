import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';

const Depok = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/bus');
  };

  return (
    <div className="whoosh-container">
      <button className="whoosh-back-button" onClick={handleBackClick}>Kembali</button>
      <div className="whoosh-content-frame">
        <div className="whoosh-content">
          <img src="/assets/images/keretaapi/depok.jpg" alt="Whoosh" className="whoosh-image" />
          <div className="whoosh-text">
            <p>Depok Go merupakan layanan bus rapid transit (BRT) yang beroperasi di Kota Depok, Jawa Barat. Diluncurkan pada tanggal 27 November 2023, Depok Go hadir sebagai solusi mobilitas modern dan nyaman bagi masyarakat Depok.
            Tarif Depok Go sangat terjangkau, yaitu Rp 3.000 untuk sekali jalan.</p>
          </div>
        </div>
        <div className="whoosh-details">
        <p>
        Rute dan Halte:</p>
        <p>
        Saat ini, Depok Go memiliki 2 koridor utama yaitu:</p>

          <ul>
            <li>Koridor 1: Terminal Jatijajar - Margonda: Koridor ini melayani 24 halte di sepanjang Jalan Raya Bogor, Jalan Margonda Raya, dan Jalan Raya Sawangan.</li>
            <li>Koridor 2: Terminal Depok - Cibinong: Koridor ini melayani 21 halte di sepanjang Jalan Raya Sawangan, Jalan Raya Bogor, dan Jalan Raya Cibinong.</li>
          </ul>
          <p>Depok Go menggunakan sistem pembayaran elektronik dengan kartu Jak Lingko Card dan Gcash.
          </p>
          <p>Informasi lebih lanjut:</p>
          <ul>
            <li>Situs web resmi Depok Go: <a href="https://dishub.depok.go.id/">https://dishub.depok.go.id/</a></li>
          </ul>
        </div>
      </div>
      <div className="keretaapi-image-wrapper">
        <img src="/assets/images/keretaapi/rutedepok.jpg" alt="Kereta Api" className="" />
        <div className="keretaapi-overlay"></div>
      </div>
    </div>
  );
};

export default Depok;
