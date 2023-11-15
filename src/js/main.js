import './../css/style.scss'



class Blommor {
  name;
  image;
  constructor(name,image){
    this.name =name;
    this.image = image;
  }
}


const fl1 = new Blommor("Autumn","/src/img/autumn.jpg");
const fl2 = new Blommor("Spring","/src/img/flowers.jpg");
const fl3 = new Blommor("Vinter","/src/img/vinter.jpg");

const flower =[fl1,fl2,fl3];
console.log(flower);

function createHtmlforflower(flow) {
  console.log(flow);
  const div = document.createElement("div");
  const para = document.createElement("p");
  const inPut1 = document.createElement("input");
  const photo = document.createElement("img");
  photo.src = flow.image;
  photo.width = "300";
  photo.height = "200";
  div.className = "card1";
  div.addEventListener("click",()=> {
    console.log(flow);
  });
  photo.addEventListener("click",() =>{
    

  });

  para.innerHTML = flow.name;
  inPut1.type ="text";

  div.appendChild(para);
  div.appendChild(inPut1);
  div.appendChild(photo);

  document.body.appendChild(div);
}

for (let i = 0; i < flower.length; i++) {
  createHtmlforflower(flower[i]);
}

class Dogs {
  name;
  breed;
  age;

  constructor (name, breed, age){
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
}

const a = new Dogs ("Steffi", "German Shepherd mix", 8);
const b = new Dogs ("Dixie", "German Shepherd", 12 );
const c = new Dogs ("Tomtom", "Greyhound", 10);

const app = document.getElementById ("app");
const dogContainer = document.getElementById ("dogcontainer");
const dogList = [a, b, c];

app.appendChild (dogContainer);

for (let i = 0; i < dogList.length; i++){
  const divBox = document.createElement ("div");
  const pTag = document.createElement ("p");
  pTag.innerHTML = dogList[i].name +":" + " " + dogList[i].breed + "," + " " + dogList[i].age;

  divBox.className = "dogbox";

  dogContainer.appendChild (divBox);
  divBox.appendChild (pTag);
}

let people = [
    {name: "Noah", age: 24},
    {name: "Viktor", age: 32},
    {name: "Sara", age: 27}
]

for(let i = 0; i < people.length; i++){
    let ptag = document.createElement("p");

    ptag.innerHTML = people[i].name + " " + people[i].age;

    const ptagHolder = document.getElementById("ptagHolder");

    ptagHolder.appendChild(ptag)

    ptag.id = "pId";
}

