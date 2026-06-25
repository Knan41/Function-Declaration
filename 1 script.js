// 1. Tapşırıq
//Verilən ədədin tərsini tapan funksiya yaz.

let num =  "1534434343"
let ters = ''
function number(){
    for(i=num.length-1;i>=0;i--){
        ters+=num[i];
    }return ters
}
console.log(number());
