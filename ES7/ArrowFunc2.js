//  Arrow fnuction 2 lexical this

var box5 = {
    color: "green",
    position: 1,
    clickMe: function () {
        var self = this;
        document.querySelector(".green").addEventListener("click", function () {
            var str = "This is box number " + self.position + " and it is " + self.color;
            alert(str);
        });
    }

}
// box5.clickMe();
const box6 = {
    color: "green",
    position: 1,
    clickMe: function () {
        document.querySelector(".green").addEventListener("click", () => {
            var str = "This is box number " + this.position + " and it is " + this.color;
            alert(str);
        });
    }

}
box6.clickMe();

/*const box66 = {
    color: "green",
    position: 1,
    clickMe: () => {
        document.querySelector(".green").addEventListener("click", () => {
            var str = "This is box number " + this.position + " and it is " + this.color;
            alert(str);
        });
    }

}
box66.clickMe();*/
// ES5
function Person(name) {
    this.name = name;
}
Person.prototype.myFriends5 = function (friend) {
    var array = friend.map(function (el) {
        return this.name + " is friends with " + el;
    }.bind(this))
    console.log(array);
}

var friend = ['mojtaba', 'ali', 'mohammad']
new Person("hossein").myFriends5(friend);

// ES6
function Person(name) {
    this.name = name;
}
Person.prototype.myFriends5 = function (friend) {
    var array = friend.map((el) =>
        `${this.name} is friends with ${el}`
    )
    console.log(array);
}

new Person("sed ali").myFriends5(friend);