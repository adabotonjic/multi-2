import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import logo from '../../img/HeaderGhiga.webp';

function TopHeader() {
  return (

    <div className='topHeader'>
        <div className="info-bar d-lg-none px-lg-5">
		<Container>
            <div className='d-flex align-items-center justify-content-between'>
                <a className="wa py-2" title="Scrivimi via WhatsApp" href="https://wa.me/+393486723145" target="_blank" rel="noreferrer">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28">
                    <title>whatsapp</title>
                    <path  d="M15.391 15.219c0.266 0 2.812 1.328 2.922 1.516 0.031 0.078 0.031 0.172 0.031 0.234 0 0.391-0.125 0.828-0.266 1.188-0.359 0.875-1.813 1.437-2.703 1.437-0.75 0-2.297-0.656-2.969-0.969-2.234-1.016-3.625-2.75-4.969-4.734-0.594-0.875-1.125-1.953-1.109-3.031v-0.125c0.031-1.031 0.406-1.766 1.156-2.469 0.234-0.219 0.484-0.344 0.812-0.344 0.187 0 0.375 0.047 0.578 0.047 0.422 0 0.5 0.125 0.656 0.531 0.109 0.266 0.906 2.391 0.906 2.547 0 0.594-1.078 1.266-1.078 1.625 0 0.078 0.031 0.156 0.078 0.234 0.344 0.734 1 1.578 1.594 2.141 0.719 0.688 1.484 1.141 2.359 1.578 0.109 0.063 0.219 0.109 0.344 0.109 0.469 0 1.25-1.516 1.656-1.516zM12.219 23.5c5.406 0 9.812-4.406 9.812-9.812s-4.406-9.812-9.812-9.812-9.812 4.406-9.812 9.812c0 2.063 0.656 4.078 1.875 5.75l-1.234 3.641 3.781-1.203c1.594 1.047 3.484 1.625 5.391 1.625zM12.219 1.906c6.5 0 11.781 5.281 11.781 11.781s-5.281 11.781-11.781 11.781c-1.984 0-3.953-0.5-5.703-1.469l-6.516 2.094 2.125-6.328c-1.109-1.828-1.687-3.938-1.687-6.078 0-6.5 5.281-11.781 11.781-11.781z"></path>
                    </svg>
                </a>
                <a className="phone-number py-2" title=" Chiama " href="tel:348 672 3145" target="_blank" rel="noreferrer">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="12" height="28" viewBox="0 0 12 28">
                    <title>mobile</title>
                    <path  d="M7.25 22c0-0.688-0.562-1.25-1.25-1.25s-1.25 0.562-1.25 1.25 0.562 1.25 1.25 1.25 1.25-0.562 1.25-1.25zM10.5 19.5v-11c0-0.266-0.234-0.5-0.5-0.5h-8c-0.266 0-0.5 0.234-0.5 0.5v11c0 0.266 0.234 0.5 0.5 0.5h8c0.266 0 0.5-0.234 0.5-0.5zM7.5 6.25c0-0.141-0.109-0.25-0.25-0.25h-2.5c-0.141 0-0.25 0.109-0.25 0.25s0.109 0.25 0.25 0.25h2.5c0.141 0 0.25-0.109 0.25-0.25zM12 6v16c0 1.094-0.906 2-2 2h-8c-1.094 0-2-0.906-2-2v-16c0-1.094 0.906-2 2-2h8c1.094 0 2 0.906 2 2z"></path>
                    </svg>
                </a>
				<a className="email py-2" title=" Scrivi la mail " href="mailto:info@ghirardellinicola.it" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path style={{fill:'#FDB615'}} d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>
                </a>
				<a className="facebook py-2" href="https://www.facebook.com/GhirardelliNicolaFabbro" title="Ghirardelli Nicola on Facebook" target="_blank" rel="noreferrer">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28">
                    <title>facebook-square</title>
                    <path d="M19.5 2c2.484 0 4.5 2.016 4.5 4.5v15c0 2.484-2.016 4.5-4.5 4.5h-2.938v-9.297h3.109l0.469-3.625h-3.578v-2.312c0-1.047 0.281-1.75 1.797-1.75l1.906-0.016v-3.234c-0.328-0.047-1.469-0.141-2.781-0.141-2.766 0-4.672 1.687-4.672 4.781v2.672h-3.125v3.625h3.125v9.297h-8.313c-2.484 0-4.5-2.016-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15z"></path>
                    </svg>

                </a>
				
			</div>

        </Container>

	</div>
        <div className='info-bar d-none d-lg-block'>
            <Container >
                <Row className='align-items-center'>
                    <Col md={10}>
                        <div className='socials d-flex ps-0 mb-0 align-items-center '>
                              
                            <a className="wa py-2 d-flex pe-3 align-items-center " title=" Scrivimi via WhatsApp " href="https://wa.me/+393486723145" target="_blank" rel="noreferrer">Scrivimi via WhatsApp</a>
                              
                             
                            <a className="phone-number py-2 d-flex px-3 align-items-center " title=" Chiama " href="tel:348 672 3145" target="_blank" rel="noreferrer">348 672 3145</a>
                               
                       
                            <a className="email py-2 d-flex ps-3 align-items-center " title=" Scrivi la mail " href="mailto:info@ghirardellinicola.it" target="_blank" rel="noreferrer">info@ghirardellinicola.it</a>
                            
                            </div>
                    </Col>
                    <Col md={2} className='text-end'>
                        <a className="facebook" href="https://www.facebook.com/GhirardelliNicolaFabbro" title="Ghirardelli Nicola on Facebook" target="_blank" rel="noreferrer">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28">
                            <title>facebook-square</title>
                            <path  d="M19.5 2c2.484 0 4.5 2.016 4.5 4.5v15c0 2.484-2.016 4.5-4.5 4.5h-2.938v-9.297h3.109l0.469-3.625h-3.578v-2.312c0-1.047 0.281-1.75 1.797-1.75l1.906-0.016v-3.234c-0.328-0.047-1.469-0.141-2.781-0.141-2.766 0-4.672 1.687-4.672 4.781v2.672h-3.125v3.625h3.125v9.297h-8.313c-2.484 0-4.5-2.016-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15z"></path>
                            </svg></a>
                        </Col>
                </Row>
            </Container>
        </div>
        <Container>
            <Figure className='logo mb-0'>
            <Figure.Image
            className='mx-auto w-100 mb-0'
                width={1340}
                height={199}
                alt="Ghirardelli Logo"
                src={logo}

            />

            </Figure>
        </Container>
       
  </div>
  );
}

export default TopHeader;
