const COLOR_BANDS = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}

type Color = keyof typeof COLOR_BANDS;

export class ResistorColor {
  private colors: Color[];

  private getColorValue(color: Color): number {
    return COLOR_BANDS[color];
  }
  
  constructor(colors: Color[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
    this.colors = colors;
  }
  
  value(): number {
    let [first, second] = this.colors;
    return Number(`${this.getColorValue(first)}${this.getColorValue(second)}`);
  } 
}
