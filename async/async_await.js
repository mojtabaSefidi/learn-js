const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 974, 345, 126, 738]);
    }, 1500);
});
const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        {
            setTimeout(ID => {
                const recipe = {
                    title: 'hotdog with mushroom',
                    publisher: 'mojTaba'
                };
                resolve(`${ID}: ${recipe.title}`);

            }, 1500, recID);
        }
    });
};
const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {
                title: 'italian pitza',
                publisher: publisher
            };
            resolve(`${pub} : ${recipe.title}`)
        }, 1500, publisher);
    })
};
async function getRecipeAW() {
    const IDS = await getIDs
    console.log(IDS);
    const recipe = await getRecipe(IDS[2]);
    console.log(recipe);
    const related = await getRelated("MOJTABA")
    console.log(related);
    return recipe
}

// consume from promises;
getRecipeAW().then(result => console.log(`${result} is the best`));