import React from 'react'; 
import { Link, Outlet } from 'react-router-dom';

import Figure from 'react-bootstrap/Figure';
import lucchetto from '../pages/img/lucchetto.webp';
import riparazioni from '../pages/img/riparazioni.webp';
import zanzariera from '../pages/img/zanzariera.webp';
import conversioni from '../pages/img/conversioni.webp';

function ServiziHome() {
  const subPageList = [
    { src: conversioni, alt: 'Conversioni serrature porte blindate', width: '400', height:'400', url:'servizi/conversioni-serrature-porte-blindate' },
    { src: zanzariera, alt: 'Fornitura e installazioni zanzariere', width: '400', height:'400', url:'servizi/fornitura-e-installazioni-zanzariere' },
    { src: riparazioni, alt: 'Riparazioni, sostituzioni basculanti e sezionali', width: '400', height:'400', url:'servizi/riparazioni-e-sostituzioni-basculanti-e-sezionali' },
    { src: lucchetto, alt: 'Sostituzione serrature di tutti i tipi', width: '400', height:'400', url:'servizi/sostituzione-serrature-di-tutti-i-tipi' },
  ];

  return (
    <>

        <div 
        className="servizi-section  mt-4 pt-3 mt-xl-3 pt-md-3 pt-xl-5" 
        style={{borderBottom:'1px solid', borderBottomColor: 'rgba(0,0,0,.1)'}}>
          <div className="container">

            <div className="row">
              <h2 className="home-title text-center mb-5 mb-lg-3" id="entry-title">
                Servizi
              </h2>
            </div>

            <div className="row align-items-center">
            {subPageList.map((subPageId) => (
                <div className="col-sm-6 col-xl-3 text-center p-lg-4 mb-3" key={subPageId.alt}>
                <Link to={`./${subPageId.url}`}>
                  <Figure className='service-item  mb-3 mb-xl-4 '>
                    <Figure.Image
                    className='mx-auto w-100 mb-0'
                        width={subPageId.width}
                        height={subPageId.height}
                        alt={subPageId.alt}
                        src={subPageId.src}
                        loading="lazy"
                    />
                    </Figure>
                </Link>
                <h3 className="text-uppercase px-md-5 px-xl-0 mb-xl-4 fw-bold">{subPageId.alt}</h3>
                <Link className="text-white text-decoration-none main-btn fw-bold py-2 px-3 mt-3 mb-5 mx-auto" to={`./${subPageId.url}`}>
                  Scopri di più
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};
export default ServiziHome;