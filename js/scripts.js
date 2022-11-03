//let var const

// const p = 3.1315;
// console.log(p);

//----obieqti

const car = {
    color: "red",
    brand: "fiat",
    model: "500"

};

console.log(car);

const student = {
    firstname: "natia",
    lastname: "begdarashvili",
    age: 2,
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }
}


const meorestud ={
    firstname: "daniil",
    lastname: "buligin",
    age: 5,
}

let meorestudfullname = student.fullname.bind(meorestud);
console.log(meorestudfullname());

// list

let xili = ["vashli", "msxali", "fortoxali", "mandarini"];

console.log(xili);

xili.push("kiwi");
// xili.pop(); shlis bolo elements
console.log(xili[0]);
console.log(xili[xili.length - 1]);

for(let i = 0; i< xili.length; i++){
    console.log(xili[i]);
}