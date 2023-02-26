let stringVar = "This is a String Variable"
let booleanVar = true
let undefinedVar
let nullVar = null

/*
Now we'll declare some more variables to complete day 1 exercises
*/

firstName = "Angel"
isMarried = false
country = "Argentina"
age = 27 

/*
Now we'll declare the same variables but in a single line
*/

firstName = "Angel", isMarried = false, country = "Argentina", age = 27 // same line

// DAY 2 EXERCISES 


let challenge = "30 Days Of JavaScript"
let countainChallenge = challenge.match(/a/gi).length
let itCompanies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"

let incomeText = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let itArray = incomeText.match(/\d+/g)
let incomeTotal = Number(itArray[0])+Number(itArray[1])+Number(itArray[2])

let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

let loveCount = loveSentence.match(/love/gi).length

const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching"

let sentenceClean = sentence.replace(/\$|%|@|&|#|!|;|/gi,"")


for (let row1 = 1; row1 < 6; row1++) {
    
    let row2 = 1
    let row3 = row1
    let row4 = row1*row2*row3
    let row5 = row3*row4

    console.log(row1+" "+(row2)+" "+(row3)+" "+(row4)+" "+(row5));
  
  }