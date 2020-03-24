// with callBacks

function getRecipe() {
    setTimeout(() => {
        const recipeID = [523, 974, 345, 126, 738];
        console.log(recipeID);

        setTimeout((id) => {
            const recipe1 = {
                title: 'hotdog with mushroom',
                publisher: 'mojTaba'
            };
            console.log(recipe1);
            console.log(`${id}: ${recipe1.title}`);
            setTimeout(publisher => {
                const recipe2 = {
                    title: 'italian pitza',
                    publisher: publisher
                };
                console.log(recipe2);
            }, 1500, recipe1.publisher);
        }, 1500, recipeID[2]);
    }, 1500);
}
getRecipe();