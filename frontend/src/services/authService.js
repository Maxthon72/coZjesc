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
    try {
        const token = localStorage.getItem("authToken");
        if (!token) {
            return false; // No token found, user is not logged in
        }

        const response = await axios.get('http://localhost:8000/api/users/check-if-loggedin', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data.logged_in; // Expecting a `logged_in` boolean field in the response
    } catch (error) {
        console.error("Error checking login status:", error);
        return false; // Treat as not logged in if any error occurs
    }
};