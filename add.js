function add(a,b){
    return a+b;
}
let result;
for (let i=0;i<3;i++)
{
result = add(i,i+1);
console.log("after 10 calls ",result);
}

// console.log("after 10 calls ",result); // anser comes only for last one