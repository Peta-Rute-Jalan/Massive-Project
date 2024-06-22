import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';

const Jakarta = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/bus');
  };

  return (
    <div className="whoosh-container">
      <button className="whoosh-back-button" onClick={handleBackClick}>Kembali</button>
      <div className="whoosh-content-frame">
        <div className="whoosh-content">
          <img src="/assets/images/keretaapi/Jakarta.jpg" alt="Whoosh" className="whoosh-image" />
          <div className="whoosh-text">
            <p>Transjakarta merupakan sistem bus rapid transit (BRT) yang menjadi ikon transportasi publik di Ibukota Jakarta. Sejak diluncurkan pada tahun 2004, Transjakarta telah berkembang pesat dan menjadi pilihan utama bagi masyarakat Jakarta untuk bepergian ke berbagai tempat.
            Transjakarta menggunakan jalur khusus (jalur Transjakarta) yang terpisah dari kendaraan lain, sehingga terhindar dari kemacetan dan memungkinkan perjalanan yang lebih cepat.</p>
          </div>
        </div>
        <div className="whoosh-details">
        <p>
 Tarif Transjakarta sangat terjangkau, mulai dari Rp 3.500 untuk sekali jalan.
Transjakarta menggunakan sistem pembayaran elektronik dengan kartu Transjakarta Card atau kartu bank yang berlogo Gcash, Flazz BCA, Tapcash BNI, Brizzi, dan Jak Lingko Card.</p>
          <p>Informasi lebih lanjut:</p>
          <ul>
            <li>Situs web resmi Transjakarta: <a href="https://https://transjakarta.co.id/">https://transjakarta.co.id/</a></li>
            <li>Aplikasi TIJE: <a href="https://support.apple.com/en-tj/118274">https://support.apple.com/en-tj/118274</a></li>
          </ul>
        </div>
      </div>
      <div className="keretaapi-image-wrapper">
        <img src="/assets/images/keretaapi/rutejakarta.jpg" alt="Kereta Api" className="" />
        <div className="keretaapi-overlay"></div>
      </div>
    </div>
  );
};

export default Jakarta;
