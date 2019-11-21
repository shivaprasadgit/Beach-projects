import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
export default function Home(){
  
return (
<Hero hero="defaultHero">
<Banner title="luxurious rooms" subtitl="delux rooms starting at  RS 999">
<Link to='/rooms' className="btn-primary"> 
 Our Rooms</Link>
 </Banner>
 </Hero>
 );
  
}




