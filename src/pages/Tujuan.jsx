import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';

const Tujuan = () => {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="assets/images/logo/Logoicon.png" />
        <title>Peta Rute Jalan</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        {/* Hero Section */}
        <div className="daerah">
          <section className="col-12 mb-5 pb-5">
            <div className="btn-daerah col-1 ms-auto pt-3">
              <ul className="btn_daerah">
                <li>
                  <a href="#">
                    Jakarta 
                    <img src="assets/images/button/Polygon 1.svg" style={{ width: '25px', height: '12px' }} alt="Polygon" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="content_daerah col-10 col-lg-9 d-flex justify-content-around">
              <div className="monas col-6 ms-4">
                <img className="img-fluid" src="assets/images/Daerah/Monas.png" alt="Monas" />
              </div>

              <div className="title-jakarta col-4 align-content-center">
                <h1 className="text-center mb-4">JAKARTA</h1>
                <span className="pt-4">
                  Jakarta memiliki 3 jenis transportasi umum yang sering digunakan oleh masyarakat dalam menjalani mobilitas sehari-hari. Dalam penggunaan transportasi tersebut masyarakat biasanya menggunakan kartu MRT - JAKARTA Card, JakLingko Card.
                </span>
              </div>
            </div>
          </section>
          <section className="pilihan col-12 pb-5">
            <div className="container">
              <div className="row col-12">
                <div className="title">
                  <h1 className="text-center mb-4">Pilih Transportasi</h1>
                </div>
                <div className="card-transportasi col-4 text-center">
                  <img src="assets/images/transportasi/Kereta.png" className="img-fluid" alt="Kereta" />
                  <span>Kereta</span>
                </div>
                <div className="card-transportasi col-4 text-center">
                  <img src="assets/images/transportasi/Bus.png" className="img-fluid" alt="BUS" />
                  <span>Bus</span>
                </div>
                <div className="card-transportasi col-4 text-center">
                  <img src="assets/images/transportasi/jaklinko.jpg" className="img-fluid" alt="JakLingko" />
                  <span>Jaklingko</span>
                </div>
              </div>
            </div>
          </section>
        </div>
        <script src="assets/js/script.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
      </body>
    </div>
  );
};

export default Tujuan;
