var returnBlank = document.getElementById("textInput");
var cardContainer = document.getElementsByClassName("person");
var container = document.getElementById("container");
var counter = 0;
var targetDiv;
var targetNumberID;
var textInput=document.getElementById("textInput");
var keyInputOutput = document.getElementById("textInput");


var people = [
  {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Her skills in battle and with the katana blade dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
  },
  {
    title: "Master Hobo",
    name: "Wild Bill Hickok",
    bio:  "He told many outlandish tales about his life and was regarded as a liar by many of his contemporaries.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Wild_Bill_Hickok_sepia.png",
    lifespan: {
      birth: 1837,
      death: 1876
    }
  },
  {
    title: "Musician",
    name: "J.J. Cale",
    bio: "J.J. Cale, was an American singer-songwriter, recording artist and influential guitar stylist.",
    image: "http://ichef.bbci.co.uk/images/ic/256x256/p01bqgcl.jpg",
    lifespan: {
      birth: 1938,
      death: 2013
    }
  },
  {
    title: "Writer",
    name: "Gabriel García Márquez",
    bio: "Considered one of the most significant authors of the 20th century and one of the best in the Spanish language.",
    image: "https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2004/08/09/GGM1.jpg?w=620&q=55&auto=format&usm=12&fit=max&s=c32220e2b5130b6a78a5b532424fcfe3",
    lifespan: {
      birth: 1927,
      death: 2014
    }
  }
];

for (var i=0; i<people.length; i++) {
  counter++;
  console.log("counter", counter);
  var card =
    `<person class="person" id="person--${counter}">
      <header class="header">
        <div class="name">${people[i].name}</div>
        <div class="title">${people[i].title}</div>
      </header>
      <section class = "section">
        <div class="bio" id="bio--${counter}">${people[i].bio}</div>
        <img class="image" src="${people[i].image}">
      </section>
      <footer class="footer">
        <div class="birth">Born ${people[i].lifespan.birth}<div>
        <div class="death">Died ${people[i].lifespan.death}</div>
      </footer>
    </person>`

  var newDiv = document.createElement("article");
  newDiv.innerHTML = card;
  var newAttr = document.createAttribute("id");
  newAttr.value = `cardWrapper--${counter}`;
  newDiv.setAttributeNode(newAttr);
  container.appendChild(newDiv);


  newDiv.addEventListener("click", function (clickEvent) {
    targetDiv = clickEvent.currentTarget;
    targetDiv.classList.toggle("addBorder");
    // if i wanted to keep this class, add instead of toggle
    // When you click on one of the person elements, the text 
    // input should immediately gain focus so that you can start typing.
    textInput.focus();
    // event is event.target.id, event.target.value;
    // currentTarget is the element that the event listener was placed on
    // it bubbles up from whatever element was clicked on to the div that 
    // eventlistener was placed
    console.log("click", event.currentTarget.id);
    test = event.currentTarget.id;
    targetNumberID = test.split("--")[1]
  });
};
// change so keyup event listener is not in loop and is added only once
// can't be from variable inside of the card click event
// if define target div as global variable, will change value on each click
// and on click can grab target div on each click
// and will have access to it 
keyInputOutput.addEventListener("keyup", function(keyupEvent) {
  var bio = document.getElementById(`bio--${targetNumberID}`);
  bio.innerHTML = keyupEvent.target.value;
});

    // When you press the enter/return key when typing in the input field, 
    // then the content of the input field should immediately be blank.
returnBlank.addEventListener("keyup", function(event) {
  if (event.keyCode===13) {
    document.getElementById("textInput").value="";
  }; 
});
// target is where is clicked specifically, and currentTarget is where the
// listener is attached


