import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>A Sneakpeek to What we Offer!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/2.jpg'
              text='Proper nutrition, moderate-vigorous physical exercise, and a formal recovery plan'
              label='General Fitness'
              path='/services'
            />
            <CardItem
              src='/images/3.jpg'
              text=' Responsible for educating clients and enforcing policies regarding safe and proper use of equipment'
              label='Personel Training'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/1.jpg'
              text='Using nutrients needed by the body for growth, development, and maintenance of life. '
              label='Nutrition'
              path='/services'
            />
            <CardItem
              src='/images/4.jpg'
              text=' Research and analysis from The Conversation.'
              label='Articles'
              path='/products'
            />
            <CardItem
              src='images/5.jpg'
              text='Join our Community'
              label='Community'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;