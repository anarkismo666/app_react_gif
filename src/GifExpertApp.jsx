
import { useState } from 'react';
//import AddCategory from './components/AddCategory';
//import GifGrid from './components/GifGrid';

// importamos clases del archivo de barril
import {AddCategory, GifGrid} from './components';

// Página principal
const GifExpertApp = () => {

  const [categories, setCategories] = useState([])
  
  const onAddCategory=(newCategory)=>{
      console.log(newCategory);

      if(categories.includes(newCategory)) return;
      
      setCategories([newCategory, ...categories]);
      //setCategories((cat)=>[...cat, "Hola mundo"]);
  }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        {/* Entrada */}
        <AddCategory 
          // Esto jala pasando función
          //setCategories={setCategories}
          // Esta es una propiedad del componente que recive mensaje
          onNewCategory = {(event)=>onAddCategory(event)}
        />

          {
              categories.map(category =>
                  (
                      //Pasamos key unico para la conversión e iteración
                      <GifGrid key={category} category={category}/>
                  )
              )
          }
 
        {/* Listado */}
            {/* Items gift */}

    </>
  )
}

export default GifExpertApp
