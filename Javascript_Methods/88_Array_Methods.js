let countries = ["India","Australia","England"];

console.log(countries.length);

countries.push("USA");

console.log(countries);

countries.pop();

console.log(countries);

countries.unshift("USA");

console.log(countries);

countries.shift();

console.log(countries);

console.log(countries.includes("England"));

console.log(countries.indexOf("England"));

console.log(countries.join("-"));

console.log(countries.slice(1));

console.log(countries.splice(1,2,"India"));

console.log(countries.reverse());

let nums = [7,2,4,1];

nums.sort((a,b)=>a-b);

console.log(nums);


let p = [7,33];

let q = [12,28];

console.log(p.concat(q));

countries.forEach((countries,index)=>
{
    console.log(index,countries);
});

let num=[1,2,3];

let result=num.map(num=>num*2);

console.log(result);


let m=[7,33,18,45];

let result1=m.filter(m=>m>40);

console.log(result1);

let s=[7,33,18,12,28,45,63];

let result2=s.find(s=>s>50);

console.log(result2);
