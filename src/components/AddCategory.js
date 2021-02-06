import React, { useState } from 'react'
import PropTypes from "prop-types"



export const AddCategory = ({setCategories}) => {
    
    const [input, setinput] = useState("");

    function handleChange(e){
        setinput(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
       
       if (input.trim().length > 2 ){
        setCategories(prevCategories => [input, ...prevCategories]);
        setinput("");
       } 
       
        
    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
            type="text"
            onChange={(e) => handleChange(e)}
            value={input}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}