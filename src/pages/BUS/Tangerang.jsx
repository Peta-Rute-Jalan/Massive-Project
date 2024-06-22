import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';

const Tangerang = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/bus');
  };

  return (
    <div className="whoosh-container">
      <button className="whoosh-back-button" onClick={handleBackClick}>Kembali</button>
      <div className="whoosh-content-frame">
        <div className="whoosh-content">
          <img src="/assets/images/keretaapi/tangerang.jpg" alt="Whoosh" className="whoosh-image" />
          <div className="whoosh-text">
            <p>Trans Tangerang Ayo, disingkat Tayo, adalah sistem bus rapid transit (BRT) yang beroperasi di Kota Tangerang, Banten. Diluncurkan pada tanggal 1 Desember 2016, Tayo hadir sebagai solusi mobilitas modern dan nyaman bagi masyarakat Tangerang.
Tayo melayani 4 koridor utama dengan total 34 halte di seluruh wilayah Kota Tangerang.
Tarif Tayo sangat terjangkau, yaitu Rp 3.000 untuk sekali jalan.</p>
          </div>
        </div>
        <div className="whoosh-details">
          <p><strong>Tayo menggunakan sistem pembayaran elektronik dengan kartu Tayo Card atau kartu bank yang berlogo Gcash, Flazz BCA, Tapcash BNI, Brizzi, dan Jak Lingko Card.
          </strong></p>
          <p>Informasi lebih lanjut:</p>
          <ul>
            <li>Situs web resmi Trans Tangerang Ayo: <a href="https://megapolitan.kompas.com/read/2022/02/25/01300081/cara-naik-bus-tayo-tangerang-dan-rutenya" target="_blank" rel="noopener noreferrer">https://megapolitan.kompas.com/read/2022/02/25/01300081/cara-naik-bus-tayo-tangerang-dan-rutenya</a></li>
            <li>Aplikasi Trans Tangerang Ayo: <a href="https://www.konsistensi.com/2014/03/mengatasi-angkettidak-valid.html" target="_blank" rel="noopener noreferrer">https://www.konsistensi.com/2014/03/mengatasi-angkettidak-valid.html</a></li>
          </ul>
        </div>
      </div>
      <div className="keretaapi-image-wrapper">
        <img src="/assets/images/keretaapi/bus.jpg" alt="Kereta Api" className="" />
        <div className="keretaapi-overlay"></div>
      </div>
    </div>
  );
};

export default Tangerang;
