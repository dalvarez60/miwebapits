function CalculateSquareArea(squareSide) {
    console.log(squareSide * squareSide);
}
function PrintSquareArea(squaredSide, text) {
    console.log(text + squaredSide * squaredSide);
}
var squaredSide = 8;
var text = "Squared Area is: ";
var isPrinted = true;
var customer = {
    name: "David Ricardo",
    age: 45
};
var nombre = "David Alvarez";
console.log(nombre);
if (isPrinted) {
    PrintSquareArea(squaredSide, text);
}
else {
    CalculateSquareArea(squaredSide);
}
