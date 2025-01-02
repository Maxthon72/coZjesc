import { searchRecipes } from "@/services/Spoonly";
import { cuisines, diets, mealTypes, intolerances } from "@/components/searchPage/searchOptions";

export default {
    name: "RecipeSearchPage",
    data() {
        return {
            cuisine: "",
            diet: "",
            mealType: "",
            maxReadyTime: "",
            selectedIntolerances: [],
            results: [],
            loading: false,
            errorMessage: "",
            cuisines,
            diets,
            mealTypes,
            intolerances,
            currentPage: 1,
            itemsPerPage: 6,
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.results.length / this.itemsPerPage);
        },
        paginatedResults() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            return this.results.slice(startIndex, startIndex + this.itemsPerPage);
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
            };

            try {
                const data = await searchRecipes(params);
                this.results = data.results;
            } catch (error) {
                console.error("Error searching recipes:", error);
                this.errorMessage =
                    error.message || "Failed to fetch recipes. Please try again later.";
            } finally {
                this.loading = false;
            }
        },
    },
};