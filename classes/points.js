// Your code here
class Point {
  constructor(x, y) {
    {
      this.x = x;
      this.y = y;
    }
  }
  plus(other) {
    return { x: this.x + other.x, y: this.y + other.y };
  }
}

console.log(new Point(1, 2).plus(new Point(2, 1)));
