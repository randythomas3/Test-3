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
//


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
    
//  // [0 ,1 ,1, 2, 3, 5, 8, 13, 21, 34, 55, ...]
    function fb(n){
        let n1,n2,n3;
        n1 = -1 
        n2 = 1
        for(let i = 0 ; i < n ; i++){
              //  n1   n2   n3  previous
              //       n1   n2   n3  next
              //  0    1    1    2    3    5    8    13
            n3 = n1 + n2   //  1 2  3   5  8
            console.log(n3) // 
            n1 = n2       //  1  1  2  3   5
            n2 = n3        //  1  2  3  5   8
        }
    }

    function fbRange(loops, firstNum = -1, secondNum = 1){
      let n1,n2,n3;
      n1 = firstNum 
      n2 = secondNum
      for(let i = 0 ; i < loops ; i++){
            //  n1   n2   n3  previous
            //       n1   n2   n3  next
            //  0    1    2    3    5    8    13
          n3 = n1 + n2   //  1 2  3   5  8
          console.log(n3) // 
          n1 = n2       //  1  1  2  3   5
          n2 = n3        //  1  2  3  5   8
      }
  }

// failed attempt to do a F that is return Fibonacci series
// in the end i did it
// //////////////////////////////////////////////////////////////////////////////////

function family(generation){
	let y = ""
	let x = "great "
	for(let i = 0 ; i < generation ; i++) {
		y += x
	}
		return `${y}grandson`
}
//  it will write great as many times as you want
// ////////////////////////////////////////////////////////////////
// sevenBoom([1, 2, 3, 7, 5, 6, 7])
let x = false
function sevenBoom(arr){
  arr.forEach(ele)
  if (x==true){
    x = false
    return "boom"
}
}
function ele(a){
  if (a === 7){ x = true}
}
// exercise from EDABIT hard level (I guess) return boom if there is 7 in the arr
// ///////////////////////////////////////////////////////////////////////////
function integer(n){
  let y = 0
  let sum = 0
  for(let i = 1; i < 30 ; i++){
    y = Math.floor(n%10**i/10**(i-1))
    sum += y
  }
  console.log(sum)
  if (sum%2 === 0){
      return "Evenish"
  }
  else {
    return "Oddish"
  }
}

// this function will return the sum of all the individuals
// numbers in a big number and tell you whether it's oddish or evenish
// https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH
// ///////////////////////////////////////////////////////////////////////////////////

//            0   1   2   3
  // let arr = [20, 30, 10, 40]
  // for(let i = 0; i < arr.length; i++){
  //   if(i%2===0){ y = y + arr[i] }
  //   else{x = x + arr[i] }
  // }
  let myArray =[20, 30, 10, 40];

  function trackLoop(n){return n%4===0};
  
  function trackRobot2(arr){
    let x = 0;
    let y = 0;
    for(let i = 0; i < arr.length; i++){
        // 01 -23 45 -67 89 -1011 1213
      if     (trackLoop(i+4)){y += arr[i]}          // 0 4 8 12 , -2 -6 -10
      else if(trackLoop(i+3)){x += arr[i]}        // 1 5 9 13 , -3 -7 -11
      else if(trackLoop(i+2)){y -= arr[i]} 
      else if(trackLoop(i+1)){x -= arr[i]} 
    }
      return `(${x}, ${y})`
  }

  // trackRobot(20, 30, 10, 40)
function trackRobot(n1=0, n2=0, n3=0, n4=0){
  let x = 0
  let y = 0
    y = y + n1 // 20
    x = x + n2 // 30
    y = y - n3 // 10
    x = x - n4 // -10
    return `(${x}, ${y})`
}
// return the robot position
// https://edabit.com/challenge/jfpfpH6w42tZeRo2T
// ///////////////////////////////////////////////////////////////////
//  
function admirable(n){
  let divisors = 0 
  let sum = 0
  for (let i = 2 ; i <= n ;i++){
    if(n%i === 0){
      divisors = n/i
      sum += divisors
    console.log(divisors)
    // console.log(n/i*-2)
    }
 }
 for (let j = 2 ; j <= n ;j++){
  if(n%j === 0){
      divisors = n/j
      if ((divisors*-2)+sum === n){ console.log(`and it's admirable ${divisors}`) }
    }}
  if (sum === n) {console.log(`and it's perfect`)}
  return `sum is ${sum}`
}
// return if a number is perfect or admirable
// https://edabit.com/challenge/WEhe9MCnyZG8WhN9Z
// /////////////////////////////////////////////////////////////////










