import React, { useState, useEffect } from "react"
import Gif from "./Gif"
import getGifs from '../services/getGifs'

export default function ListOfGifs({ params }) {
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)
    const { keyword } = params

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword })
        .then(gifs => {
            setLoading(false)
            setGifs(gifs)
        })
    }, [keyword])
    
    if (loading) return <span>Cargando 🎭</span>
    
    return (
        gifs.map(({ id, title, url }) =>
            <Gif
                key={id}
                id={id}
                title={title}
                url={url}
            />
        )
    )
}