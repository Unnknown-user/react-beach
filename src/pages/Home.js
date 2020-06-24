import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from "../components/FeaturedRooms"
import Basket from "../components/Basket"
export default function Home () {
     
    return ( <> 
    
    <Hero>
   
        <Banner title="Luxurious rooms" subtitle="Deluxe rooms starting at 249€">
            <Link to='/rooms' className="btn-primary">Discover our rooms</Link>
        </Banner>
    </Hero>
    <Services/>
    <FeaturedRooms/>
        <Basket/>


    </>
    );
    
    
}
