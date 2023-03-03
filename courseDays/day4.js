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

//Write a code which can give grades to students according to theirs scores:
//90-100, A .. 70-89, B .. 60-69, C .. 50-59, D .. 0-49, F
function studentGradeFunction () {
    let studentGrade = Number(prompt('enter student grade: '))
    switch (true) {
        case (studentGrade>=90 && studentGrade<=100):
            console.log('your grade is: A')
            document.getElementById('studentGrade').innerHTML = 'your grade is: A'
            break;
        case (studentGrade>=70 && studentGrade<90 ):
            console.log('your grade is: B')
            document.getElementById('studentGrade').innerHTML = 'your grade is: B'
            break;  
        case (studentGrade>=60 && studentGrade<70 ):
            console.log('your grade is: C')
            document.getElementById('studentGrade').innerHTML = 'your grade is: C'
            break; 
        case (studentGrade>=50 && studentGrade<60 ):
            console.log('your grade is: D')
            document.getElementById('studentGrade').innerHTML = 'your grade is: D'
            break; 
        case (studentGrade>=0 && studentGrade<50 ):
            console.log('your grade is: F')
            document.getElementById('studentGrade').innerHTML = 'your grade is: <b>F<b/>'
            break;         
        
        default:
            console.log('invalid student grade. Enter a grade between 0-100')
            break;
    }
}

/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn. ||||    December, January or February, the season is Winter.
March, April or May, the season is Spring             ||||    June, July or August, the season is Summer */

function checkSeasonFunction(){
    let month = (prompt("enter month: ")).toLowerCase()
    
    switch (month) {
        case 'september':
        case 'october':
        case 'september':
            console.log('the season is Autumn')
            document.getElementById('checkSeason').innerHTML='the season is Autumn'
            break;
        case 'december':
        case 'january':
        case 'february':
            console.log('the season is Winter')
            document.getElementById('checkSeason').innerHTML='the season is Winter'
            break;  
        case 'march':
        case 'april':
        case 'may':
            console.log('the season is Spring')
            document.getElementById('checkSeason').innerHTML='the season is Spring'
            break;
        case 'june':
        case 'july':
        case 'august':
            console.log('the season is Summer')
            document.getElementById('checkSeason').innerHTML='the season is Summer'
            break;
        default:
        console.log('invalid input') 
    }

}