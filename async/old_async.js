// with callBacks

function getRecipe() {
    setTimeout(() => {
        const recipeID = [523, 974, 345, 126, 738];
        console.log(recipeID);

        setTimeout((id) => {
            const recipe = {
                title: 'hotdog with mushroom',
                publisher: 'mojTaba'
            };
            console.log(`${id}: ${recipe.title}`);
            setTimeout(publisher => {
                const recipe2 = {
                    title: 'italian pitza',
                    publisher: publisher
                };
                console.log(recipe2);
            }, 1500, recipe.publisher);
        }, 1000, recipeID[2]);
    }, 1500);
}
getRecipe();