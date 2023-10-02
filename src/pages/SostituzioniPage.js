import React from 'react';
import Figure from 'react-bootstrap/Figure';
import sostituzioni from '../components/img/marche-serrature.webp';


const SostituzioniPage = () => {
  const homeBase = 'https://ghiga-react.netlify.app/#contatti';
  return (
    <main className="page-sostituzioni">
        <div className="page-title-wrap mb-0 mb-xl-3">
        <div className="container">
          <div className="row">
            <h1 className="page-title fw-bold" id="entry-title">
            Sostituzione serrature di tutti i tipi
            </h1>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container my-3 my-xl-5">
        <div className='row'>
          <div className='col-lg-6 pe-lg-5'>
              <Figure className='mb-5 '>
              <Figure.Image
              className='mx-auto w-100 mb-0'
                  width='100%'
                  height='100%'
                  alt='Conversioni'
                  src={sostituzioni}
                  loading="lazy"
              />
              </Figure>
            </div>
            <div className='col-lg-6'>
            <p>Avete necessità di un <strong>intervento professionale e rapido per sbloccare, sostituire o installare una serratura</strong>? Lavoro con competenza su tutte le marche, con continui aggiornamenti sulle nuove soluzioni offerte dal mercato.</p>

            <p><strong>Contattami per un intervento o per info,&nbsp;sarò a vostra disposizione con cordialità e professionalità.</strong> E per le situazioni urgenti non esitate a utilizzare il mio servizio di <strong>pronto intervento.</strong></p>

            <p><a className="text-white text-decoration-none main-btn fw-bold py-2 px-3 mt-5 mb-3" href={homeBase}>Chiedi preventivo</a></p>
            <br></br>
            </div>
        </div>
       
      </div>
    </main>
  );
};

export default SostituzioniPage;
