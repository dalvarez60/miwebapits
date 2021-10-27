function CalculateSquareArea(squareSide: number) {
  console.log(squareSide * squareSide);
}

function PrintSquareArea(squaredSide: number, text: string) {
  console.log(text + squaredSide * squaredSide);
}

const squaredSide: number = 8;
const text: string = "Squared Area is: ";
const isPrinted: boolean = true;
enum colors {      //Tipos de datos enumerados o enum
  red = "#ff0000",
  blue = "#0000ff",
  green = "#00ff00",
}

//Definiendo un objeto
let customer: {
  name: string;
  age: number;
  skills: string[]; //Definiendo un array
  file: [string, string]; //Definiendo una tuple
} = {
  name: "David Ricardo",
  age: 45,
  skills: ["JavaScript", "C#", "TypeScript"],
  file: ["imagen", "archivo.jpg"],
};

const preferences: {
  fontSize: number;
  fontFamily: string;
  color: colors;
} = {
  fontSize: 14,
  fontFamily: "Times New Roman",
  color: colors.red,
};

let nombre: string = "David Alvarez";
console.log(nombre);

if (isPrinted) {
  PrintSquareArea(squaredSide, text);
  console.log(customer);
} else {
  CalculateSquareArea(squaredSide);
}

if (preferences.color === colors.red) {
  console.log(colors.red);
}
