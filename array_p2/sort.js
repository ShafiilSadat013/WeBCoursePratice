const persons = ['simi','sdt','dagger','gecko'];
const sorted = persons.sort();
console.log(sorted);

const x = [1,5,6,73,53,3,8,46,4,98];
x.sort(function (a,b) {return a - b});
console.log(x);
x.sort(function(a,b) {return b-a});
console.log(x);