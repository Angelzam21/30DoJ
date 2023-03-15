/*
Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
Filter out companies which have more than one 'o' without the filter method
Sort the array using sort() method
Reverse the array using reverse() method
Slice out the first 3 companies from the array
Slice out the last 3 companies from the array
Slice out the middle IT company or companies from the array
Remove the first IT company from the array
Remove the middle IT company or companies from the array
Remove the last IT company from the array
Remove all IT companies*/

//1.Declare an empty array;
let emptyArray = []
//2.Declare an array with more than 5 number of elements
let fiveNumbersArray = [1,2,3,4,5]
//3.Find the length of your array
console.log(fiveNumbersArray.length)
//4.Get the first item, the middle item and the last item of the array
console.log(fiveNumbersArray[0]+", "+fiveNumbersArray[2]+", "+fiveNumbersArray[4])
/*5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. 
The array size should be greater than 5*/
let mixedDataTypesArray = [{firstName: "Angel", lastName: "Zambrano"},'my age is', 27,true, 29.05, 'M']
console.log(mixedDataTypesArray.length)
/*6.Declare an array variable name itCompanies and assign initial values 
Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon*/
let itCompaniesArray = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompaniesArray)                                                   //Print the array using console.log()
//7.Print the number of companies in the array
console.log("numbers of companies in itCompaniesArray: "+(itCompaniesArray.length))
//8.Print the first company, middle and last company
console.log(itCompaniesArray[0]+", "+itCompaniesArray[3]+", "+itCompaniesArray[6])                                                   //Print the array using console.log()
//9.Print out each company
for (let index = 0; index < itCompaniesArray.length; index++) {
    console.log(itCompaniesArray[index]);
}
//10.Change each company name to uppercase one by one and print them out
for (let index = 0; index < itCompaniesArray.length; index++) {
    console.log(itCompaniesArray[index].toUpperCase());
}
//11.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompaniesArray.join(', ')+" are big IT companies")
/*12. Check if a certain company exists in the itCompanies array. 
If it exist return the company else return a company is not found*/
let exist = (prompt("what IT company do you wanna check?")).toLowerCase()
if (itCompaniesArray.indexOf(exist)==-1) {
    console.log(exist+" doesn't exist")
} else {
    console.log(itCompaniesArray[exist])
}
