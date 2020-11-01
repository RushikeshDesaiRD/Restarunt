import React from 'react'
import LoadingGear from '../images/images/gif/loading-gear.gif'
export default function Loading() {
    return (
        <div className="loading">
             <h4>Rooms Data Loading...</h4>
            <img src={LoadingGear}/>
        </div>
    )
}
