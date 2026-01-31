const person = {
    name: 'sadat',
    age: 23,
    profession: 'student',
    salary: 25000,
    married: true,
    'fav places' : ['dhk','coxB','jessore']
}
//console.log(person);
//dot notation
//console.log(person.profession);
const income = person.salary;
//console.log(income);

//bracket notation

console.log(person['age']);
console.log(person['fav places']);

const keyname = 'profession';
console.log(person[keyname]);