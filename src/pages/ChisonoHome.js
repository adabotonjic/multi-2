import React from 'react'; 

import Figure from 'react-bootstrap/Figure';
import chiSono from '../components/img/chi-sono.webp';

function ChisonoHome() {
    return (
        <div 
        className="chisiamo-section  my-4 py-3 my-xl-3 py-md-3 py-xl-5"
        id="chi-sono"
        style={{borderBottom:'1px solid', borderBottomColor: 'rgba(0,0,0,.1)'}}>
            <div className="container">

                <div className="row align-items-center">
           
                    <div className='col-lg-6 ps-lg-5'>
                        <h2 className='mb-3'>Chi sono</h2>
                        <p>Con un’esperienza consolidata in 25 anni di attività concentrata in servizi efficaci e tempestivi, fornisco interventi qualificati relativi a:  <strong>porte, cancelli, serrande basculanti, serrature di vecchia e nuova generazione.</strong></p>

                        <p>Competenza, professionalità e rapidità di intervento sono i miei punti di forza unite a disponibilità nei confronti dei clienti che necessitano di sbloccare e sostituire serrature o di interventi di manutenzione ordinaria.</p>

                        <p>Eseguo anche sopralluoghi e consulenze per la sicurezza della vostra casa.</p>

                        <p>E per le urgenze, offro servizio di <strong>Pronto Intervento</strong>.</p>
                    </div>
                    <div className='col-lg-6'>
                    <Figure className='mb-3 mb-xl-4 '>
                    <Figure.Image
                    className='mx-auto w-100 mb-0'
                        width='100%'
                        height='100%'
                        alt='Chi sono'
                        src={chiSono}
                        loading="lazy"
                    />
                    </Figure>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChisonoHome;