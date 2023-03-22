// Expresions
4 + 4;

// Variables
let cityName;   // declare a variable without initializing it
                // let lets you change the value

let countryName = "Portugal"; //declare a variable and initialize it

// Variables With Types
let otherCityName: string;  //you can specify the type, without initializing it
                            //when no type is given, any is assumed

let anotherCityName: string = "Porto"; //you can specify the type, and initialize it

/*
let anotherCityName: string = "Porto";
 */

// Constants
const portugalCountryCode = "PT"; //with const you can't change the value
const franceCountryCode: string = "FR"; //you can specify the type
//franceCountryCode = "PT"; //this is not possible

// Types Examples
let city: string = "Kansas";
console.log("city" + city);

let birthYear: number = 1950;
console.log("birthYear" + birthYear);

let thisHappenned: boolean = true;
console.log("thisHappenned: " + thisHappenned);

let surname: any = "Doe";
console.log("surname: " + surname);

//Functions
// Parameter type annotation
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
greet("John Doe");

function getFavoriteNumber(): number {
    return 26;
}
console.log("My Favorite Number: " + getFavoriteNumber());
