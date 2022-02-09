import React, { useState } from 'react'
// import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length >= 2) {
            setCategories(categ => [...categ, inputValue]);
            setInputValue('');
        } else {
            return;
        }
    }
    const handleReset = (e) => {
        e.preventDefault();
        setCategories([]);
        setInputValue('');
    }
    return (
        <div className='mt-2'>
            <form >
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Category"
                        aria-label="Category"
                        aria-describedby="button-addon2"
                        value={inputValue}
                        onChange={handleInputChange} />
                    <button
                        className="btn btn-outline-success"
                        type="submit"
                        id="button-addon2"
                        onClick={handleSubmit}>
                        Add
                    </button>
                    <button
                        className="btn btn-outline-danger"
                        type="submit"
                        id="button-addon2"
                        onClick={handleReset}>
                        Reset
                    </button>
                </div>
            </form>
            {/* <div 
                class="alert alert-danger" 
                role="alert">
                    No se pudo realizar la busqueda. Intente de nuevo
            </div> */}
        </div>
    )
}

AddCategory.propTypes = {

}

export default AddCategory
