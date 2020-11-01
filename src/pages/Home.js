import React from 'react'
import Rooms from './Rooms'
import Room from './Room'
import Error from './Error'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

export default function Home() {
    return (
        <>
        <Hero>
        <Banner title="Riva Resort" subtitle="Sea Side View">
           <Link to="rooms" className="btn-primary">Our Rooms</Link>
        </Banner>
        
       </Hero>
      <Services/>
      <FeaturedRooms/>

      </>
    )
}
