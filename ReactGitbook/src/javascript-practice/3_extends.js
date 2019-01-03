class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User";
        this.ban = "Banned User";
    }
    greet(){
        console.log('Welcome back, ' + this.name);
    }
    status(){
        console.log('Current status: ' + this.type);
    }
    banned(){
        console.log('Current status: ' + this.ban);
    }
}

class TrialUser extends User {
    trialEnding() {
        console.log('Your trial will be ending soon, ' + this.name + '.' + ' Would you like to join our program?');
    }
}

var anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

var trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

class BannedUser extends User {
    bannedExp() {
        console.log("You've been banned " + this.name + "." + "You have exploited our service.");
    }
}

var bannedUser = new BannedUser('Paul');
bannedUser.greet();
bannedUser.bannedExp();
bannedUser.banned();