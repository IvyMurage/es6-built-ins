class Speaker {
  static get verb() {
    return "says";
  }
  constructor(name) {
    this.name = name;
  }
  speak(text) {
    console.log(this.name + " " + verb + " '" + text + "'");
  }
}

class Shouter extends Speaker {
  constructor(name) {
    super(name);
  }
  speak(text) {
    super.speak(text.toUpperCase());
  }
}

new Shouter("Dr. Loudmouth").speak("hello there");
console.log(Speaker.verb);
