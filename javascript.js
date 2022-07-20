function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (let i = 0; i < 100; i++) {
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255,0,0,0.5)';
      ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
      ctx.fill();
    }
  }
// //////////////////////////////////////////////////////////////////////
function random(number) {
  return Math.floor(Math.random() * number);
} // return a random value less than the given argument
// ///////////////////////////////////////////////////////////////////
function est(n){
  let   pointCir = 0 ;
  let  pointTot = 0 ;
    for (let i=0 ; i<n ;i++){
        x= Math.random();
        y= Math.random();
        distance= x**2 +y**2
        if (distance < 1){
            pointCir += 1 ;
            pointTot += 1;
        } else{
            pointTot += 1;
        }
    }
    return 4*pointCir/pointTot
} // calculates the pi through a random function

// /////////////////////////////////////////////////////////
function Pprime(n){
    let x
    for (let i=0 ; i<n ;i++) {
        for (let j=0 ; j<i ; j++) {
            x= `i is ${i}  j is ${j}`
            console.log(`${x}`)
        }
        console.log(`second  ${x}`)
    }
}

function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      console.log( i ); // a prime
    }
  }


  function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      console.log( i ); // a prime
    }
  }

function isItP(n){
    let x = true
    for(let i =2 ; i < n ; i++){ 
    if(n%i == 0) {x=false}
    }
    return x
}

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (isItP(i)){console.log(i)}
  }
}
// all the functions above were an exercise 
// to list all the prime numbers within a given range

// //////////////////////////////////////////////////////////////
function fizz(n) {
    for (let i = 1 ; i <= n ; i++) {
        if(i%3==0 && i%5==0){console.log("fizzbuzz")}
       else if (i%3==0) {
            console.log("fizz")
        } else if (i%5==0){
            console.log("buzz")
        } else{
            console.log (i)
        }
        
    }
}
//  this was the fizz assignment from the odin project
// ///////////////////////////////////////
function adrr(n) {
    let x = 0
    for (let i = 0; i <= n; i++) {
        
      x= ((i*(i+1))/2)
    }
    return x
  }
  

function eq(n){ 
    let x = 0
    x = n*(1+n)/2
    return x
}
//this one is same like the one above except
//  the above one is written in a stupid way;
// it is return the summation of all values
//  from 1 to the given argument


// this was a self practice to write the sigma summation
// ////////////////////////////////////////////////////

const canvas = document.querySelector('.Canv');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(111, 111, 111)';
ctx.fillRect(0, 0, width, height);


// drawing 3 rectangles
// ctx.fillStyle = 'rgb(255, 0, 0)';
// ctx.fillRect(50, 50, 100, 150);
// ctx.fillStyle = 'rgb(0, 255, 0)';
// ctx.fillRect(75, 75, 100, 100);
// ctx.fillStyle = 'rgba(255, 0, 255, 0.75)';
// ctx.fillRect(25, 100, 175, 50);

// drawing stroke rectangle
// ctx.strokeStyle = 'rgb(255, 255, 255)';
// ctx.lineWidth = 5;
// ctx.strokeRect(25, 25, 175, 200);

// didn't work
// ctx.fillStyle = 'rgb(255, 0, 0)';
// ctx.beginPath();
// ctx.moveTo(50, 50);
// // draw your path
// ctx.fill();

// // drawing triangle 
// ctx.fillStyle = 'rgb(255, 0, 0)';
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// const triHeight = 50 * Math.tan(degToRad(60));
// ctx.lineTo(100, 50 + triHeight);
// ctx.lineTo(50, 50);
// ctx.fill();

// // drawing circle
// ctx.fillStyle = 'rgb(0, 0, 255)';
// ctx.beginPath();
// ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
// ctx.fill();

// // drawing pac-man
// ctx.fillStyle = 'yellow';
// ctx.beginPath();
// ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
// ctx.lineTo(200, 106);
// ctx.fill();

// // drawing text
// ctx.strokeStyle = 'white';
ctx.lineWidth = 1;
// ctx.font = '36px arial';
// ctx.strokeText('Canvas text', 50, 50);

