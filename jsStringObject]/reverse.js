const x = 'I want to quite smoking';
let reverse = ''
for(const letter of x){
    //console.log(letter);
    reverse = letter + reverse;
}
//console.log(reverse);

let rev = ''
for(let i=0;i<x.length;i++){
//    console.log(i);
//    console.log(x[i]);
      const letter = x[i];
      rev =  letter + rev;
}
//console.log(rev);

//shortcut
const reversed = x.split('').reverse().join('');
console.log(reversed);