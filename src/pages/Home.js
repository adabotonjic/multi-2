import React from 'react';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import furgone from '../components/img/Furgone.webp';
import ServiziHome from './ServiziHome';
import ChisonoHome from './ChisonoHome';
import ContattiHome from './ContattiHome';

const Home = () => {
    return (
     <main>
        <div className='home-page'>
          <Container fluid className='home-hero text-center'>
            <Figure className='furgone mb-0'>
            <Figure.Image
            className='mx-auto w-100 mb-0'
                width={697}
                height={500}
                alt="Ghirardelli furgone"
                src={furgone}
            />

            </Figure>
        </Container>
        <ServiziHome />
        <ChisonoHome />
        <ContattiHome />
        </div>
        </main>
      );
};

export default Home;
