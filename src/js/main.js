import './../css/style.scss'

let people = [
    {name: "Noah", age: 24},
    {name: "Viktor", age: 32},
    {name: "Sara", age: 27}
]

for(let i = 0; i < people.length; i++){
    let ptag = document.createElement("p");

    ptag.innerHTML = people[i].name;

    const ptagHolder = document.getElementById("ptagHolder");

    ptagHolder.appendChild(ptag)
}