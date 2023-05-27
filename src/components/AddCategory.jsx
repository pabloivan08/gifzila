import { useState } from "react"

const AddCategory = ({ onAddCategory }) => {

  const [ inputValue, setInputValue ] = useState('')

  const onInputChange = ( event ) => {
    setInputValue( event.target.value )
  }

  const onSubmit = ( event ) => {
    event.preventDefault()
    inputValue.trim() !== '' && onAddCategory( inputValue.trim() )
    setInputValue('')
  }

  return(
    <form onSubmit={ onSubmit }>
      <input 
        type="text" 
        placeholder="Search a cool Gif"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}

export { AddCategory }