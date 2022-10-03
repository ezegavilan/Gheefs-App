import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target: { value } }) => {
        setInputValue(value);
    }

    const addCategory = (event) => {
        event.preventDefault();

        const value = inputValue.trim();

        if (value <= 1) return;

        // onAddCategory(categories => [...categories, inputValue]);
        onNewCategory(value);
        setInputValue('');
    }

    return (
        <form aria-label="form" onSubmit={ addCategory }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
