//Array

let nilai = [90, 80, 70, 60, 55];
for(let i=0; i<nilai. length; i++)
{
    console.log("nilai =", nilai[i] + 5);
}

console.log(nilai);
// nilai[2] = 90;
// console.log(nilai[nilai.length -1 ]);

let John = ["John","Doe", 33, true];
console.log(John[John.length -1 ]);
console.log(John);

//toString ()
console.log(John.toString());
//join
console.log(John.join("-"));

//pop()
John.pop();
console.log(John.join("-"));

//push()
John.push(true);
John.push("Hello");
console.log(John.join("-"));

//shift()
John.shift();

//unshift()
John.unshift("John");
John.unshift("Prof");
console.log(John.join("-"));





