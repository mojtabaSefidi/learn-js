// sync

const first_1 = () => {
    console.log("first()");
    second_1();
    console.log('first() ends.');
}
const second_1 = () => {
    console.log("sync second()");
}
first_1()
console.log("*******************");

// async
const first = () => {
    console.log("first()");
    second();
    console.log('first() ends.');
}
const second = () => {
    setTimeout(() => {
        console.log('async second()');
    }, 2000);
}
first();