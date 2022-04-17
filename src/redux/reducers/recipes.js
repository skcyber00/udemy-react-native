import {ADD_RECIPES, SELECTED_RECIPES} from '../actions/actionsType'

const initialState = {
    list: [],
    selectedRecipe: {}
}

export const recipes = (state = initialState, action) => {
    switch(action.type) {
        case ADD_RECIPES:
            return {
                list: [...state.list, ...action.payload.data],
                selectedRecipe: state.selectedRecipe
            }
        case SELECTED_RECIPES:
            return {
                list: state.list,
                selectedRecipe: action.payload.data
            }
        default: 
            return state
    }
}