import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';

const linkGoogleFont = document.createElement('link');
linkGoogleFont.rel = 'stylesheet';
linkGoogleFont.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap';
document.head.appendChild(linkGoogleFont);

const AboutUs = () => {
    return (
        <div>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="assets/images/logo/Logoicon.png" />
                <title>Peta Rute Jalan</title>
            </head>
            <body>
                <section className="about_us col-12">
                    <div className="container col-12">
                        <div className="title-about col-12 d-flex align-items-center justify-content-end mb-1">
                            <div className="text1 col-6 me-4">
                                <h2>Selamat datang di halaman "Informasi
                                    Transportasi di Daerah Jabodetabek". Kami menyediakan
                                    informasi terkini moda transportasi yang tersedia
                                    di wilayah (Jabodetabek). </h2>
                            </div>
                        </div>
                        <div className="logo col-6 col-md-4">
                            <img className="img-fluid logo-img" src="assets/images/logo/about_us.png" alt="img logo" />
                            <div className="bg-logo col-6 col-md-4"></div>
                        </div>
                        <div className="title-about col-12 mb-1 d-flex align-items-center justify-content-end">
                            <div className="text1 col-6 me-4">
                                <h2>Tujuan kami adalah membantu masyarakat Jabodetabek
                                    dalam memahami dan memanfaatkan sistem transportasi
                                    yang ada untuk meningkatkan mobilitas dan kenyamanan perjalanan sehari-hari.</h2>
                                <br />
                                <h2>Melalui platform ini, kami berkomitmen untuk menyediakan informasi yang
                                    akurat dan terbaru, serta solusi-solusi inovatif yang dapat diterapkan
                                    untuk mengatasi berbagai masalah transportasi di Jabodetabek. </h2>
                            </div>
                        </div>
                    </div>
                </section>
                <script src="assets/js/script.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
            </body>
        </div>
    );
};

export default AboutUs;
