import React from 'react';
import Figure from 'react-bootstrap/Figure';
import zanzariere1 from '../components/img/zanzariera11.webp';
import zanzariere2 from '../components/img/zanzariera21.webp';
import zanzariere3 from '../components/img/zanzariera31.webp';

const ZanzarierePage = () => {
  return (
    <main className="page-zanzariere">
        <div className="page-title-wrap mb-0 mb-xl-3">
        <div className="container">
          <div className="row">
            <h1 className="page-title fw-bold" id="entry-title">
              Fornitura e Installazioni Zanzariere
            </h1>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container my-3 my-xl-5">
        <div className='row'>
          <div className='col-lg-6 pe-lg-5'>
            <div className="row">
              <div className='col-4 col-md-6 col-xl-4'>
                <Figure className='mb-3 mb-xl-4 '>
                  <Figure.Image
                  className='mx-auto w-100 mb-0'
                      width='100%'
                      height='100%'
                      alt='Zanzariera'
                      src={zanzariere1}
                      loading="lazy"
                  />
                  </Figure>
              </div>
              <div className='col-4 col-md-6 col-xl-4'>
                <Figure className='mb-3 mb-xl-4 '>
                  <Figure.Image
                  className='mx-auto w-100 mb-0'
                      width='100%'
                      height='100%'
                      alt='Zanzariera'
                      src={zanzariere2}
                      loading="lazy"
                  />
                  </Figure>
              </div>
              <div className='col-4 col-md-8 col-xl-4'>
              <Figure className='mb-3 mb-xl-4 '>
                  <Figure.Image
                  className='mx-auto w-100 mb-0'
                      width='100%'
                      height='100%'
                      alt='Zanzariera'
                      src={zanzariere3}
                      loading="lazy"
                  />
                  </Figure>
              </div>
            </div>
            
            </div>
            <div className='col-lg-6'>
            <p>Con l’installazione di <strong>zanzariere ai serramenti</strong> potrete eliminare dalla vostra abitazione la fastidiosa presenza di zanzare e altri insetti.</p>
            <p><strong>Contattami per un intervento, un sopralluogo o per un preventivo,&nbsp;sarò a vostra disposizione con cordialità e professionalità.</strong></p>

            <p><a className="text-white text-decoration-none main-btn fw-bold py-2 px-3 mt-5 mb-3" href="https://www.ghirardellinicola.it/#chiedi-preventivo">Chiedi preventivo</a></p>
            <br></br>
            </div>
        </div>
       
      </div>
    </main>
  );
};

export default ZanzarierePage;
