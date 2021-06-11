
//CHAPTER 17-20

//1. Declare and initialize an empty multidimensional array
// var str =[[]];

//////////////////////////////////////////////////////////////////////////////////

//2. Declare and initialize a multidimensional array representing the following matrix:

// var str = [
//     [0,1,2,3],
//     [1012],
//     [2101],
// ]
// document.write(str[0])
// document.write('<br>'+str[1])
// document.write('<br>'+str[2])

/////////////////////////////////////////////////////////////////////////////

//3. Write a program to print numeric counting from 1 to 10.

// var numb

// for (numb =1; numb<= 10; numb++){
//     document.write(numb+'<br>')
// }


//////////////////////////////////////////////////////////////////////////////////////


// 4. Write a program to print multiplication table of any number using for loop. Table number 
// & length should be taken as an input from user.


// var table = prompt('Enter number for table you want');
// var tablelength = prompt('Enter length of table you want');

// for (var i = 1; i<= tablelength;i++){
//     document.write(table+'x'+i+'='+table*i+'<br>')
// }


/////////////////////////////////////////////////////////////////////////////////////////

// 5. Write a program to print items of the following array using for 
// loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]


// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
// for (var i =0; i<fruits.length; i++){
//  document.write(fruits[i]+' is on index ' + i + '<br>')
// }


///////////////////////////////////////////////////////////////////////////////////////////////

// 6. Generate the following series in your browser. See example output.

// var counting

//    document.write('<h1>Counting:</h1> <br>')
// for (counting = 1; counting<=15; counting++){
//     document.write(counting + '<br>');
// }

///////////////////////////////

//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// var revCounting

// for (revCounting = 10; revCounting >=1; revCounting--){

// document.write(revCounting+'<br>');
// }

//////////////////////////////////

//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//     document.write('even numbers : <br>')
// for(i=0; i<=20; i++){

//     if(i % 2 == 0){
//     document.write(i +'<br>');
//     }
//     }

/////////////////////////////////////////

//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// for(i=0 ; i<=20; i++){

//     if (i%2 != 0){
//         document.write(i + '<br>')


// }
// }
///////////////////////////////////

// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program
//  to enable “search by user input” in an array. After searching, prompt the user whether the
//   given item is found in the list or not. Example:

// var bakery = ['cake', 'apple pie', 'cookies', 'chips', 'patties'];
// var order = prompt(' welcome to lajawab Bakers. Please place your order');
// var x = order.toLowerCase();
// for (var i = 0; i <= bakery.length; i++) {
//     if (bakery[i] === x) {
//         document.write (x + ' is available in our bakery at index ' + i)
// break
//     }
//   }
// if (bakery[i] !=x){
//   document.write (x + ' is not available in our bakery' +'<br>')
   
// }


//////////////////////////////////////////////////////////////////////////////////////////

// 8. Write a program to identify the largest number in the given array. 


            //  var A = [24, 53, 78, 91, 12]
            //  document.write(A +'<br>');
            //  document.write('Largest number is : ' + Math.max(...A))


  ////////////////////////////////////////////////////////////////////////////
  
//   9. Write a program to identify the smallest number in the given array.
  
  
          
        //    var A = [24, 53, 78, 91, 12]

        //    document.write('The given array is : ' + A +'<br>' )
        //    document.write('The smallest number is : ' + Math.min(...A))




/////////////////////////////////////////////////////////////////////////////////

// 10. Write a program to print multiples of 5 ranging 1 to 100.

// for (var i = 5 ; i<= 100; i=i+5){

//     document.write(i +'<br>')
// }


//CHAPTER--21-25

//   1. Write a program that takes two user inputs for first and
//  last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

//  var firstName = prompt('Enter your first name');
//  var lastName = prompt('Enter your last name');
//  var fullName = firstName+lastName;

//    document.write('welcome'+' ' +fullName);

/////////////////////////////////////////////////////////////////////////////////////

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var favoriteMobile = prompt('Enter your favorite mobile modle');
// document.write('my favorite mobile model is : ' + favoriteMobile);
// var c = favoriteMobile.length

//     document.write('<br>')
//     document.write('The legnth of my favurite mobile is : ' + c);

///////////////////////////////////////////////////////////////////////////////

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var word = 'Pakistani';

// document.write('The string is :' +word);
// document.write('<br> The index of latter n in pakistani is : ' + word.indexOf('n'));


///////////////////////////////////////////////////////////////////////////////////

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var str = 'Hello World ';

// document.write('the index of last word latter l is :  ' + str.lastIndexOf('l' ));

//////////////////////////////////////////////////////////////////////////////////////////

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var word = 'pakistani';
// var x = word.charAt(3);

