// Metodo matemático

// Ingresar 3 números
let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
let num3 = parseInt(prompt("Ingrese el tercer número:"));

// Indicar cual es el mayor
let max = Math.max(num1, num2, num3);

// Indicar cual es el menor
let min = Math.min(num1, num2, num3);

// Obtener la raíz cuadrada del segundo número
let sqrtNum2 = Math.sqrt(num2);

console.log(`El número mayor es: ${max}`);
console.log(`El número menor es: ${min}`);
console.log(`La raíz cuadrada del segundo número es: ${sqrtNum2}`);

// Metodo de string

// Recibir un nombre completo como entrada
let fullName = prompt("Ingrese su nombre completo:");

// Utilice split para dividirlo en nombre y apellido
let nameFirstname = fullName.split(" ");

// Use charAt y toUpperCase para capitalizar la primera letra de cada palabra
let nameCapitalize = nameFirstname[0].charAt(0).toUpperCase() + nameFirstname[0].slice(1);
let firstNamecapitalize = nameFirstname[1].charAt(0).toUpperCase() + nameFirstname[1].slice(1);

console.log(`Nombre capitalizado: ${nameCapitalize}`);
console.log(`Apellido capitalizado: ${firstNamecapitalize}`);

// Creo una variable para conectar JS con Html

let resultadosDiv = document.getElementById("resultados");

// Mostrar resultados en pagina web

resultadosDiv.innerHTML += `<p>El número mayor es: ${max}</p>`;
resultadosDiv.innerHTML += `<p>El número menor es: ${min}</p>`;
resultadosDiv.innerHTML += `<p>La raíz cuadrada del segundo número es: ${sqrtNum2}</p>`;
resultadosDiv.innerHTML += `<p>Nombre capitalizado: ${nameCapitalize}</p>`;
resultadosDiv.innerHTML += `<p>Apellido capitalizado: ${firstNamecapitalize}</p>`;
