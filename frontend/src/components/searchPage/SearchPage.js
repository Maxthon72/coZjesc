import { searchRecipes } from "@/services/Spoonly";
import { cuisines, diets, mealTypes, intolerances, ingredients } from "@/components/searchPage/searchOptions";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";

export default {
    components: {
        Multiselect,
    },
    name: "SearchPage",
    data() {
        return {
            cuisine: "",
            diet: "",
            mealType: "",
            maxReadyTime: "",
            number: 10,
            selectedIntolerances: [],
            selectedIngredients: [],
            results: [],
            loading: false,
            errorMessage: "",
            cuisines,
            diets,
            mealTypes,
            intolerances,
            ingredients,
            currentPage: 1,
            itemsPerPage: 6,
        };
    },
    computed: {
        paginatedResults() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            return this.results.slice(startIndex, startIndex + this.itemsPerPage);
        },
        totalPages() {
            return Math.ceil(this.results.length / this.itemsPerPage);
        },
    },
    methods: {
        async searchRecipes() {
            this.loading = true;
            this.errorMessage = "";
            this.results = [];
            this.currentPage = 1;

            const params = {
                cuisine: this.cuisine,
                diet: this.diet,
                type: this.mealType,
                maxReadyTime: this.maxReadyTime,
                intolerances: this.selectedIntolerances.join(","),
                number: this.number,
                includeIngredients: this.selectedIngredients.map(ingredient => ingredient.name).join(","),
            };

            try {
                const data = await searchRecipes(params);
                console.log(data);
                this.results = data.results;
            } catch (error) {
                console.error("Error searching recipes:", error);
                this.errorMessage =
                    error.message || "Failed to fetch recipes. Please try again later.";
            } finally {
                this.loading = false;
            }
        },
        goToRecipe(recipeId) {
            this.$router.push({ path: `/recipe/${recipeId}` });
        },
    },
};