import React from 'react';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../assets/css/style.css';

const Index = () => {
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
        <section className="main-content">
          <div className="container">
            <div className="col-12 d-flex align-items-center justify-content-between">
              <div className="text-content col-lg-5">
                <img className="img-fluid" src="assets/images/logo/Logoicon.png" alt="" />
                <h1>Mau naik apa hari ini?</h1>
                <h3>Mudah dan cepat memahami rute</h3>
                <span>
                  Sistem informasi transportasi di daerah JaBoDeTaBek yang relevan, membantu mengarahkan masyarakat yang bingung saat menggunakan transportasi publik di daerah JaBoDeTaBek.
                </span>
                <div className="btn-dest">
                  <a href="/Tujuan">
                    <button type="button" className="btn btn-primary">Klik untuk mencari destinasi</button>
                  </a>
                </div>
              </div>
              <div className="trans-animation col-3">
                <h2 className="KRL">KRL</h2>
              </div>
              <div className="background-anim col-4">
                <img className="slide-pict img-fluid rounded-circle" src="assets/images/content/krl.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="why-us">
          <div className="row align-items-center">
            <div className="anim-why col-2">
              <img className="img-fluid" src="assets/images/content/gif-why.gif" alt="" />
            </div>
            <div className="col-2"></div>
            <div className="backdrop col-10">
              <div className="row align-items-center">
                <div className="col-5"></div>
                <div className="content-why col-6">
                  <h1>Mengapa memakai kami?</h1>
                  <span>
                    Selain memudahkan pengguna, kami juga akan mengarahkan anda sampai menuju tempat tujuan.
                  </span>
                  <div className="row align-items-center">
                    <div className="container">
                      <div className="tile-group">
                        <div className="input-container">
                          <div className="icon-why">
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="52" viewBox="0 0 39 52" fill="none"></svg>
                                <path d="M19.5 51.5929C15.9814 48.5055 12.7201 45.1207 9.74998 41.4741C5.29285 35.9977 2.44834e-06 27.8419 2.44834e-06 20.0701C-0.00193055 16.1009 1.14077 12.2204 3.2835 8.91964C5.42622 5.61885 8.47265 3.04616 12.0372 1.52716C15.6018 0.00815788 19.5243 -0.388877 23.3083 0.386303C27.0924 1.16148 30.5678 3.07403 33.2948 5.88191C35.1104 7.74135 36.5494 9.95276 37.5287 12.3882C38.508 14.8235 39.0081 17.4345 38.9999 20.0701C38.9999 27.8419 33.7071 35.9977 29.2499 41.4741C26.2798 45.1207 23.0185 48.5055 19.5 51.5929ZM19.5 11.4729C17.2835 11.4729 15.1578 12.3787 13.5906 13.991C12.0233 15.6032 11.1428 17.79 11.1428 20.0701C11.1428 22.3502 12.0233 24.5369 13.5906 26.1492C15.1578 27.7614 17.2835 28.6672 19.5 28.6672C21.7164 28.6672 23.8421 27.7614 25.4093 26.1492C26.9766 24.5369 27.8571 22.3502 27.8571 20.0701C27.8571 17.79 26.9766 15.6032 25.4093 13.991C23.8421 12.3787 21.7164 11.4729 19.5 11.4729Z" fill="#6884A5"/>
                          </div>
                          <div className="text-why-loc col-6">
                            <h2>Pilih Lokasi</h2>
                          </div>
                          <div className="body-why-loc">
                            <span>
                              Pengguna dapat memilih lokasi sesuai arah dan tujuan melalui kolom pencarian
                            </span>
                          </div>
                        </div>
                        <div className="input-container">
                          <div className="icon-why">
                            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="42" viewBox="0 0 59 42" fill="none"></svg>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.28881 5.20782C10.0001 3.66094 11.1831 2.34282 12.6908 1.41702C14.1985 0.491227 15.9647 -0.00149346 17.7701 3.4004e-06H41.2299C44.9174 3.4004e-06 48.2509 2.04875 49.7038 5.20782L52.6243 11.5603C52.9009 12.1619 53.3987 12.6569 54.0256 12.9491C55.8693 13.8084 57.1784 15.4069 57.584 17.2872L58.8193 23.0588C58.941 23.6122 59 24.1759 59 24.7431V26.1628C59 28.9609 57.5619 31.4669 55.3125 33.0275V39.5313C55.3125 39.9871 55.1182 40.4243 54.7725 40.7466C54.4267 41.0689 53.9577 41.25 53.4688 41.25H46.0938C45.6048 41.25 45.1358 41.0689 44.79 40.7466C44.4443 40.4243 44.25 39.9871 44.25 39.5313V34.9319C39.4857 35.0969 34.1278 35.2344 29.5 35.2344C24.8722 35.2344 19.5142 35.0969 14.75 34.9319V39.5313C14.75 39.9871 14.5557 40.4243 14.21 40.7466C13.8642 41.0689 13.3952 41.25 12.9062 41.25H5.53125C5.04226 41.25 4.57329 41.0689 4.22752 40.7466C3.88175 40.4243 3.6875 39.9871 3.6875 39.5313V33.0275C1.43812 31.4669 0 28.9609 0 26.1628V24.7431C0.000618875 24.1775 0.0611416 23.6133 0.180688 23.0588L1.416 17.2838C1.82162 15.4069 3.13069 13.805 4.97075 12.9491C5.60055 12.6557 6.09836 12.1636 6.37569 11.5603L9.29619 5.20782H9.28881ZM11.0588 27.5C12.0368 27.5 12.9747 27.1378 13.6663 26.4932C14.3578 25.8485 14.7463 24.9742 14.7463 24.0625C14.7463 23.1508 14.3578 22.2765 13.6663 21.6318C12.9747 20.9872 12.0368 20.625 11.0588 20.625C10.0808 20.625 9.1429 20.9872 8.45136 21.6318C7.75982 22.2765 7.37131 23.1508 7.37131 24.0625C7.37131 24.9742 7.75982 25.8485 8.45136 26.4932C9.1429 27.1378 10.0808 27.5 11.0588 27.5ZM47.9338 27.5C48.9118 27.5 49.8497 27.1378 50.5413 26.4932C51.2328 25.8485 51.6213 24.9742 51.6213 24.0625C51.6213 23.1508 51.2328 22.2765 50.5413 21.6318C49.8497 20.9872 48.9118 20.625 47.9338 20.625C46.9558 20.625 46.0179 20.9872 45.3264 21.6318C44.6348 22.2765 44.2463 23.1508 44.2463 24.0625C44.2463 24.9742 44.6348 25.8485 45.3264 26.4932C46.0179 27.1378 46.9558 27.5 47.9338 27.5ZM22.1213 20.625C21.1433 20.625 20.2054 20.9872 19.5139 21.6318C18.8223 22.2765 18.4338 23.1508 18.4338 24.0625C18.4338 24.9742 18.8223 25.8485 19.5139 26.4932C20.2054 27.1378 21.1433 27.5 22.1213 27.5H36.8713C37.8493 27.5 38.7872 27.1378 39.4788 26.4932C40.1703 25.8485 40.5588 24.9742 40.5588 24.0625C40.5588 23.1508 40.1703 22.2765 39.4788 21.6318C38.7872 20.9872 37.8493 20.625 36.8713 20.625H22.1213ZM10.7122 10.9622L14.2374 4.38625C14.3907 4.10112 14.6261 3.86137 14.9172 3.69382C15.2083 3.52626 15.5436 3.43751 15.8858 3.4375H43.1069C43.449 3.43751 43.7844 3.52626 44.0755 3.69382C44.3666 3.86137 44.6019 4.10112 44.7552 4.38625L48.2804 10.9622C48.4246 11.2394 48.4878 11.5472 48.4637 11.8545C48.4396 12.1617 48.3291 12.4577 48.1433 12.7125C47.9575 12.9672 47.7029 13.1719 47.4052 13.3057C47.1076 13.4396 46.7773 13.498 46.4478 13.475C43.0921 13.2241 34.0946 12.8906 29.4963 12.8906C24.898 12.8906 15.8968 13.2241 12.5449 13.475C12.2153 13.498 11.885 13.4396 11.5874 13.3057C11.2897 13.1719 11.0351 12.9672 10.8493 12.7125C10.6635 12.4577 10.553 12.1617 10.5289 11.8545C10.5048 11.5472 10.5681 11.2394 10.7122 10.9622Z" fill="#279DF2"/>
                                
                          </div>
                          <div className="text-why-trans col-6">
                            <h2>Pilih Transportasi</h2>
                          </div>
                          <div className="body-why-trans">
                            <span>
                              Pengguna juga dimudahkan dengan pemilihan dan ketersediaan tiap moda transportasi
                            </span>
                          </div>
                        </div>
                        <div className="input-container">
                          <div className="icon-why">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="55" viewBox="0 0 22 55" fill="none"></svg>
                                <path d="M2.5 2.75001L3.54765 0.253116C2.77355 -0.139886 1.87076 -0.0718513 1.15261 0.433585C0.434475 0.939021 0 1.81219 0 2.75001H2.5ZM2.5 44H0C0 45.0726 0.566975 46.0474 1.45235 46.4969L2.5 44ZM18.75 52.25L17.7024 54.7469C18.4765 55.1398 19.3792 55.0719 20.0974 54.5665C20.8155 54.061 21.25 53.1878 21.25 52.25H18.75ZM18.75 11H21.25C21.25 9.92737 20.683 8.95263 19.7976 8.50314L18.75 11ZM1.45235 46.4969L17.7024 54.7469L19.7976 49.7531L3.54765 41.5031L1.45235 46.4969ZM19.7976 8.50314L3.54765 0.253116L1.45235 5.2469L17.7024 13.4969L19.7976 8.50314ZM16.25 11V52.25H21.25V11H16.25ZM5 44V2.75001H0V44H5Z" fill="black"/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="55" viewBox="0 0 23 55" fill="none"></svg>
                                <path d="M2.75 52.25H0.25C0.25 53.1744 0.67225 54.037 1.37375 54.5459C2.07538 55.0547 2.96237 55.1418 3.73475 54.7777L2.75 52.25ZM20.25 44L21.2347 46.5277C22.154 46.0943 22.75 45.1002 22.75 44H20.25ZM20.25 2.75001H22.75C22.75 1.82561 22.3278 0.963076 21.6263 0.454202C20.9246 -0.054672 20.0376 -0.141778 19.2653 0.222363L20.25 2.75001ZM2.75 11L1.76525 8.47235C0.846 8.90575 0.25 9.89987 0.25 11H2.75ZM3.73475 54.7777L21.2347 46.5277L19.2653 41.4724L1.76525 49.7224L3.73475 54.7777ZM19.2653 0.222363L1.76525 8.47235L3.73475 13.5277L21.2347 5.27766L19.2653 0.222363ZM22.75 44V2.75001H17.75V44H22.75ZM0.25 11V52.25H5.25V11H0.25Z" fill="black"/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="55" viewBox="0 0 22 55" fill="none"></svg>
                                <path d="M3.25 44H0.75C0.75 45.0726 1.317 46.0474 2.20237 46.4969L3.25 44ZM19.5 52.25L18.4524 54.7469C19.2265 55.1398 20.1292 55.0719 20.8474 54.5665C21.5655 54.061 22 53.1878 22 52.25H19.5ZM19.5 11H22C22 9.92737 21.433 8.95263 20.5476 8.50314L19.5 11ZM3.25 2.75001L4.29763 0.253116C3.5235 -0.139886 2.62075 -0.0718513 1.90263 0.433585C1.1845 0.939021 0.75 1.81219 0.75 2.75001H3.25ZM2.20237 46.4969L18.4524 54.7469L20.5476 49.7531L4.29763 41.5031L2.20237 46.4969ZM20.5476 8.50314L4.29763 0.253116L2.20237 5.2469L18.4524 13.4969L20.5476 8.50314ZM17 11V52.25H22V11H17ZM5.75 44V2.75001H0.75V44H5.75Z" fill="black"/>
                          </div>
                          <div className="text-why-rute col-6">
                            <h2>Tampilan Rute</h2>
                          </div>
                          <div className="body-why-rute">
                            <span>
                              Penampilan rute perjalanan yang akan ditempuh dan arahan agar pengguna sampai tempat tujuan
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>    
                </div>
              </div>
            </div>
          </div>      
        </section>

        <section className="trans-pub">
          <div className="container">
            <div className="row">
              <div className="title justify-content-center">
                <h1>Transportasi Publik</h1>
                <h2>JABODETABEK</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="kereta col-10">
              <div className="row align-items-center">
                <div className="gambar col-6 align-items-center">
                  <img className="img-fluid" src="assets/images/content/kereta.png" alt="" />
                </div>
                <div className="text col-5 align-items-center">
                  <h1>Kereta Api</h1>
                  <span>Informasi Lainnya</span>
                  <div className="flex-container">
                  <a href="/keretaapi">
                    <button type="button" className="btn btn-primary">Lihat</button>
                  </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row align-items-center">
            <div className="col-2"></div>
            <div className="kereta col-10">
              <div className="row align-items-center">
                <div className="gambar col-6 align-items-center">
                  <img className="img-fluid" src="assets/images/content/busbiru.png" alt="" />
                </div>
                <div className="text col-5 align-items-center">
                  <h1>Bus</h1>
                  <span>Informasi Lainnya</span>
                  <div className="flex-container">
                  <a href="/bus">
                  <button type="button" className="btn btn-primary">Lihat</button>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="kereta col-10">
              <div className="row align-items-center">
                <div className="gambar col-6 align-items-center">
                  <img className="img-fluid" src="assets/images/content/mikrotrans.png" alt="" />
                </div>
                <div className="text col-5 align-items-center">
                  <h1>Mikrotrans</h1>
                  <span>Informasi Lainnya</span>
                  <div className="flex-container">
                    <button type="button" className="btn btn-primary">Lihat</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="title justify-content-center">
                <h1>Peta Rute Jalan</h1>
                <h2>Mudah dan cepat memilih rute yang ingin anda ketahui</h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="btn-footer col-8 justify-content-center">
              <a href="/Tujuan">
                  <button type="button" className="btn btn-primary">Search Bar</button>
                </a>
                <a href="/">
                <button type="button" className="btn btn-primary">Transportasi</button>
                </a>
                <a href="/Chat">
                <button type="button" className="btn btn-primary">Live Chat</button>
                </a>
                <a href="/AboutUs">
                  <button type="button" className="btn btn-primary3">About Us</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="copyright">
          <div className="row align-items-center justify-content-center">
            <span>Copyright © 2024 All Right Reserved</span>
          </div>
        </div>
zz
        <script src="assets/js/script.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
      </body>
    </div>
  );
};

export default Index;
