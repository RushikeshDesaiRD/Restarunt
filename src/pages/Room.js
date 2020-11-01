import React from 'react'
import defaultBcg from "../images/images/defaultBcg.jpeg";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from '../components/StyledHero'
export default class Room extends React.Component {
    constructor(props){
        super(props)
        this.state={
          slug:this.props.match.params.slug,
          defaultBcg
        }
    }
    // componentDidMount(){

    // }
    
  static contextType = RoomContext;
    render(){
        
        const {getRoom}=this.context
        const room=getRoom(this.state.slug)
        console.log(room)
        if(!room){
            return (
                <div className="error">
                <h3>No Such Room Could Be Found</h3>
                  <Link className="btn-primary" to="/rooms">GO TO ROOMS</Link>
                </div>
            )
        }
    const {breakfast,name,type,price,size,capacity,pets,images,extras, description}=room;
    const [mainImg,...defaultImg]=images
    return (
      <>
        <StyledHero img={mainImg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">GO BACK TO ROOMS</Link>
          </Banner>
        </StyledHero>

        <section className="single-room">
            <div className="single-room-images">
              {
                defaultImg.map((item, index) => (
                  <img src={item}/>
                ))
              }
            </div>
            <div className="single-room-info">
               <article className="desc">
                   <h3>Details</h3>
                   <p>{description}</p>
               </article>
               <article className="info">
                  <h3>Info</h3>
                  <h6>Price :${price}</h6>
                  <h6>Size  :{size} SQFT.</h6>
                  <h6>Max Capacity :{ capacity > 1 ? `${capacity} People` : `${capacity} Person` }</h6>
                  <h6>{ pets ? "Pets Allowed" : "Not Pets Allowed"}</h6>
                  <h6>{breakfast && "Free Breakfast Allowed"}</h6>
               </article>
              
            </div>
        </section>
         <section className="room-extras">
                 <h6>Extras</h6>
                 <ul className="extras">
                    {
                      extras.map((item,index) => {
                        return <li>- {item}</li>
                      })
                    }
                 </ul>
         </section>
       </>
    )
}
}


