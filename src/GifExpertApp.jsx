import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(["One Puch"]);

  const onAddCategory = ( onNewCategory ) => {
    
    if(categories.includes(onNewCategory)) return;
    setCategories( [ onNewCategory, ...categories])

  }

  return (
    <>

      <h1>GifExpertAp</h1>

      <AddCategory 
        onNewCategory ={ (value) => onAddCategory(value)}
      />
      { 
        categories.map( category => 
          (
            <GifGrid key={ category } category={ category }/>  
              
          )
        ) 
      }


    </>
  )
}
