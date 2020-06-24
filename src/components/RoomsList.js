import React from 'react'
import Room from './Room'
import roomsContainer from './RoomContainer'


export default function RoomsList({rooms}) {

    if(roomsContainer.lenght === 0){
        return <div className="empty-search">
            <h3>Unfortunately no rooms matched your criterias</h3>
            </div>
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map(item => {
                    return <Room key={item.id} room={item} />
                    
                })}
                
            </div>
        </section>
    )
}
