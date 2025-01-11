import { jsPDF } from "jspdf";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";

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
            selectedFormat: "txt", // Default format
        };
    },
    methods: {
        generateShoppingList() {
            if (!this.selectedIngredients.length) {
                alert("Please select at least one ingredient.");
                return;
            }

            switch (this.selectedFormat) {
                case "txt":
                    this.generateTxt();
                    break;
                case "docx":
                    this.generateDocx();
                    break;
                case "pdf":
                    this.generatePdf();
                    break;
                default:
                    console.error("Unsupported file format");
            }
            this.$emit("close");
        },
        generateTxt() {
            const list = this.selectedIngredients.map((item) => `- ${item}`).join("\n");
            const blob = new Blob([list], { type: "text/plain" });
            saveAs(blob, "shopping-list.txt");
        },
        async generateDocx() {
            try {
                // Create a new document
                const doc = new Document({
                    sections: [{
                        properties: {},
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Shopping List",
                                        bold: true,
                                        size: 28,
                                    }),
                                ],
                                spacing: { after: 200 },
                            }),
                            ...this.selectedIngredients.map(
                                (ingredient) =>
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `- ${ingredient}`,
                                        }),
                                    ],
                                    spacing: { after: 100 },
                                })
                            ),
                        ],
                    }, ],
                });

                // Generate the `.docx` file
                const blob = await Packer.toBlob(doc);
                saveAs(blob, "shopping-list.docx");
            } catch (error) {
                console.error("Error generating DOCX file:", error);
                alert("Failed to generate DOCX file.");
            }
        },
        generatePdf() {
            try {
                const doc = new jsPDF();
                doc.setFont("helvetica", "bold");
                doc.setFontSize(16);
                doc.text("Shopping List", 10, 10);

                doc.setFont("helvetica", "normal");
                doc.setFontSize(12);
                this.selectedIngredients.forEach((item, index) => {
                    let y = 20 + index * 10;
                    if (y > 280) {
                        doc.addPage();
                        y = 10;
                    }
                    doc.text(`- ${item}`, 10, y);
                });

                doc.save("shopping-list.pdf");
            } catch (error) {
                console.error("Error generating PDF file:", error);
                alert("Failed to generate PDF file.");
            }
        },
    },
};