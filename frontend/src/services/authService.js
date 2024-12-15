import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: "http://localhost:8000",
});

export const refreshToken = async() => {
    try {
        const refresh = localStorage.getItem("refreshToken");
        if (!refresh) {
            throw new Error("No refresh token found.");
        }
        const response = await axios.post("http://localhost:8000/api/users/refresh-token/", {
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

axiosInstance.interceptors.response.use(
    (response) => response,
    async(error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const newAccessToken = await refreshToken();
                console.log(newAccessToken);
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