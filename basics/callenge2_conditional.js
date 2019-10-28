var game1_j = 89,
    game2_j = 103,
    game3_j = 120;
var game1_M = 116,
    game2_M = 94,
    game3_M = 123;

var john_avg = (game1_j + game2_j + game3_j) / 3;
var mike_avg = (game1_M + game2_M + game3_M) / 3;

if (john_avg >= mike_avg) {
    console.log("john win with the avg of " + john_avg);
} else {
    console.log("mike team win with the avg of " + mike_avg);
}

var game1_j = 115;
var john_avg = (game1_j + game2_j + game3_j) / 3;

if (john_avg > mike_avg) {
    console.log("john win with the avg of " + john_avg);
} else if (mike_avg > john_avg) {
    console.log("mike team win with the avg of " + mike_avg);
} else {
    console.log("the same score!")
}
var game1_MA = 97,
    game2_MA = 134,
    game3_MA = 105;

var ma_avg = (game1_MA + game2_MA + game3_MA) / 3;

if (ma_avg > john_avg && ma_avg > mike_avg) {
    console.log("mary team win with the avg of " + ma_avg);

} else if (john_avg > mike_avg && john_avg > ma_avg) {
    console.log("john team win with the avg of " + john_avg);
} else if (mike_avg > john_avg && mike_avg > ma_avg) {
    console.log("mike team win with the avg of " + mike_avg);
} else {
    console.log("there is a draw");
}