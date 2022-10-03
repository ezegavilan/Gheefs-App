import { useState } from 'react';

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['The Last of Us', 'God of War']);

    const onAddCategory = (category) => {
        /* Con spread operator
        setCategories([...categories, 'Valorant']);
         */

        /* Utilizando el callback
        setCategories(category => [...category, 'Valorant']);
         */

        if (categories.includes(category)) return;

        setCategories([category, ...categories]);
    }

    return (
        <>
            <h1>¡Bienvenido a Gheefs!</h1>

            <AddCategory onNewCategory={ onAddCategory }/>

            {
                categories.map(category => (
                        <GifGrid key={ category } category={ category }/>
                    )
                )
            }

        </>
    );
}
