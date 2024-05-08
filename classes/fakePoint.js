class Point {
  constructor(x, y) {
    (this.x = x), (this.y = y);
  }
  add(other) {
    return new Point(this.x + other.x, this.y + other.y);
  }
}

var fakePoint = {
  x: 0,
  y: 0,
  add(other) {
    return { x: this.x + other.x, y: this.y + other.y };
  },
};
console.log(fakePoint instanceof Point);
console.log(fakePoint.add({ x: 1, y: 2 }));
