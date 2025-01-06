export default {
    name: "ShoppingListPopup",
    props: {
        ingredients: {
            type: Array,
            required: true,
        },
        isVisible: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            selectedIngredients: [],
        };
    },
    methods: {
        generateShoppingList() {
            const list = this.selectedIngredients.join("\n");
            const blob = new Blob([list], { type: "text/plain" });
            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = "shopping-list.txt";
            link.click();

            URL.revokeObjectURL(url);
            this.$emit("close");
        },
    },
};