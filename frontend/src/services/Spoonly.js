import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/recipes/";

export const searchRecipes = async(params) => {
    try {
        const response = await axios.get(`${API_BASE_URL}search/`, {
            params,
        });
        return response.data;
    } catch (error) {
        throw error.response.data || "Error searching recipes";
    }
};

export const getRecipeById = async(recipeId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}${recipeId}/`);
        return response.data;
    } catch (error) {
        throw error.response.data || "Error fetching recipe details";
    }
};

export const getRandomRecipes = async(number = 1) => {
    try {
        const response = await axios.get(`${API_BASE_URL}random/`, {
            params: { number },
        });
        return response.data;
    } catch (error) {
        throw error.response.data || "Error fetching random recipes";
    }
};

export default {
    searchRecipes,
    getRecipeById,
    getRandomRecipes,
};