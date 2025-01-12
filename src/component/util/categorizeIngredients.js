export const categorizeIngredients = (ingredients) => {
    return ingredients.reduce((acc, ingredient) => {
        const category = ingredient.category;

        if (category && category.name) { // Ensure category and category.name exist
            if (!acc[category.name]) {
                acc[category.name] = [];
            }
            acc[category.name].push(ingredient);
        }

        return acc; // Return accumulator in all cases
    }, {});
};
