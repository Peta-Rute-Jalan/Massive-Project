import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';

const KRL = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/keretaapi');
  };

  return (
    <div className="whoosh-container">
      <button className="whoosh-back-button" onClick={handleBackClick}>Kembali</button>
      <div className="whoosh-content-frame">
        <div className="whoosh-content">
          <img src="/assets/images/content/krl.jpg" alt="Whoosh" className="lrt-image" />
          <div className="whoosh-text">
            <p>KRL, kepanjangan dari Kereta Rel Listrik, atau lebih dikenal dengan sebutan KRL Commuter Line adalah kereta api listrik yang melayani wilayah Jabodetabek (Jakarta, Bogor, Depok, Tangerang, dan Bekasi). KRL menjadi tulang punggung transportasi publik di Jabodetabek karena menawarkan beberapa keunggulan:</p>
          </div>
        </div>
        <div className="whoosh-details">
        <ul>
            <li>Jangkauan Luas: Jaringan KRL Commuter Line menjangkau berbagai daerah di Jabodetabek, sehingga memudahkan mobilitas masyarakat.</li>
            <li>Cepat dan Efisien: KRL menghindari kemacetan lalu lintas dan beroperasi dengan jadwal teratur, membuat perjalanan menjadi lebih cepat dan efisien.</li>
            <li>Harga Terjangkau: Biaya tiket KRL Commuter Line sangat terjangkau, mulai dari Rp 3.000 sekali jalan.</li>
            <li>Kapasitas Besar: KRL dapat mengangkut banyak penumpang sekaligus, sehingga efektif mengurangi kepadatan lalu lintas.</li>
          </ul>
          
          <p><strong>KRL Commuter Line menggunakan sistem tiket elektronik dengan kartu Multi Trip Card (MTC) atau kartu bank yang berlogo EMoney, Brizzi, BNI TapCash, Mandiri e-Money, dan Jak Lingko Card.</strong></p>
          <p><strong>Biaya tiket KRL Commuter Line dihitung berdasarkan jauhnya perjalanan. Umumnya, tarif KRL berkisar antara Rp 3.000 - Rp 7.000 sekali jalan. Anda dapat menggunakan aplikasi KRL Access untuk mengecek tarif terbaru.</strong></p>
          <p>Informasi lebih lanjut:</p>
          <ul>
            <li>Situs web resmi KAI Commuter: <a href="https://commuterline.id/" target="_blank" rel="noopener noreferrer">https://commuterline.id/</a></li>
            <li>Aplikasi KRL Access: Download the KRL Access application</li>
          </ul>
        </div>
      </div>
      <div className="keretaapi-image-wrapper">
        <img src="/assets/images/keretaapi/ruteKRL.jpg" alt="Kereta Api" className="keretaapi-image" />
        <div className="keretaapi-overlay"></div>
      </div>
    </div>
  );
};

export default KRL;
