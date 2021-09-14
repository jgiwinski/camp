import React from 'react';
import './App.scss';
import { Header } from '../Header/Header'; 
import { FirePit } from '../FirePit/FirePit'; 
import { Footer } from '../Footer/Footer'; 
import map from '../../graphics/backgrounds/campMap.png';

import { mockRooms } from '../../utilities/mock_data'; 

export const App = () => {

  const  roomData = mockRooms.map(room => {
      return <FirePit
          topic = {room.topic}
          participants = {room.participants}
          link = {room.link}
      />
    }
  )
  return (
    <main>
      <Header />
      <img className='map' src={map} alt='map background'/>
      <section className='main-content grid-display'>{roomData}
      </section>
      <Footer />
    </main>
  );
  // return (
  //   <main>
  //     <Header />
  //     <div className='map'>
  //       <section className='main-content grid-display'>{roomData}
  //     </section>
  //     </div>
  //     <Footer />
  //   </main>
  // );
}
