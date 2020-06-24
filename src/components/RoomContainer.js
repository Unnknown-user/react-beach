import React from 'react'
import RoomsFilter from "./RoomsFilter"
import RoomList from "./RoomsList"
import {RoomConsumer} from '../context'
import Loading from "./Loading"



export default function roomsContainer() {
    return (

        <RoomConsumer>

            {
                value => {
                    const {loading, sortedRooms, rooms} = value 
                    if(loading){
                        return<Loading/>
                    }

                    return(
                        <>
                        
            
                        <RoomsFilter rooms={rooms}></RoomsFilter>
            
                        <RoomList rooms={sortedRooms}></RoomList>
                    </>

                    )
                }
            }
        </RoomConsumer>
       
    )
}
