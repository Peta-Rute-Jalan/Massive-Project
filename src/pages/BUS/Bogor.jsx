import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';

const Bogor = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/bus');
  };

  return (
    <div className="whoosh-container">
      <button className="whoosh-back-button" onClick={handleBackClick}>Kembali</button>
      <div className="whoosh-content-frame">
        <div className="whoosh-content">
          <img src="/assets/images/keretaapi/bogor.jpg" alt="Whoosh" className="whoosh-image" />
          <div className="whoosh-text">
            <p>Biskita Trans Pakuan, disingkat Trans Pakuan, adalah sistem bus rapid transit (BRT) yang beroperasi di Kota Bogor, Jawa Barat. Diluncurkan pada tanggal 23 Juli 2022, Trans Pakuan hadir sebagai solusi mobilitas modern dan ramah lingkungan bagi masyarakat Bogor.</p>
            <p>Tarif Trans Pakuan sangat terjangkau, yaitu Rp 4.000 untuk sekali jalan.
            Trans Pakuan memiliki sistem pengaturan waktu yang baik sehingga bus beroperasi dengan tepat waktu.</p>
          </div>
        </div>
        <div className="whoosh-details">
        <p>
        Saat ini, Trans Pakuan memiliki 4 koridor utama yaitu:</p>

          <ul>
            <li>Koridor 1: Terminal Bubat - Ciawi: Koridor ini melayani 24 halte di sepanjang Jalan Raya Bogor, Jalan Raya Tegar Beringin, dan Jalan Raya Ciawi.</li>
            <li>Koridor 2: Terminal Baranangsiang - Botanis: Koridor ini melayani 19 halte di sepanjang Jalan Raya Pajajaran, Jalan Raya Baranangsiang, dan Jalan Raya Tajur.</li>
            <li>Koridor 3: Terminal Bubat - Cileungsi: Koridor ini melayani 23 halte di sepanjang Jalan Raya Tegar Beringin, Jalan Raya Cileungsi, dan Jalan Raya Narogong.</li>
            <li>Koridor 4: Terminal Bubat - Citeureup: Koridor ini melayani 21 halte di sepanjang Jalan Raya Bogor, Jalan Raya Tajur, dan Jalan Raya Citeureup.</li>
          </ul>
          <p>Trans Pakuan menggunakan sistem pembayaran elektronik dengan kartu Tapcash BNI, Flazz BCA, Brizzi BRI, Mandiri e-Money, dan Jak Lingko Card.
          </p>
          <p>Informasi lebih lanjut:</p>
          <ul>
            <li>Situs web resmi Biskita Trans Pakuan: <a href="https://bptj.dephub.go.id/">https://bptj.dephub.go.id/</a></li>
          </ul>
        </div>
      </div>
      <div className="keretaapi-image-wrapper">
        <img src="/assets/images/keretaapi/rutebogor.jpg" alt="Kereta Api" className="" />
        <div className="keretaapi-overlay"></div>
      </div>
    </div>
  );
};

export default Bogor;
