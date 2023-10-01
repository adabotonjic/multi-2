import React from 'react'; 
import { Link, Outlet } from 'react-router-dom';

import Figure from 'react-bootstrap/Figure';
import lucchetto from '../pages/img/lucchetto.webp';
import riparazioni from '../pages/img/riparazioni.webp';
import zanzariera from '../pages/img/zanzariera.webp';
import conversioni from '../pages/img/conversioni.webp';

function Servizi() {
  const subPageList = [
    { src: conversioni, alt: 'Conversioni serrature porte blindate', width: '400', height:'400', url:'conversioni-serrature-porte-blindate' },
    { src: zanzariera, alt: 'Fornitura e installazioni zanzariere', width: '400', height:'400', url:'fornitura-e-installazioni-zanzariere' },
    { src: riparazioni, alt: 'Riparazioni e sostituzioni basculanti e sezionali', width: '400', height:'400', url:'riparazioni-e-sostituzioni-basculanti-e-sezionali' },
    { src: lucchetto, alt: 'Sostituzione serrature di tutti i tipi', width: '400', height:'400', url:'sostituzione-serrature-di-tutti-i-tipi' },
  ];

  return (
    <main>
        <div className="page-title-wrap">
          <div className="container">
            <div className="row">
              <h1 className="page-title fw-bold" id="entry-title">
                Servizi
              </h1>
            </div>
          </div>
        </div>
        <div className="page-content-wrap mt-5 pt-md-3 pt-xl-5">
          <div className="container">
            <div className="row align-items-center">
            {subPageList.map((subPageId) => (
                <div className="col-6 col-lg-4 text-center" key={subPageId.alt}>
                <Link to={`./${subPageId.url}`}>
                  <Figure className='service-item mb-0 mb-5'>
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
              </div>
            ))}
              <div className="col-6 col-lg-4 text-center">
                  <div className='service-item noimg mx-auto mb-5'>
                    <h3>Manutenzioni condominiali</h3>
                  </div>
                </div>
                <div className="col-6 col-lg-4 text-center">
                <div className='service-item noimg mx-auto mb-5'>
                  <h3>Fornitura e posa in opera di cassette postali di tutti i tipi</h3>
                </div>
              </div>
          </div>
        </div>
      </div>

      <Outlet />
    </main>
  );
};
export default Servizi;