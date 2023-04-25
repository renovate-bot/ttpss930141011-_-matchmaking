export default class coord {
  constructor(public x: number, public y: number) {
    this.setX(x);
    this.setY(y);
  }
  setX(x: number) {
    this.x = x;
  }
  setY(y: number) {
    this.y = y;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
}
