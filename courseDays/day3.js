/*
Day 3 of 30DOF
Booleans Operators
*/

let number = 6                                                                      
number > 0
  ? console.log(`${number} is a positive number`)                           //esta es una forma de escribir condicionales
  : console.log(`${number} is a negative number`)                           // se conocen como ternary  operators
number = -4

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)


  //Window Prompt Method: permite mostrar un input en el navegador, cuyo valor, puedes guardar en una variable
  //ejemplo

  //number = prompt('enter number','number goes here')
 // console.log(number)

  //Window Confirm Method: permite mostrar un dialog box en donde el usuario podra aceptar o cancelar. Usualmente
  //usada para pedir permiso al usuario para ejecutar algo.

/*const agree = confirm('Quieres agregar un numero a consola? ')
console.log(agree) // result will be true or false based on what you click on the dialog box

if (agree==true) {                                                                  // Ejemplo usando tanto el Confirm Method
    number = prompt('agrega un numero','number goes here')                         // como el Prompt Method   
    console.log(number)
} else {
   console.log("no agrego numero") 
}*/

//Ahora veremos el Date() Method, que nos permitira obtener las fechas en JS.

const time = new Date()
let monthexample = time.getMonth() + 1
console.log(time)
console.log(time.getFullYear())
console.log(time.getMonth())
console.log(time.getSeconds())

console.log("today is:"+time.getDate()+"/"+monthexample+"/"+time.getFullYear())


//now lets make a readable time format.
const day = time.getDay()
const month = time.getMonth()+1
const year = time.getFullYear()
const hours = time.getHours()
let minutes = time.getMinutes()

if (minutes<10) {
    console.log(`today is: ${day}/${month}/${year}  ${hours}:0${minutes}`)

} else {
    console.log(`today is: ${day}/${month}/${year}  ${hours}:${minutes}`)

}

//Exercises level 2.

/*1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle 
(area = 0.5 x b x h). */

function areaTriangleFunction (){                                                                   //Ejercicio 1
  let baseTriangle = prompt ("Ingrese base del triangulo","base del triangulo")
  let heightTriangle = prompt ("Ingrese altura del triangulo","altura del triangulo")
  
  let areaTriangle = 0.5*baseTriangle*heightTriangle
  console.log(`el area del triangulo es igual a: ${areaTriangle}`)
  document.getElementById('resultadoAreaTriangulo').innerHTML = `El Area del triangulo es ${areaTriangle}cm<sup>2</sup>`;
}

/*Write a script that prompt the user to enter side a, side b, 
and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c) */

function perimeterTriangleFunction (){                                                                   //Ejercicio 2
  let sideA = Number(prompt ("Ingrese lado a","lado a"))
  let sideB = Number(prompt ("Ingrese lado b","lado b"))
  let sideC = Number(prompt ("Ingrese lado c","lado c"))
  
  let perimeterTriangle = sideA+sideB+sideC
  console.log(`el perimetro del triangulo es igual a: ${perimeterTriangle}`)
  document.getElementById('resultadoPerimetroTriangulo').innerHTML = `El Perimetro del triangulo es ${perimeterTriangle}cm`;
}

/*Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
*/

function areaperimeterRectangleFunction (){                                                                   //Ejercicio 3
  let lengthRectangle = Number(prompt ("Ingrese altura del rectangulo",""))
  let widthRectangle = Number(prompt ("Ingrese ancho del rectangulo",""))
  let areaRectangle = lengthRectangle*widthRectangle
  let perimeterRectangle = 2*(lengthRectangle+widthRectangle)

  console.log(`el area del rectangulo es igual a: ${areaRectangle}`)
  console.log(`el perimetro del rectangulo es igual a: ${perimeterRectangle}`)

  document.getElementById('resultadoAreaRectangulo').innerHTML = `El Area del rectangulo es ${areaRectangle}cm<sup>2</sup>`
  document.getElementById('resultadoPerimetroRectangulo').innerHTML = `El Perimetro del rectangulo es ${perimeterRectangle}cm`;
}

/*Get radius using prompt and calculate the area of a circle (area = pi x r x r) and 
circumference of a circle(c = 2 x pi x r) where pi = 3.14. */

function areacircumferenceCircleFunction (){                                                              //Ejercicio 4
  let radiusCircle = Number(prompt ("Ingrese radio del circulo",""))
  const pi = 3.14
  
  let areaCircle = pi*radiusCircle*radiusCircle
  let circumferenceCircle = 2*pi*radiusCircle

  console.log(`el area del circulo es igual a: ${areaCircle}`)
  console.log(`la circumferencia del circulo es igual a: ${circumferenceCircle}`)

  document.getElementById('resultadoAreaCirculo').innerHTML = `El Area del circulo es ${areaCircle}cm<sup>2</sup>`
  document.getElementById('resultadoCircumferenciaCirculo').innerHTML = `La Circumferencia del circulo es ${circumferenceCircle}cm`;
}

//creating a human readable time format. following: YYYY-MM-DD HH:mm eg. 2012-01-02 07:05
// The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

function dateTimeFormat (){    
  const day = ('0'+time.getDate()).slice(-2)
  const month = ('0'+time.getMonth()+1).slice(-2)
  const year = time.getFullYear()
  const hours = ('0'+time.getHours()).slice(-2)
  const minutes = ('0'+time.getMinutes()).slice(-2)

  console.log(`today is: ${year}-${month}-${day}  ${hours}:${minutes}`)
  document.getElementById('dateTimeFormat').innerHTML = `today is: ${year}-${month}-${day}  ${hours}:${minutes}`
}
