import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
/* import { getGifs } from '../helpers/getGifs'; */
import { GifGridItem } from './GifGridItem';




export const GifGrid = ({category}) => {
    
/*     const [images, setImages] = useState([]);
  
    useEffect(()=> {
    getGifs(category).then(setImages);
  }, [category])
    */
  
 const {data:images, loading} = useFetchGifs(category);
  

    
    
    
    
    
    return (
        <>
           <h3>{category}</h3>
           {loading && <p>loading</p>}
        <div className="card-grid">
            
            <ol>
                {images.map((img) => <GifGridItem {...img} key={img.id}/>)}
            </ol>
        </div>
        </>
        
        
    )
}
