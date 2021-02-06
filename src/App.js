import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';






export const App = () => {
    
    const [categories, setCategories] = useState(["dragon Ball"])


    
    
    
    
    
    return (
        <div>
            <h2>GifExpertApp</h2>
           <AddCategory setCategories={setCategories}/>
            <hr/>
            
            <ol>
                {categories.map(item =>
                     <GifGrid key={item} category={item}/>
                     )}
            </ol>
        </div>
    )
}

