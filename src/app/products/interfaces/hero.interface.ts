
export enum Color {
  blue = 'blue',
  red = 'red',
  black ='black',
  green = 'green',
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
