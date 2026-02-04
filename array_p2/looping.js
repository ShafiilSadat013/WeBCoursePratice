//looping technic

// for loop
// while loop
// do while 
// for of : array loop
//for in : object loop

const friends = ['simi','sdt','dagger','gecko'];
for(const friend of friends){
    //console.log(friend);
}

for(let i =0;i<friends.length;i++){
    console.log(i);
    console.log(friends[i]);
}

const numbers = [1,2,3,4,5,6,7,87,9,56,5];
for(let i=0;i<numbers.length;++i){
    //console.log(numbers[i]);
}

let i = 0
while(i<friends.length){
    console.log(friends[i]);
    i++;
}

let n=0;
while(n<numbers.length){
    console.log(numbers[n]);
    n++;
}
