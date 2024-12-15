import { getRecipeById } from "@/services/Spoonly";

export default {
    name: "RecipePage",
    data() {
        return {
            recipe: null,
            loading: true,
            errorMessage: "",
        };
    },
    methods: {
        cleanText(text) {
            // Strip HTML tags like <b> for cleaner display
            return text.replace(/<\/?b>/g, "").replace(/<\/?a[^>]*>/g, "");
        },
    },
    async mounted() {
        const recipeId = this.$route.params.id; // Get the recipe ID from route params
        try {
            const response = await getRecipeById(recipeId);
            this.recipe = response;
        } catch (error) {
            console.error(error);
            this.errorMessage = "Failed to load recipe information.";
        } finally {
            this.loading = false;
        }
    },
};