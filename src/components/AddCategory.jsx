import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

  const [inputValue,  setInputValue] = useState('');  

  const onImputChange = (event)=>{
    setInputValue(event.target.value)
  }

  const onSumitForm=(event)=>{
        event.preventDefault();
        // Validamos 
        if(inputValue.trim().length<=1) return;
        // mandamos el inputValues y desestructuramos las categorias que contiene el setCategories
        /////setCategories((categories)=>[inputValue, ...categories]);
        // ahora llamamos onNewCategory
        onNewCategory(inputValue.trim());
        // Limpiamos inputValue 
        setInputValue('');
  }

  return (
    <div>
        <form onSubmit={onSumitForm}>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange = {onImputChange}
            />
        </form>
          
    </div>
  )
}

//export default AddCategory
