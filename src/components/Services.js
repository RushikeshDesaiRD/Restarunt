import React,{useState} from 'react'
import Title from './Title'
import Article from './Article'
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from 'react-icons/fa';
export default function Services() {
    const [services, setServices]=useState([
        {
            icon:<FaCocktail/>,
            title:'Free Cocktail',
            info:'Contrary to popular belief making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College'

        } ,
                {
            icon:<FaHiking/>,
            title:'Endless Hiking',
            info:'There are many  the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. I'
            
        },
        {
            icon:<FaShuttleVan/>,
            title:'Free ShuttleVan',
            info:'It is a long established fact that content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, '
            
        },
         {
            icon:<FaBeer/>,
            title:'Strongest Beer',
            info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            
        }
    ])
    return (
        <>
       
        <div className="services">
          <Title title="Services"/>
           <section className="services-center">
             {
                services.map((item, index) => {
                  return ( <Article  key={index} item={item}/> )
                })
             }
           </section>
        </div>
      </>
    )
}
