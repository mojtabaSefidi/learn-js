 const getIDs = new Promise((resolve, reject) => {
     setTimeout(() => {
         resolve([523, 974, 345, 126, 738]);
     }, 1500);
 });
 const getRecipe = recId => {
     return new Promise((resolve, reject) => {
         {
             setTimeout(ID => {
                 const recipe = {
                     title: 'hotdog with mushroom',
                     publisher: 'mojTaba'
                 }
                 resolve(`${ID}: ${recipe.title}`);

             }, 1500, recId);
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
 getIDs
     .then(IDs => {
         console.log(IDs);
         return getRecipe(IDs[2])
     })
     .then(recipe => {
         console.log(recipe);
         return getRelated("MojTaba");
     })
     .then(recipe => {
         console.log(recipe);
     })
     .catch(eror => {
         console.log('Eror happened');
     });