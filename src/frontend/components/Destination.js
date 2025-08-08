
import React, { useState } from 'react';
import "./Destination.css"
import mountain1 from '../Assets/nk1.jpg'
import mountain2 from '../Assets/nk2.jpg'
import mountain3 from '../Assets/k1.jpg'
import mountain4 from '../Assets/kl2.jpg'
import mountain9 from '../Assets/gl1.jpg'
import mountain8 from '../Assets/gl2.jpg'

import Destinationdata from './Destinationdata'

export default function Destination() {
  const [showAll, setShowAll] = useState(false);

  const destinations = [
    {
      heading: 'Naran Kaghan',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tincidunt sapien. Curabitur faucibus, nibh sed hendrerit congue, justo est facilisis velit, a finibus lorem lacus at neque. Maecenas euismod, nisl eget porttitor lacinia, erat arcu blandit turpis, vitae luctus enim eros nec sem',
      img1: mountain1,
      img2: mountain2,
    },
    {
      heading: 'Kalam (Swat)',
      text: 'Lorem ipsum dolor sit amet... no 2',
      img1: mountain3,
      img2: mountain4,
    },
    {
      heading: 'Galiyat',
      text: 'Lorem ipsum dolor sit amet... by using props.',
      img1: mountain9,
      img2: mountain8,
    },
    {
      heading: 'Skardu',
      text: 'Skardu is a breathtaking valley...',
      img1: mountain1,
      img2: mountain2,
    },
    {
      heading: 'Murree',
      text: 'Murree is a popular hill station...',
      img1: mountain3,
      img2: mountain4,
    },
    {
      heading: 'Hunza',
      text: 'Hunza valley is known for its beauty...',
      img1: mountain9,
      img2: mountain8,
    },
    {
      heading: 'Fairy Meadows',
      text: 'Fairy Meadows offers stunning views...',
      img1: mountain1,
      img2: mountain2,
    },
    {
      heading: 'Neelum Valley',
      text: 'Neelum Valley is a lush green valley...',
      img1: mountain4,
      img2: mountain9,
    },
    {
      heading: 'Swat Valley',
      text: 'Swat is often called the Switzerland of Pakistan...',
      img1: mountain8,
      img2: mountain9,
    },
    {
      heading: 'Chitral',
      text: 'Chitral is home to the famous Kalash people...',
      img1: mountain1,
      img2: mountain2,
    },
  ];

  const visibleDestinations = showAll ? destinations : destinations.slice(0, 3);

  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>We give you the opportunity to see a lot</p>

      {visibleDestinations.map((dest, index) => (
        <Destinationdata
          key={index}
          className={index % 2 === 0 ? 'first-desc' : 'first-desc-reverse'}
          heading={dest.heading}
          text={dest.text}
          img1={dest.img1}
          img2={dest.img2}
        />
      ))}

      <div className="see-more-container">
        <button onClick={() => setShowAll(!showAll)} className="see-more-btn">
          {showAll ? 'Show Less' : 'See More'}
        </button>
      </div>
    </div>
  );
}