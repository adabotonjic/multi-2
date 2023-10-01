import React from 'react'; 

import ContactForm from './ContactForm';


function ContattiHome() {
    return (
        <div 
        className="contatti-section  my-4 py-3 my-xl-3 py-md-3 py-xl-5"
        id="contatti">
            <div className="container">

                <div className="row align-items-center">
                    <div className='col-lg-6'>
                    <h2 className='mb-5 mb-lg-3'>Contatti</h2>
                    <div className="ghiga-info">
                        <div className="ghiga-wa mb-4">
                            <h3>WhatsApp</h3>
                            <p><a href="https://wa.me/+393486723145" target="_blank" rel="noreferrer">+39 348 672 3145</a>
                            </p></div>
                            <div className="ghiga-cell mb-4">
                            <h3>Telefono</h3>
                            <p><a href="tel:+393486723145" target="_blank" rel="noreferrer">+39 348 672 3145</a>
                            </p></div>
                            <div className="ghiga-mail mb-4">
                                
                            <h3>Indirizzo e-mail</h3>
                            <p><a href="mailto:info@ghirardellinicola.it" target="_blank" rel="noreferrer">info@ghirardellinicola.it</a>
                            </p></div>
                            <div className="ghiga-map">
                            <h3>Area servita</h3>
                            <p style={{marginLeft: '50px',textAlign:'left',fontSize:'18px',fontWeight:'600',color:'#fdb614'}}>Vicenza e provincia</p>
                        </div>
                    </div>
                    </div>
                    <div className='col-lg-6 ps-lg-5'>
                    <iframe title="provincia-map" loading="lazy" style={{border: '0'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d357096.3182922142!2d11.20515927307625!3d45.634452902968285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4778cad6a732b9e9%3A0x307098715907ee0!2sProvince+of+Vicenza!5e0!3m2!1sen!2sit!4v1521383198123" width="100%" height="450"></iframe>

                    </div>
                </div>
                <div className="row align-items-center mt-3">
                    <div className='col-12'>
                        <h2 className='my-5'>Chiedi preventivo</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContattiHome;