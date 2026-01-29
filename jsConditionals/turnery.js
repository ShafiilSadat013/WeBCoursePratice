
const age = 12;

//if(age>=18){
//    console.log('u can vote');
//}
//else{
  //  console.log('u cannot vote');
//}

//age>=18 ? console.log('u can vote') : console.log('u cannot vote')
let price = 5000;
const isleader = true;
/*if(isleader===true){
    price = 0;
}
else{
    price+=100;
}
console.log(price); */

//price = isleader === true ? 0 : price+100;
//console.log(price);

/*if(isleader === true){
    if(price>1000){
        price = price/2;
    }
    else{
        price = 0;
    }
}
else{
    price= price;
}
console.log(price); */

price = isleader === true ? price > 1000 ? price/2 : 0 : price + 1000; 
console.log(price);