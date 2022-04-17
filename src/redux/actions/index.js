import {ADD_RECIPES, SELECTED_RECIPES} from './actionsType'

export function addRecipes (data) {
    return {
        type: ADD_RECIPES,
        payload: {data}
    }
}

export function selectedRecipe (data) {
    return {
        type: SELECTED_RECIPES,
        payload: {data}
    }
}