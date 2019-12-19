/* Suppose that you 're working in a small town administration, and you'
re in charge of two town elements:
    1. Parks
2. Streets

It 's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end - of -year meeting, your boss wants a final report with the following:
    1. Tree density of each park in the town(forumla: number of trees / park area)
2. Average age of each town 's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town 's streets
5. Size classification of all streets: tiny / small / normal / big / huge.If the size is unknown, the
default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings,
    default parameters, maps, arrow functions, destructuring, etc.

    */

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}
class Park extends Element {
    constructor(name, buildYear, parkArea, numTree) {
        super(name, buildYear);
        this.parkArea = parkArea;
        this.numTree = numTree;
    }
    treeDensity() {
        return (this.numTree / this.parkArea);
    }
    calcAge() {
        return new Date().getFullYear() - this.buildYear;
    }
}
class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size
    }
    classifyStreet() {
        const classify = new Map();
        classify.set(1, 'tiny');
        classify.set(2, 'small');
        classify.set(3, 'noraml');
        classify.set(4, 'big');
        classify.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classify.get(this.size)} street.`);

    }
}
const Allparks = [
    new Park('marvdasht', 2007, 6000, 800),
    new Park('taleghani', 1980, 15000, 1300),
    new Park('ghasr', 2012, 8000, 3800)
];
const allStreet = [
    new Street('valiasr', 1960, 10, 4),
    new Street('hakim', 2008, 40, 5),
    new Street('malek', 1940, 0.1, 1),
    new Street('shariati', 1950, 6)
];

function calcAvg(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0)
    return [sum, sum / arr.length];
}

function reportParks(p) {
    console.log('----- Parks Report ------');

    //density 
    // var density = p.map(el => el.treeDensity());
    // console.log(density);
    p.forEach(element => {
        console.log(`${element.name} has a tree density of ${element.treeDensity()} trees per square km`);
    });
    var ages = p.map(el => el.calcAge())
    // average age
    const [totalAge, avgAge] = calcAvg(ages);
    console.log(`Our ${p.length} Parks have an average of ${avgAge} years.`);

    // park >1000 trees
    // const NumTree = p.map(el => el.numTree).findIndex(el => el >= 1000);
    // console.log(NumTree);
    const NumTree = p.map(el => el.numTree)
    for (const current of NumTree) {
        i = 0
        if (current > 1000) {
            console.log(`The ${p[NumTree.indexOf(current)].name}park have more than 1000 trees.`);
        }
        i++
    }

}

function reprotSreet(s) {
    console.log('----- Streets Report ------');

    // total and avg of town streets
    const [totalLength, avgLength] = calcAvg(s.map(el => el.length));
    console.log(`Our ${s.length} Streets have an average length of ${avgLength}km and total length of ${totalLength}km .`);

    // classify sizes
    s.forEach(el => {
        el.classifyStreet();

    });
}

reportParks(Allparks);
reprotSreet(allStreet);