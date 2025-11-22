import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['stan loona']);

    const onAddCategory = (newCategory) => {
        const validacionObjecto = categories.map(category => category.toLowerCase())
        if (validacionObjecto.includes(newCategory.toLowerCase())) return;
        setCategories([newCategory, ...categories]);
        console.log(categories);
    }


    return (
        <>

            <h1>GifExpertApp</h1>

            <h3><AddCategory
                // onAddCategory={setCategories}
                onNewCategory={(event) => onAddCategory(event)}
            ></AddCategory></h3>

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    )
}