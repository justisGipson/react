class User {
    constructor(username, password){
        this.name = username;
        this.password = password;
        this.type = "Trial User";
    }
    greet(){
        console.log("Welcome back, " + this.name)
    }
    status(){
        console.log("Current status: " + this.type);
    }
}

var anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

class BronzeLevelUser extends User {
    // take in cc info here...
    super(username, password){
        this.type = "Bronze User";
        //this.ccinfo = ccinfo;
    }
    getInfo(){
        console.log(this.username, this.password, this.type, this.ccinfo);
    }
}

var bronzeGuy = new BronzeLevelUser("Bronze Dude", "bronze7589", "4242424242424242");
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);