import React from 'react'

export default function Article(props) {
   
    const {icon, info, title}=props.item
    return (
        <div className="service">
        <span>{icon}</span>
        <h6>{title}</h6>
        <p>{info}</p>
        </div>
    )
}
