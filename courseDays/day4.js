/*
Get user input using prompt(“Enter your age:”). If user is 18 or older , 
give feedback:'You are old enough to drive' but if not 18 give another feedback 
stating to wait for the number of years he needs to turn 18.
*/

function ageToDriveFunction(){
    let age = prompt('Enter your age','')
    if (age>=18) {
        console.log('You are old enough to drive')
        document.getElementById('ageToDrive').innerHTML = 'You are old enough to drive'
    } else {
        let yearsToDrive = 18-age
        console.log(`you are not old enough to drive, come back in ${yearsToDrive} years`)
        document.getElementById('ageToDrive').innerHTML = `you are not old enough to drive, come back in ${yearsToDrive} years.`
    }
}

/*Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?*/

function isitEvenFunction(){
    let number = prompt('Enter number')
    if (number%2 == 0 ) {
        console.log(`the number ${number} is even`)
        document.getElementById('isitEven').innerHTML = `the number ${number} is even`
    } else {
        console.log(`the number ${number} is uneven`)
        document.getElementById('isitEven').innerHTML = `the number ${number} is uneven` 
    }
}