import axios from "axios";
import { addRecipes, selectedRecipe} from "../../redux/actions";
import { useDispatch } from "react-redux"

const BASE_URL_API = "https://api.sleake.fr/api/v1"
const API_KEY = "f288ba275fea45f598e1442175fb59ca"
const MAX_PER_PAGE = 2

export const useFetchRecipes = () => {

    const dispatch = useDispatch()

    const getAllRecipes = async (page) => {
        try {
            const response = await axios.get(`${BASE_URL_API}/nouveau?page=${page}`, {
              
            })
            dispatch(addRecipes(response.data.messages))

        } catch(e){
            // console.log("Error", e)
        }
    }

    const getRecipeById = async (id) => {
        try {
            const response = await axios.get(`${BASE_URL_API}/bonplan/title_${id}`, {})
            dispatch(selectedRecipe(response.data.messages))

        } catch(e){
            // console.log("Error", e)
        }
    }

    return {
        getAllRecipes,
        getRecipeById
    }
}

// const URL_API = "https://api.spoonacular.com/recipes/complexSearch"
// const API_KEY = "f288ba275fea45f598e1442175fb59ca"
// const MAX_PER_PAGE = 30

// export const useFetchRecipes = () => {

//     const dispatch = useDispatch()

//     const getAllRecipes = async () => {
//         try {
//             const response = await axios.get(URL_API, {
//                 params: {
//                     apiKey: API_KEY,
//                     number: MAX_PER_PAGE
//                 }
//             })
//             dispatch(addRecipes(response.data.results))

//         } catch(e){
//             console.error("Error", e)
//         }
//     }

//     return {
//         getAllRecipes
//     }
// }