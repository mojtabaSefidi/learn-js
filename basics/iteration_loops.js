// loops and iteration

for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}
for (let i = 0; i < 20; i += 2) {
  console.log(i);
}

var mojtaba = ["mojtaba", "esfahani", 1999, "content producer", false, "blue"];
for (var i = 0; i < mojtaba.length; i++) {
  console.log(mojtaba[i]);
}

var i = 0;
while (i < mojtaba.length) {
  console.log(mojtaba[i]);
  i++;
}

for (let i = 0; i < mojtaba.length; i++) {
  if (typeof mojtaba[i] !== "string") {
    continue;
  }
  console.log(mojtaba[i]);
}
for (let i = 0; i < mojtaba.length; i++) {
  if (typeof mojtaba[i] !== "string") {
    break;
  }
  console.log(mojtaba[i]);
}

// loopping backward
for (let index = mojtaba.length - 1; index >= 0; index--) {
  console.log(mojtaba[index]);
}
