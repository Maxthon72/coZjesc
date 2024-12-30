import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/users/favorite-recipes/";

const getAuthToken = () => {
    return localStorage.getItem("authToken");
};

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use((config) => {
    const token = getAuthToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const refreshToken = async() => {
    try {
        const refresh = localStorage.getItem("refreshToken");
        if (!refresh) {
            throw new Error("No refresh token found.");
        }
        const response = await axios.post("http://127.0.0.1:8000/api/users/refresh-token/", {
            refresh: refresh,
        });
        localStorage.setItem("authToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);
        return response.data.access;
    } catch (error) {
        console.error("Error refreshing token:", error);
        throw error;
    }
};

apiClient.interceptors.response.use(
    (response) => response,
    async(error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const newAccessToken = await refreshToken();
                originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return apiClient(originalRequest);
            } catch (err) {
                console.error("Failed to refresh token. Logging out...");
                window.location.href = "/login";
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);

// Favorite Recipes Service

export const getFavoriteRecipes = async() => {
    try {
        const response = await apiClient.get("/");
        return response.data;
    } catch (error) {
        console.error("Error fetching favorite recipes:", error);
        throw error;
    }
};

export const addFavoriteRecipe = async(recipeData) => {
    try {
        const response = await apiClient.post("/", recipeData);
        return response.data;
    } catch (error) {
        console.error("Error adding favorite recipe:", error);
        throw error;
    }
};

export const getFavoriteRecipeById = async(id) => {
    try {
        const response = await apiClient.get(`/${id}/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching favorite recipe:", error);
        throw error;
    }
};

export const updateFavoriteRecipe = async(id, updatedData) => {
    try {
        const response = await apiClient.put(`/${id}/`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating favorite recipe:", error);
        throw error;
    }
};

export const patchFavoriteRecipe = async(id, updatedData) => {
    try {
        const response = await apiClient.patch(`/${id}/`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error patching favorite recipe:", error);
        throw error;
    }
};

export const deleteFavoriteRecipe = async(id) => {
    try {
        const response = await apiClient.delete(`/${id}/`);
        return response.data;
    } catch (error) {
        console.error("Error deleting favorite recipe:", error);
        throw error;
    }
};