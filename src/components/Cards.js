import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img9 from '../images/img-9.jpg'
import img2 from '../images/img-2.jpg'
import img3 from '../images/img-3.jpg'
import img4 from '../images/img-4.jpg'
import img8 from '../images/img-8.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Mira estos epicos destinos!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img9}
              text='Explora la cascada escondida en las profundidades de la selva amazónica'
              label='AVENTURA'
              path='/services'
            />
            <CardItem
              src={img2}
              text='Viaja por las islas de Bali en un crucero privado'
              label='LUJOS'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Zarpe en el Océano Atlántico visitando Uncharted Waters'
              label='MISTERIO'
              path='/services'
            />
            <CardItem
              src={img4}
              text='Experimenta el fútbol en la cima de las montañas del Himalaya'
              label='LIBERTAD'
              path='/products'
            />
            <CardItem
              src={img8}
              text='Paseo por el desierto del Sahara en un tour guiado en camello'
              label='ADRENALINA'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
