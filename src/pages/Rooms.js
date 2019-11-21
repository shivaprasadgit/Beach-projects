import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import{Link} from 'react-router-dom'
const Rooms = props => {
    return (
        <div>
           <Hero hero="roomsHero">
           <Banner title=" Our rooms" subtitle="Royal rooms">
           <Link to='/' className='btn-primary'>
          return home</Link>
           </Banner>
           </Hero>

        </div>
    )
}



export default Rooms
