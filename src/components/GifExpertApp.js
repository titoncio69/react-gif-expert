import React, { useState } from 'react'
import {AddCategory} from './addCategory/AddCategory';
import { GifGrid } from './gifGrid/GifGrid';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Dragon Ball Z']);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={ setCategorias }/>
            <hr/>

            <ol>
                { 
                    categorias.map( (categoria) => (
                        <GifGrid key={categoria} categoria={categoria}/>
                    ) )
                }
            </ol>
        </div>
    )
}
