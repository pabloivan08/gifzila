import { useState } from "react"
import { AddCategory, GiftGrid } from './components'

const GiftExpertApp = () => {

  const [ categories, setCategories ] = useState([])

  const onAddCategory = ( newCategory ) => {
    if ( categories.includes( newCategory )) return 
    setCategories([ newCategory, ...categories ])
  }

  return (
    <>
    <h1>Holi</h1>

    <AddCategory 
      onAddCategory={ onAddCategory }
    />
  
    { categories.map( category => 
      <GiftGrid 
        category={ category } 
        key={ category }
      /> 
    )}
    
    </>
  )
}

export { GiftExpertApp }