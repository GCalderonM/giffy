import React from 'react'
import './Gif.css'

export default function Gif({ id, title, url}) {
    return (
        <div className="GifBox">
            <img alt={id} src={url} />
            <br />
            <span>{title}</span>
        </div>
    )
}