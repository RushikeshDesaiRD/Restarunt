import React from 'react'
import Room from './Room'

export default function RoomsList({sortedRooms}) {
    if(sortedRooms.length === 0){
        return (
            <div className="empty-search">
            <h1>No Rooms Found Unfortunately</h1>
            </div>
        )
    }
  
    return (
        <section className="roomslist">
      
        <div className="roomslist-center">
            {
                sortedRooms.map(room => {
                    return (
                        <Room key={room.id} room={room}/>
                    )
                })
            }
        </div>
      </section>
    )
}