// document.write(' the character at 3rd index in the word “Pakistani is : '+ x);


/////////////////////////////////////////////////////////////////////////////////////

// 6. Repeat Q1 using string concat() method.

// var firstName = prompt('Enter your first name.');
// var lastName = prompt('Enter your last name.');
// var fullName = firstName.concat(lastName);
// document.write(fullName);

/////////////////////////////////////////////////////////////////////////////////////

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the 
// result in your browser.

// var cityName = 'Hyderabad';
// var newCity = cityName.replace('Hyder' ,  'Islam');
// document.write('City : ' + cityName);
// document.write('<br> After replacement : ' + newCity);

//////////////////////////////////////////////////////////////////////////////////////

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display
//  the result in your browser. var message = “Ali and Sami are best friends. They play cricket 
//  and football together.”;

// var message =' Ali and Sami are best friends. They play cricket  and football together.';

// var newMessage = message.replace(/and/g , '&');

// document.write(newMessage);


/////////////////////////////////////////////////////////////////////////////////////////////

// 9. Write a program that converts a string “472” to a number 472. Display the values & types
//  in your browser.

// var str = '472';
// var num = Number(str);
// document.write('Value '+str +'<br> Type : string');
// document.write('<br> Value '+num +'<br> Type : Number');

//////////////////////////////////////////////////////////////////////////////////////////////

// 10. Write a program that takes user input. Convert and show the input in capital letters.

// var dryFruit = prompt('Enter your favourite dry fruit');
// var a = dryFruit.toUpperCase();

// document.write(a);

//////////////////////////////////////////////////////////////////////////////////////////////

// 11. Write a program that takes user input. Convert and show the input in title case.

// var language = prompt('enter which language you are learning?');
// var x = language.charAt(0);
// var y = x.toUpperCase();
// var z = language.slice(1);
// document.write(y+z);

///////////////////////////////////////////////////////////////////////////////////////////

// 12. Write a program that converts the variable num to string. var num = 35.36 ; Remove the 
// dot to display “3536” display in your browser.

// var num = 35.36;
// var str = toString(num);
// document.write(str)

//////////////////////////////////////////////////////////////////////////////////////////////

// 13. Write a program to take user input and store username in a variable. If the username 
// contains any special symbol among [@ . , !], prompt the user to enter a valid username.
//  For character codes of [@ .

// var fullName = prompt('Enter your full name');
// var alphaNum1 = String.fromCharCode(33);
// var alphaNum2 = String.fromCharCode(64);
// var alphaNum3 = String.fromCharCode( 46);
// var alphaNum4 = String.fromCharCode( 44);


//     if(fullName.fromCharCode()= String.fromCharCode(33, 64, 46, 44)){
//     alert(false)
//     }
//     else{
//         alert(true)
//     }








///////////////////////////////////////////////////////////////////////////////////////
// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program 
// to enable “search by user input” in an array. After searching, prompt the user whether the 
// given item is found in the list or not. Note: Perform case insensitive search. Whether the 
// user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. 
// Example:

// var bakery = ['cake', 'apple pie', 'cookies', 'chips', 'patties'];
// var order = prompt(' welcome to lajawab Bakers. Please place your order');
// var x = order.toLowerCase();
// for (var i = 0; i <= bakery.length; i++) {
//     if (bakery[i] === x) {
//         document.write (x + ' is available in our bakery at index ' + i)
// break
//     }
//   }
// if (bakery[i] !=x){
//   document.write (x + ' is not available in our bakery' +'<br>')
   
// }

////////////////////////////////////////////////////////////////////////////////////////////


// 15. Write a program to take password as an input from user. The password must qualify these requirements:
//  a. It should contain alphabets and numbers b. It should not start with a number c. 
//  It must at least 6 characters long If the password does not meet above requirements, 
//  prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer 
//  to ASCII table at the end of this document.








///////////////////////////////////////////////////////////////////////////////////////////////////

// 16. Write a program to convert the following string to an array using string split method.
//  var university = “University of Karachi”; Display the elements of array in your browser.


// var university = 'univarsity of Karachi';
// var result = university.split("");
// document.write(result +'<br>')


////////////////////////////////////////////////////////////////////////////////////////


// 17. Write a program to display the last character of a user input.

var word = prompt('Enter your word');
var lastWord =word.charAt(word.length-1);
document.write('User input is : ' + word)
document.write('<br> The last character of user input : '+ lastWord);

//////////////////////////////////////////////////////////////////////////////////////

// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number 
// of occurrences of word “the”in given string.

var str = 'The quick brown fox jumps over the lazy dog';