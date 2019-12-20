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