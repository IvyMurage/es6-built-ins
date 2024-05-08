/**
function Speaker(name, verb) {
  this.name = name
  this.verb = verb || "says"
}
Speaker.prototype.speak = function(text) {
  console.log(this.name + " " + this.verb + " '" + text + "'")
}

function Shouter(name) {
  Speaker.call(this, name, "shouts")
}
Shouter.prototype = Object.create(Speaker.prototype)
Shouter.prototype.speak = function(text) {
  Speaker.prototype.speak.call(this, text.toUpperCase())
}

 */

class Speaker {
  constructor(name, verb = "says") {
    this.name = name;
    this.verb = verb;
  }
  speak(text) {
    console.log(
      this.name + " " + this.verb + " '" + text + "'"
    );
  }
}

class Shouter extends Speaker {
  constructor(name, verb = "shouts") {
    super(name, verb);
  }
  speak(text) {
    super.speak(text.toUpperCase());
  }
}

new Shouter("Dr. Loudmouth").speak("hello there");
