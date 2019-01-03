class User {
    constructor(first, last, e){
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

var userOne = new User("Justis", "Gipson", "justis710@gmail.com");
// console.log(userOne.first);
// console.log(userOne.f);
// console.log(userOne.l);
console.log(userOne);

var userTwo = new User("Audra", "Gipson", "audraisloan@gmail.com");
// console.log(userTwo.f);
// console.log(userTwo.l);
console.log(userTwo);

class Trip {
    constructor(place, season, miles){
        this.p = place;
        this.s = season;
        this.m = miles;
    }
}

var tripOne = new Trip("Pacific Crest Trail", "Spring", "2650");
// console.log(tripOne.p);
// console.log(tripOne.s);
// console.log(tripOne.m);
console.log(tripOne);