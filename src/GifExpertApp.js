import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Bible'])

    return (
        <div>
            <h2>Finding Gifts like a pro!</h2>
            <AddCategory setCategories={setCategories}/>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category}>
                        </GifGrid>
                    ))
                }
            </ol>
            <footer>by Ricardo Cerda....</footer>
        </div>
    )
}
