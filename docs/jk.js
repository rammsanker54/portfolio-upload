let a = 100;
let b= 7;
// let c;
for (var i=1;i<=a;i++){
    if (i%7!=0){
         let c=Math.floor(i/10)
         if (c!=b){
            if(i%10!=7){
                console.log(i)
            }
        }
        }
}

//palindrome
var strf = "MADAM";
var aa= strf.split(); 
var rr =aa.reverse()

if(rr==aa){
    console.log(palin);
}
var len = string.length;  

 
for (let i = 0; i < len / 2; i++) {  

    
    if (string[i] !== string[len - 1 - i]) {  
        console.log( 'It is not a palindrome');  
    }  
}  
console.log( 'It is a palindrome');  
//palindrome?
function checkPalindrom (str) {
  return str == str.split('').reverse().join('');
}


//prime number?
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}


//form validation?
if(document.getElementById('name').value === ""){
   alert("enter something valid");
   return false;
}


//objects  in html and js?
   var boxes = $.find('.box');
   for(var i = 0; i < boxes.length;  i++) {
       var box = new Box();
       box.$view = $(boxes[i]);
       box.connectClick();
   }


  function Box(){
       //PRIVATE VAR
       this.$view;
       this.increaseCounter = function () {
           count++;
       };

       this.getCounter = function () {
           return count;
       }
        var count=0;
   }





