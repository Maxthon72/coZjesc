import { getRandomRecipes } from "@/services/Spoonly";

export default {
    name: "HomePage",
    data() {
        return {
            recipes: [],
            loading: true,
            errorMessage: "",
        };
    },
    methods: {
        cleanText(text) {
            if (!text) return "";
            return text.replace(/<\/?b>/g, "").slice(0, 255) + "...";
        },
    },
    async mounted() {
        try {
            const response = await getRandomRecipes(6);
            this.recipes = response.recipes || [];
        } catch (error) {
            this.errorMessage = error.message || "Nie udało się załadować przepisów.";
        } finally {
            this.loading = false;
        }
    },
};