// ctx.fillStyle = 'red';
// ctx.font = '48px georgia';
// ctx.fillText('Canvas text', 50, 150);

// drawing a math function
let X = 0
let Y = 0

function draw(len){
    
for (let i = 0; i < len ; i++){
    X = i
    Y = X**2*0.001
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(X-1, (X-1)**2*0.001);
    ctx.lineTo(X, Y);
    // ctx.moveTo(0, (X-1)**2*0.001);
    // ctx.lineTo(X, Y);
    ctx.stroke();
}
}


function degToRad(degrees) {
    return degrees * Math.PI / 180;
  }
//   canvas exercise
// ///////////////////////////////////////////////////////

// const sumArray = function(array) {
//     let sum = 0;
//     array.forEach(function(number) {
//       sum += number;
//     });
//     return sum;function
//   };function
//   sumArray([2, 2, 2]);

  function sumArray(array){
    let sum = 0;
    array.forEach(number => {
      sum += number;
    });
    return sum;
  };
// Rewriting a function that's sums an array elements
// ////////////////////////////////////////////////////////////////////  
// // [ 1, 2, 3, 5, 8, 13, 21, ...]
// for (let i = 1; i < 10 ; i++){
//     function show(n){
//         return n
//     }
//     function sum(n){
//         return n + n
//     }
//     y = x + i
//     console.log(y)
//     x = i

// x = 1
// y = 2
// z1 = x + y
// function sum1(i){return i }
// function show(i){
//     return sum1(i) + sum1(i-1)
// }
// function a(n) {
//      return(n<2)?1:console.log(a(n-2)+a(n-1))
//    }
//    function a(n) {
//     if(n<0) return 0;
//     return console.log(a(n-2)+a(n-1))
//   }

// z2 = z1 + y
// z3 = z1 + z2
// z1 = z3
// z4 = z2 + z3
// z5 = z4 + z5
// z6 = z5 + z6

// x = 1
// y = 2
// z1 = x + y 
// z2 = x + y + y
// z3 = x + y + x + y + y
// z4 = x + y + x + y + y + x + y + y
// z5 = x + y + x + y + y + x + y + y + x + y + x + y + y
// z6 = x + y + x + y + y + x + y + y + x + y + x + y + y + x + y + x + y + y + x + y + y

// z1 = x + y 
// z2 = x + 2y
// z3 = 2x + 3y
// z4 = 3x + 5y
// z5 = 5x + 8y
// z6 = x + y + x + y + y + x + y + y + x + y + x + y + y + x + y + x + y + y + x + y + y
// }
// // [0 ,1 ,1, 2, 3, 5, 8, 13, 21, ...]


// function writeFab(len){
//     let n1=0 , n2=1, sum=0;
//     while (sum<len){
//            console.log(sum)
//         n1 = n2
//         n2 = sum
//         sum = n1 + n2
//     }
// }

//     // function fb(n){
//     //     if (n < 2){console.log(1)}
//     //     else{   
//     //        console.log( fb(n-1) + fb(n-2))
//     //     }
//     // }


//     function show(i){
//         return(i<2)?1:show(i) + show(i-1)
//     }
//     function show(i){
//         // return(i<2)?1:show(i-1)*3
//      if (i< 2) {return}
//       show(i-1)*3
//     }
//     function fac(n){
//         return(n<2)?1:fac(n-1)*n;
//     }
//     // 0 3 5 7
//     // 1 3 5
//     function totalSum(i){
//         return 
//     }
    

    function fb(n){
        let n1,n2,n3,x;
        n1 = 0 
        n2 = 1
        for(let i = 0 ; i < n ; i++){
              //           n1   n2   n3
              //  1   2    3    5    8
            n3 = n1 + n2   //  1 2  3   5  8
            console.log(n3) // 
            n1 = n2       //  1  1  2  3   5
            n2 = n3        //  1  2  3  5   8
        }
    }

// failed attempt to do a F that is return fabino series
// in the end i did it
// //////////////////////////////////////////////////////////////////////////////////






