const person = {
    name: 'sadat',
    age: 23,
    profession: 'student',
    salary: 25000,
    married: true,
    'fav places' : ['dhk','coxB','jessore']
}


person.salary = 30000;
person['age'] = 26;
person['fav places'] = ['nyc','syd'];


const pName = 'profession';
person[pName] = 'devOps';

console.log(person);