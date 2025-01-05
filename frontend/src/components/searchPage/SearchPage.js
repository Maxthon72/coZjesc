import { searchRecipes } from "@/services/Spoonly";
import { cuisines, diets, mealTypes, intolerances } from "@/components/searchPage/searchOptions";

export default {
    name: "SearchPage",
    data() {
        return {
            cuisine: "",
            diet: "",
            mealType: "",
            maxReadyTime: "",
            number: 10, // Default to 10 recipes
            selectedIntolerances: [],
            results: [], // Search results from the API
            loading: false,
            errorMessage: "",
            cuisines,
            diets,
            mealTypes,
            intolerances,
            currentPage: 1, // Current page number
            itemsPerPage: 6, // Number of items displayed per page
        };
    },
    computed: {
        // Dynamically calculate results for the current page
        paginatedResults() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            return this.results.slice(startIndex, startIndex + this.itemsPerPage);
        },
        // Calculate total number of pages
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
                number: this.number, // Pass the "number" parameter
            };

            try {
                const data = await searchRecipes(params);
                console.log(data);
                this.results = data.results; // Assign the API results to the `results` array
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