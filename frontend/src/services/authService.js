import axios from "axios";

const API_URL = "http://localhost:8000/api/users/register/";

export const registerUser = async(username, email, password) => {
    try {
        const response = await axios.post(API_URL, {
            username,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};