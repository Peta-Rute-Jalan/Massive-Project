import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'; // Ensure this path is correct

const regions = [
  {
    name: 'Jakarta',
    image: '/assets/images/Daerah/Monas.png',
    description: 'Jakarta memiliki 3 jenis transportasi umum yang sering digunakan oleh masyarakat dalam menjalani mobilitas sehari-hari. Dalam penggunaan transportasi tersebut masyarakat biasanya menggunakan kartu MRT - JAKARTA Card, JakLingko Card.',
    transportImages: [
      { src: '/assets/images/transportasi/Kereta.png', alt: 'Kereta', label: 'Kereta' },
      { src: '/assets/images/transportasi/Bus.png', alt: 'BUS', label: 'Bus' },
      { src: '/assets/images/transportasi/jaklinko.jpg', alt: 'JakLingko', label: 'Jaklingko' }
    ]
  },
  {
    name: 'Bogor',
    image: '/assets/images/Daerah/Bogor.jpg',
    description: 'Bogor memiliki 3 jenis transportasi umum yang sering digunakan oleh masyarakat dalam menjalani mobilitas sehari-hari. Dalam penggunaan transportasi tersebut masyarakat biasanya menggunakan kartu Emoney,Flashh,TapCash,Brizzi.',
    transportImages: [
      { src: '/assets/images/transportasi/Kereta.png', alt: 'Kereta', label: 'Kereta' },
      { src: '/assets/images/transportasi/Bus.png', alt: 'BUS', label: 'Bus' },
      { src: '/assets/images/transportasi/jaklinko.jpg', alt: 'JakLingko', label: 'Jaklingko' }
    ]
  },
  {
    name: 'Depok',
    image: '/assets/images/Daerah/Depok.jpg',
    description: 'Depok memiliki 3 jenis transportasi umum yang sering digunakan oleh masyarakat dalam menjalani mobilitas sehari-hari. Dalam penggunaan transportasi tersebut masyarakat biasanya menggunakan kartu Emoney,Kartu Pintar, serta biasanya menyediakan paket langanan untuk sekali bayar dalam beberapa bulan kedepan.',
    transportImages: [
      { src: '/assets/images/transportasi/Kereta.png', alt: 'Kereta', label: 'Kereta' },
      { src: '/assets/images/transportasi/Bus.png', alt: 'BUS', label: 'Bus' },
      { src: '/assets/images/transportasi/jaklinko.jpg', alt: 'JakLingko', label: 'Jaklingko' }
    ]
  },
  {
    name: 'Tangerang',
    image: '/assets/images/Daerah/Tangerang.jpg',
    description: 'Tangerang memiliki 3 jenis transportasi umum yang sering digunakan oleh masyarakat dalam menjalani mobilitas sehari-hari. Dalam penggunaan transportasi tersebut masyarakat biasanya menggunakan kartu Emoney,Kartu Pintar, serta biasanya menyediakan paket langanan untuk sekali bayar dalam beberapa bulan kedepan, dan juga terdapat pembayaran melalui QR.',
    transportImages: [
      { src: '/assets/images/transportasi/Kereta.png', alt: 'Kereta', label: 'Kereta' },
      { src: '/assets/images/transportasi/Bus.png', alt: 'BUS', label: 'Bus' },
      { src: '/assets/images/transportasi/jaklinko.jpg', alt: 'JakLingko', label: 'Jaklingko' }
    ]
  },
  {
    name: 'Bekasi',
    image: '/assets/images/Daerah/Bekasi.png',
    description: 'Bekasi memiliki 3 jenis transportasi umum yang sering digunakan oleh masyarakat dalam menjalani mobilitas sehari-hari. Dalam penggunaan transportasi tersebut masyarakat biasanya menggunakan kartu Emoney,Kartu Pintar, serta biasanya menyediakan paket langanan untuk sekali bayar dalam beberapa bulan kedepan, dan juga terdapat pembayaran melalui QR.',
    transportImages: [
      { src: '/assets/images/transportasi/Kereta.png', alt: 'Kereta', label: 'Kereta' },
      { src: '/assets/images/transportasi/Bus.png', alt: 'BUS', label: 'Bus' },
      { src: '/assets/images/transportasi/jaklinko.jpg', alt: 'JakLingko', label: 'Jaklingko' }
    ]
  }
];

const Tujuan = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
  };

  const handleBackToSelection = () => {
    setSelectedRegion(null);
  };

  return (
    <div className="tujuan-container">
      {!selectedRegion ? (
        <div className="selection-menu">
          <h2>Pilih Daerah Anda Berada!</h2>
          {regions.map((region) => (
            <button
              key={region.name}
              className="region-button"
              onClick={() => handleSelectRegion(region)}
            >
              {region.name}
            </button>
          ))}
        </div>
      ) : (
        <div className="region-content">
          <div className="btn-daerah col-1 ms-auto pt-3">
            <ul className="btn_daerah">
              <li>
                <button onClick={handleBackToSelection} className="back-button">
                  {selectedRegion.name}
                  <img src="/assets/images/button/Polygon 1.svg" style={{ width: '25px', height: '12px' }} alt="Polygon" />
                </button>
              </li>
            </ul>
          </div>
          <div className="content_daerah col-10 col-lg-9 d-flex justify-content-around">
            <div className="monas col-6 ms-4">
              <img className="img-fluid" src={selectedRegion.image} alt={selectedRegion.name} />
            </div>
            <div className="title-jakarta col-4 align-content-center">
              <h1 className="text-center mb-4">{selectedRegion.name.toUpperCase()}</h1>
              <span className="pt-4">{selectedRegion.description}</span>
            </div>
          </div>
          <section className="pilihan col-12 pb-5">
            <div className="container">
              <div className="row col-12">
                <div className="title">
                  <h1 className="text-center mb-4">Pilih Transportasi</h1>
                </div>
                {selectedRegion.transportImages.map((transport, index) => (
                  <div key={index} className="card-transportasi col-4 text-center">
                    <img src={transport.src} className="img-fluid" alt={transport.alt} />
                    <span>{transport.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Tujuan;
