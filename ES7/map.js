// anything as keys,iterable,get size easily,add and remove easily.

const question = new Map();
question.set('question', 'how old am i?');
question.set(1, '18');
question.set(2, '20');
question.set(3, '21');
question.set(4, '22');
question.set('correct', 3);
question.set(true, 'correct answer');
question.set(false, 'wrong! please try again')

question

console.log(question.get('question'));
console.log(question.size);
if (question.has(4)) {
    question.delete(4);
}
// question.clear();
question.forEach((value, key) => {
    console.log((`This is ${key}, and it set to ${value}`));

});

for (let [key, value] of question.entries()) {
    if (typeof key === 'number') {
        console.log(`Answer ${key}:${value}`)


    }
}

const answer = parseInt(prompt("write the correct answer: "));
console.log(question.get(answer === question.get('correct')));