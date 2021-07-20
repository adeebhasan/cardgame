let cards = [
  {
    image: "https://wallpapercave.com/wp/wp2991124.jpg",
    value: 1,
    status: "closed",
  }, //lightning mcqueen
  {
    image: "https://wallpapercave.com/wp/wp2991124.jpg",
    value: 1,
    status: "closed",
  }, //lightning mcqueen
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6FsU7F76wX2YlGJG8Dxlm03tGHeePnk898g&usqp=CAU",
    value: 2,
    status: "closed",
  }, //jackson storm
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6FsU7F76wX2YlGJG8Dxlm03tGHeePnk898g&usqp=CAU",
    value: 2,
    status: "closed",
  }, //jackson storm
  {
    image: "https://wallpapercave.com/wp/wp6060689.jpg",
    value: 3,
    status: "closed",
  }, //cruz ramirez
  {
    image: "https://wallpapercave.com/wp/wp6060689.jpg",
    value: 3,
    status: "closed",
  }, //cruz ramirez
  {
    image:
      "https://i.pinimg.com/originals/0c/39/c3/0c39c396acfce92b77f77e73b3d96cbe.jpg",
    value: 4,
    status: "closed",
  }, //tow mater
  {
    image:
      "https://i.pinimg.com/originals/0c/39/c3/0c39c396acfce92b77f77e73b3d96cbe.jpg",
    value: 4,
    status: "closed",
  }, //tow mater
  {
    image:
      "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-41k6pk_8fa78652.jpeg?region=0%2C0%2C600%2C600",
    value: 5,
    status: "closed",
  }, //doc hudson
  {
    image:
      "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-41k6pk_8fa78652.jpeg?region=0%2C0%2C600%2C600",
    value: 5,
    status: "closed",
  }, //doc hudson
];

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    //console.log(randomIndex);
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

cards = shuffle(cards);
// console.log(cards);
function displayCards(data) {
  let cardsString = "";

  data.forEach(function (card, index) {
    cardsString += `<div class="card" style="background-image:url('${card.image}')">
    <div class="overlay ${card.status}" onclick="openCard(${index})"></div>
    </div>`;
  });
  document.getElementById("cards").innerHTML = cardsString;
}
displayCards(cards);

console.log(cards);

let cardCount = 1;
let val1 = null,
  val2 = null;
let score = 0;
function openCard(index) {
  cards[index].status = "opened";
  if (cardCount === 1) {
    val1 = cards[index].value;
    cardCount++;
  } else if (cardCount === 2) {
    val2 = cards[index].value;
    console.log(val1, val2);
    if (val1 === val2) {
      //if user guessed correctly
      score++;
      document.getElementById("score").innerText = score;
      val1 = null;
      val2 = null;
      cardCount = 1;
    } else {
      //if user didnot guessed correct card
      // alert("game over!!!");
      location.reload();
    }
  }
  displayCards(cards);
}
