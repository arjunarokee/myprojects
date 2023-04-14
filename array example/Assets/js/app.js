let person = [
    {
        id: 1,
        name: "Ram",
        age: 20,
        is_admin: true,
    },
    {
        id: 2,
        name: "Sai",
        age: 30,
        is_admin: false,
    },
    {
        id: 3,
        name: "John",
        age: 25,
        is_admin: false,
    }
]
// var btn = document.getElementById("firstbtn")
// btn.addEventListener("click",function displayName(){
//     console.log("Ram")
//     console.log("Sai")
//     console.log("John")
// })

const btn = document.getElementById("firstbtn");
btn.addEventListener("click", function displayName() {
  // Use forEach to loop over the array and log each person's name
  person.forEach(function (people) {
    console.log(people.name);
    // document.write(people.name);
  });
});


var btn2 = document.getElementById("btn-2")
btn2.addEventListener("click", function filterName(){
    const peopleName = person.filter(function(people) {
        return people.name === "Ram"
    });
    console.log(peopleName)
})

var btn3 = document.getElementById("btn-3")
btn3.addEventListener("click", function filterName(){
    const peopleName2 = person.filter(function(people) {
        return people.name === "Sai"
      });
      console.log(peopleName2)
})
var btn4 = document.getElementById("btn-4")
btn4.addEventListener("click", function filterName(){
    const peopleName3 = person.filter(function(people) {
    return people.name === "John"
});
console.log(peopleName3)
})

const btn5 = document.getElementById("btn-5");
btn5.addEventListener("click", function newChange() {
  // Create a copy of the original array
  const personCopy = [...person];
  personCopy.shift();
  console.log(personCopy);
});

const btn6 = document.getElementById("btn-6");
btn6.addEventListener("click", function newChange() {
  // Create a copy of the original array
  const personCopy = [...person];
  personCopy.pop();
  console.log(personCopy);
});