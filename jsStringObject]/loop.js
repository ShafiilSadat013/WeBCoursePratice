const mobile = {
    brand : 'nothing',
    price : 25000,
    color : 'black',
    camera : '12mp',
    isNew : true
}

for(const prop in mobile){
    // console.log(prop);
    // console.log(mobile[prop])
}

const keys = Object.keys(mobile);
const val1 = Object.values(mobile);
console.log(keys);
console.log(val1);

for(const key of keys){
    //console.log(key);
    console.log(key, ':' , mobile[key]);
}