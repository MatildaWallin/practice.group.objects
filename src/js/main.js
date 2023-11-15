import './../css/style.scss'

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


