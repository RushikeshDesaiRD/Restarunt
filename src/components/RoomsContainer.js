import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import Loading from './Loading'
import { withRoomConsumer } from '../Context'
 function RoomsContainer({context}) {
     const {loading, sortedRooms, rooms}=context
     if(loading){
         return (
             <Loading/>
         )
     }
    return (
                       <>
                        <RoomsFilter rooms={rooms}/>
                        <RoomsList sortedRooms={sortedRooms}/>
                        </>  
    )
}

export default withRoomConsumer(RoomsContainer)
