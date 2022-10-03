import { useState } from "react";

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
        <form onSubmit={ addCategory }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
