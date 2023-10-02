import React from 'react';
import Figure from 'react-bootstrap/Figure';
import conversioni from '../components/img/conversioni.webp';

const ConversioniSerraturePage = () => {
  return (
    <main className="page-conversioni">
      <div className="page-title-wrap mb-0 mb-xl-3">
        <div className="container">
          <div className="row">
            <h1 className="page-title fw-bold" id="entry-title">
            Conversioni serrature e porte blindate
            </h1>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container my-3 my-xl-5">
        <div className='row'>
          <div className='col-lg-6 pe-lg-5'>
              <Figure className='mb-3 mb-xl-4 '>
              <Figure.Image
              className='mx-auto w-100 mb-0'
                  width='100%'
                  height='100%'
                  alt='Conversioni'
                  src={conversioni}
                  loading="lazy"
              />
              </Figure>
            </div>
            <div className='col-lg-6'>
            <p>Come si legge dalla cronaca di tutti i giorni stanno purtroppo dilagando bande di ladri specializzati nell’apertura delle <strong>porte blindate con chiave a doppia mappa</strong> (foto a sinistra) senza scasso e <strong>senza provocare rumore</strong>. Oltre a queste problematiche di sicurezza, le serrature a doppia mappa possono avere problemi quali la delicatezza delle chiavi, i guasti di funzionamento e la duplicazione.</p>

            <p>Tutto si può risolvere con le <strong>serrature con cilindro a profilo europeo di sicurezza</strong>. Sono <strong>antitrapano, antimanomissione, a chiave codificata e duplicazione riservata</strong> protetta da brevetto, compatibili con altre serrature (KA - per fare tutto con una chiave), con alta resistenza all’usura e agli agenti atmosferici (foto a destra).</p>

            <p>Il lavoro comprende un sopralluogo, la fornitura,  l’installazione e le modifiche al serramento, la pulizia, revisione e lubrificazione generale dei meccanismi. Il tutto eseguito nel migliore dei modi; un lavoro che non potrà che lasciarvi soddisfatti!</p>

            <p><strong>Contattaci per un intervento o per info, sarò a vostra disposizione con cordialità e professionalità.</strong> E per le situazioni urgenti non esitate a utilizzare il mio servizio di <strong>pronto intervento.</strong></p>

            <p><a className="text-white text-decoration-none main-btn fw-bold py-2 px-3 mt-5 mb-3" href="#chiedi-preventivo">Chiedi preventivo</a></p>
            <br></br>
            </div>
        </div>
       
      </div>
    </main>
  );
};

export default ConversioniSerraturePage;
