import { checkIfLoggedIn }
from "@/services/authService";
import axios from "axios";
import TempPage from "@/components/TempPage/TempPage.vue";

export default {
    name: "ProfilePage",
    components: {
        TempPage,
    },
    data() {
        return {
            user: null,
            loading: true,
            errorMessage: "",
            activeTab: "info", // Default active tab
        };
    },
    methods: {
        async getUserInfo() {
            const token = localStorage.getItem("authToken");
            if (!token) {
                throw new Error("No token found");
            }

            const response = await axios.get("http://localhost:8000/api/users/user-info/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        },
    },
    async mounted() {
        try {
            const isLoggedIn = await checkIfLoggedIn();
            if (!isLoggedIn) {
                this.$router.push("/login");
            } else {
                this.user = await this.getUserInfo();
            }
        } catch (error) {
            this.errorMessage = error.error || "Failed to load user information.";
        } finally {
            this.loading = false;
        }
    },
};