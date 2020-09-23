class Color {
  color: string;
  constructor(color: string) {
  }
  getColor(): string {
    return this.color;
  }
}

let red = new Color('red');
red.getColor();
