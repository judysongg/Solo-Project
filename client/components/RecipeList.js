import React from 'react';
import Recipe from './Recipe';
export const RecipeList = ({ recipeList, handleEdit, handleDelete }) => {
  console.log('recipeList', recipeList)
    
    return (
        <div className="flex flex-col">
            {recipeList.map(recipe => 
                <Recipe handleDelete={handleDelete} handleEdit={handleEdit} key={recipe.recipe_id }id={recipe.recipe_id} title={recipe.title} description={recipe.description}/>
            )}
            c
        </div>
    )
}