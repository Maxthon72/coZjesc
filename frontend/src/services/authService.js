import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: "http://localhost:8000",
});

const refreshToken = async() => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
        throw new Error("No refresh token found");
    }

    try {
        const response = await axios.post("/api/users/refresh-token/", {
            refresh: refreshToken,
        });
        const newAccessToken = response.data.access;
        localStorage.setItem("authToken", newAccessToken);
        return newAccessToken;
    } catch (error) {
        console.error("Error refreshing token:", error);
        localStorage.removeItem("authToken");
        localStorage.removeItem("refreshToken");
        throw new Error("Unable to refresh token. Please log in again.");
    }
};

axiosInstance.interceptors.response.use(
    (response) => response,
    async(error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const newAccessToken = await refreshToken();
                originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest);
            } catch (err) {
                console.error("Failed to refresh token. Logging out...");
                window.location.href = "/login";
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);

export const checkIfLoggedIn = async() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
        throw new Error("No token found");
    }

    try {
        const response = await axiosInstance.get("/api/users/check-if-loggedin", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Failed to check if logged in:", error);
        throw error;
    }
};


export const registerUser = async(username, email, password) => {
    try {
        const response = await axios.post('http://localhost:8000/api/users/register/', {
            username,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};