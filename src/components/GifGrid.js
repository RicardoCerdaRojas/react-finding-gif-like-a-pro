import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category)

    return (
        <>
            <h3 className="animate__animated animate__bounceInLeft">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}
            <div className="car-grid animate__animated animate__bounce">
                {images.map(img => (
                        <GifGridItem 
                        key={img.id}
                        {...img}></GifGridItem>
                    ))
                }
            </div>

        </>
    )
}
