import axios from "axios";
import { checkIfLoggedIn } from "@/services/authService";
import TempPage from "@/components/TempPage/TempPage.vue";
import FavoriteRecipes from "@/components/ProfilePage/FavoriteRecipTab/FavoriteRecipes.vue";
import { languageStore } from "@/stores/languageStore";

export default {
    name: "ProfilePage",
    components: {
        TempPage,
        FavoriteRecipes,
    },
    data() {
        return {
            user: null,
            loading: true,
            errorMessage: "",
            activeTab: "info",
        };
    },
    computed: {
        translations() {
            return languageStore.translations[languageStore.language];
        },
    },
    methods: {
        async getUserInfo() {
            const token = localStorage.getItem("authToken");
            if (!token) {
                throw new Error(this.translations.noTokenError);
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
            this.errorMessage = error.response.data.detail || this.translations.userInfoError;
        } finally {
            this.loading = false;
        }
    },
};