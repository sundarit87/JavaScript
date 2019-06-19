//Ex 1
let toyBox = {item1: "car", item2: "ball", item3: "hel"};

let {item1, item2} = toyBox;
let {item3, disc} = toyBox;

console.log(item1,item2,disc);


//ex 2

let wid = ['w1', 'w2', 'w3','w4']

let [a,b, ...d] = wid;
console.log(a,b,d);