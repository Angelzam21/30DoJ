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



