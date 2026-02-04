const x = [1,2,3,4,5,6,7,8];
//console.log(x);
//x.reverse();
//console.log(x);

const r_x = [];
for(const nums of x){
    //console.log(nums);
    r_x.unshift(nums);
}
//console.log(r_x);

//reverse side
for(let i = x.length-1;i>=0;i--){
    const z = x[i];
    console.log(z);
}