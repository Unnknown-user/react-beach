import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

 
export default class Services extends Component {
    state={
        services:[
        { 
            icon:<FaCocktail/>,
            title:"Free cocktail",
            info: 'Everyday is a special day, we will provide you a free cocktail every night'
        },

        {
            icon:<FaHiking/>,
            title:"Hiking",
            info: "Sport addict? Let's discover our new summer activity"
        },
      
        

        {
            icon:<FaShuttleVan/>,
            title:"Free shuttle",
            info: 'For any booking on our website, a free shuttle service is provided from the airport to our place'
        },


        {
            icon:<FaBeer/>,
            title:"Strongest Beer",
            info: 'Try our new local beer 100% homemade'
        }
    ]
  
}


    render() {
        return (
            <section className="services">
              <Title title="services"></Title>
            
            <div className="services-center"> 
            {this.state.services.map((item, index) => {
                return ( 
                <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
             );
            })}

            </div>
              
            </section>


        )
    }
}
