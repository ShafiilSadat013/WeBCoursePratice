
const age = 24;
const price = 500;
if(age <= 12){
    console.log('You Can Eat for free');
}

else if(age >= 60){

    const discount = price *(50/100);
    const pay = price-discount;
    console.log(pay);

}

else if(age<=50){
    const discount = price*(25/100);
    const pay = price - discount;
    console.log(pay);
}

else{
    console.log('u have to pay full price');
}