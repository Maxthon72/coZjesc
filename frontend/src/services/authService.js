import axios from "axios";

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

export const checkIfLoggedIn = async() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
        throw new Error("No token found");
    }
    return axios.get("http://localhost:8000/api/users/check-if-loggedin", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};