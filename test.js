let money = 0;
let profit = 0;
let cardResult;
let textProfit = '';
let bet = 0;
let randomCard;
loadData();
let rollButton = document.getElementById("rollButton");
let blackButton = document.getElementById("black_button");
let redButton = document.getElementById("red_button");
rollButton.disabled = true
blackButton.disabled = true
redButton.disabled = true

//хазарт
function hazart(input) {
  rollButton.disabled = input
  blackButton.disabled = input
  redButton.disabled = input
}

if (money <= 0) {
  money += Number(prompt("Сложи пари"))
  updateMoney();
}

function blackAndRed(input) {
  let cardColor = '';
  const myChoice = input
  randomCard = cardType()
  const sixCard = randomCard[Math.floor(Math.random() * 5)]
  let colorSixCard = sixCard[1]
  if (colorSixCard == "♠️" || colorSixCard == "♣️") {
    cardColor = "black"
  } else if (colorSixCard == "♥️" || colorSixCard == "♦️") {
    cardColor = "red"
  }

  document.getElementById("sixUpColor").textContent = sixCard[1]
  document.getElementById("sixDownColor").textContent = sixCard[1]
  document.getElementById("sixUpType").textContent = sixCard[0]
  document.getElementById("sixDownType").textContent = sixCard[0]

  if (cardColor === "red") {
    document.getElementById("sixUpColor").style.color = "red"
    document.getElementById("sixDownColor").style.color = "red"
    document.getElementById("sixUpType").style.color = "red"
    document.getElementById("sixDownType").style.color = "red"
  } else {
    document.getElementById("sixUpColor").style.color = "black"
    document.getElementById("sixDownColor").style.color = "black"
    document.getElementById("sixUpType").style.color = "black"
    document.getElementById("sixDownType").style.color = "black"
  }

  if (myChoice === cardColor) {
    profit *= 2;
    textProfit = `Win !  You choice ${myChoice} - You win !`
    document.getElementById("lose_text").style.display = "block"
    document.getElementById("lose_text").textContent = "WIN !!!"
   
  } else {
    textProfit = `You choice is : ${myChoice}. The card is ${cardColor} ${sixCard[1]}`
    profit = 0
    document.getElementById("lose_text").style.display = "block"
    document.getElementById("lose_text").textContent = "OOPS !!! You lost!"

    setTimeout(() => {
      document.getElementById("lose_text").style.display = "none"
      hazart(true);
      let cards = document.querySelectorAll('#card1');
      cards.forEach(function (card) {
        card.classList.remove('hidden');
      });

      document.getElementById('reservCard').style.display = 'none'

      firstCardBack.style.display = "block";
      firstCardFrond.style.display = "none";
      secondCardBack.style.display = "block";
      secondCardFrond.style.display = "none";
      thirdCardBack.style.display = "block";
      thirdCardFrond.style.display = "none";
      forthCardBack.style.display = "block";
      forthCardFrond.style.display = "none";
      fiveCardBack.style.display = "block";
      fiveCardFrond.style.display = "none";
      sixCardBack.style.display = 'block';
      sixCardFrond.style.display = 'none';

    }, 1000);

  }
  updateMoney();
  sixCardBack.style.display = 'none';
  sixCardFrond.style.display = 'block';
}


function updateMoney() {
  document.getElementById("balans").textContent = money;
  document.getElementById("profit").textContent = profit;
  document.getElementById("bet").textContent = bet
  document.getElementById("text_profit").textContent = textProfit;
}
updateMoney();

const firstCardBack = document.getElementById("display_card1")
const firstCardFrond = document.getElementById("display_result1")
const secondCardBack = document.getElementById("display_card2")
const secondCardFrond = document.getElementById("display_result2")
const thirdCardBack = document.getElementById("display_card3")
const thirdCardFrond = document.getElementById("display_result3")
const forthCardBack = document.getElementById("display_card4")
const forthCardFrond = document.getElementById("display_result4")
const fiveCardBack = document.getElementById("display_card5")
const fiveCardFrond = document.getElementById("display_result5")
const sixCardBack = document.getElementById("display_card6")
const sixCardFrond = document.getElementById("display_result6")



let holdButton1 = document.getElementById("holdButton1");
let holdButton2 = document.getElementById("holdButton2");
let holdButton3 = document.getElementById("holdButton3");
let holdButton4 = document.getElementById("holdButton4");
let holdButton5 = document.getElementById("holdButton5");

let flag1 = false;
let flag2 = false;
let flag3 = false;
let flag4 = false;
let flag5 = false;

//hold бутоните
function holdButton_visibility(color, input) {
  let flag = input
  holdButton1.style.backgroundColor = color;
  holdButton2.style.backgroundColor = color;
  holdButton3.style.backgroundColor = color;
  holdButton4.style.backgroundColor = color;
  holdButton5.style.backgroundColor = color;

  holdButton1.disabled = flag;
  holdButton2.disabled = flag;
  holdButton3.disabled = flag;
  holdButton4.disabled = flag;
  holdButton5.disabled = flag;
}

let stoppedCard1;
let stoppedCard2;
let stoppedCard3;
let stoppedCard4;
let stoppedCard5;

holdButton1.onclick = () => {
  holdButton1.style.backgroundColor = 'red'
  flag1 = true
  stoppedCard1 = [cardResult[0][0], cardResult[0][1]]
};

holdButton2.onclick = () => {
  holdButton2.style.backgroundColor = 'red'
  flag2 = true
  stoppedCard2 = [cardResult[1][0], cardResult[1][1]]
}

holdButton3.onclick = () => {
  holdButton3.style.backgroundColor = 'red'
  flag3 = true
  stoppedCard3 = [cardResult[2][0], cardResult[2][1]]
}

holdButton4.onclick = () => {
  holdButton4.style.backgroundColor = 'red'
  flag4 = true
  stoppedCard4 = [cardResult[3][0], cardResult[3][1]]
}

holdButton5.onclick = () => {
  holdButton5.style.backgroundColor = 'red'
  flag5 = true
  stoppedCard5 = [cardResult[4][0], cardResult[4][1]]
}

document.getElementById("bet+1").onclick = () => {
  if (money == 0) {
    alert("Нямате налични средства за да направите залог!");
    return;
  }
  if (bet >= money) {
    alert("Недостатъчен баланс за този залог !")
    return;
  } else {
    bet++;
    updateMoney();
  }

}

document.getElementById("bet-1").onclick = () => {
  if (bet == 0) {
    alert("залогът е на 0");
    return;
  }

  bet--;
  updateMoney();
}



document.getElementById("get_button").onclick = () => {
  if (profit > 0) {
    money += profit
    profit = 0
    updateMoney();
    hazart(true);
    document.getElementById("lose_text").style.display = "none"
  }

  let cards = document.querySelectorAll('#card1');
  cards.forEach(function (card) {
    card.classList.remove('hidden');
  });

  document.getElementById('reservCard').style.display = 'none'
  firstCardBack.style.display = "block";
  firstCardFrond.style.display = "none";
  secondCardBack.style.display = "block";
  secondCardFrond.style.display = "none";
  thirdCardBack.style.display = "block";
  thirdCardFrond.style.display = "none";
  forthCardBack.style.display = "block";
  forthCardFrond.style.display = "none";
  fiveCardBack.style.display = "block";
  fiveCardFrond.style.display = "none";
  sixCardBack.style.display = 'block';
  sixCardFrond.style.display = 'none';
}


//генерира карта
function cardType() {
  let final = [];

  let arr1 = ["♠️", "♣️", "♥️", "♦️"];
  let arr2 = ["K", "A", "J", "Q", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  let i = final.length;
  while (i < 5) {
    let color = arr1[Math.floor(Math.random() * 4)];
    let type = arr2[Math.floor(Math.random() * 13)];
    let row = [type, color];
    let flag = true;

    for (let j of final) {
      if (row[0] === j[0] && row[1] === j[1]) {
        flag = false;
        break;
      }
    }

    if (flag) {
      final.push(row);
      i++;
    }
  }

  // Замяна на конкретни индекси с ръчно зададени карти
  if (flag1) { final[0] = stoppedCard1 }
  if (flag2) { final[1] = stoppedCard2 }
  if (flag3) { final[2] = stoppedCard3 }
  if (flag4) { final[3] = stoppedCard4 }
  if (flag5) { final[4] = stoppedCard5 }


  // Функция за проверка на дублирани карти
  function hasDuplicates(arr) {
    let seen = new Set();
    for (let card of arr) {
      let cardStr = card.join('');
      if (seen.has(cardStr)) {
        return true;
      }
      seen.add(cardStr);
    }
    return false;
  }

  // Заменяне на дублираните карти
  while (hasDuplicates(final)) {
    for (let j = 0; j < final.length; j++) {
      let currentCard = final[j];
      let count = final.filter(card => card[0] === currentCard[0] && card[1] === currentCard[1]).length;

      if (count > 1 && (currentCard !== stoppedCard1 && currentCard !== stoppedCard2 && currentCard !== stoppedCard3 && currentCard !== stoppedCard4 && currentCard !== stoppedCard5)) {
        let unique = false;
        while (!unique) {
          let color = arr1[Math.floor(Math.random() * 4)];
          let type = arr2[Math.floor(Math.random() * 13)];
          let newCard = [type, color];
          unique = !final.some(card => card[0] === newCard[0] && card[1] === newCard[1]);
          if (unique) {
            final[j] = newCard;
          }
        }
      }
    }
  }
  return final;
}

//ROLL
rollButton.onclick = () => {
  let cards = document.querySelectorAll('#card1');
  cards.forEach(function (card) {
    card.classList.add('hidden');
  });
  sixCardBack.style.display = 'block';
  sixCardFrond.style.display = 'none';
  document.getElementById('reservCard').style.display = 'block'
}


//извиква картите

let firstResult = '';
let secondResult = '';
let thirdResult = '';
let forthResult = '';
let fiveResult = '';
let counter = 0;

function play() {
  if (bet <= 0) {
    alert('Невалиден залог!');
    return;
  }
  if (money <= 0) {
    alert("Недостатъчен баланс!")
    return;
  }
  profit = 0;
  textProfit = '';
  updateMoney();
  counter++;
  holdButton_visibility("grey", false)

  firstCardBack.style.display = "block";
  firstCardFrond.style.display = "none";
  secondCardBack.style.display = "block";
  secondCardFrond.style.display = "none";
  thirdCardBack.style.display = "block";
  thirdCardFrond.style.display = "none";
  forthCardBack.style.display = "block";
  forthCardFrond.style.display = "none";
  fiveCardBack.style.display = "block";
  fiveCardFrond.style.display = "none";

  const button = document.getElementById("row_button");
  button.disabled = true;
  let argumentsArray = ["first", "second", "third", "forth", "five"];

  cardResult = cardType()

  let interval = setInterval(() => {
    result(argumentsArray.shift());
    if (argumentsArray.length === 0) {
      clearInterval(interval);
    }
  }, 300);

  setTimeout(() => {

    button.disabled = false;

    if (counter === 1) {
      holdButton_visibility('rgb(50, 164, 8)', false)
      document.getElementById("bet+1").disabled = true;
      document.getElementById("bet-1").disabled = true;

    } else if (counter === 2) {
      document.getElementById("bet+1").disabled = false;
      document.getElementById("bet-1").disabled = false;
      money -= bet;
      holdButton_visibility("grey", true)
      counter = 0;
      checkForConsistency();
      checkForMatchColor();
      checkForEqualCards();
    }

  }, 1700)
  flag1 = false;
  flag2 = false;
  flag3 = false;
  flag4 = false;
  flag5 = false;

  updateMoney();
}

function result(input) {

  switch (input) {
    case "first":
      firstResult = cardResult[0];
      firstCardBack.style.display = "none";
      firstCardFrond.style.display = "block"

      if (firstResult[1] == "♥️" || firstResult[1] == "♦️") {
        document.getElementById("firstUpColor").style.color = "red"
        document.getElementById("firstDownColor").style.color = "red"
        document.getElementById("firstUpType").style.color = "red"
        document.getElementById("firstDownType").style.color = "red"

      } else {
        document.getElementById("firstUpColor").style.color = "black"
        document.getElementById("firstDownColor").style.color = "black"
        document.getElementById("firstUpType").style.color = "black"
        document.getElementById("firstDownType").style.color = "black"
      }

      document.getElementById("firstUpColor").innerHTML = firstResult[1];
      document.getElementById("firstDownColor").innerHTML = firstResult[1];
      document.getElementById("firstUpType").innerHTML = firstResult[0];
      document.getElementById("firstDownType").innerHTML = firstResult[0]
      break;

    case "second":
      secondResult = cardResult[1];

      if (secondResult[1] == "♥️" || secondResult[1] == "♦️") {
        document.getElementById("secondUpColor").style.color = "red"
        document.getElementById("secondDownColor").style.color = "red"
        document.getElementById("secondUpType").style.color = "red"
        document.getElementById("secondDownType").style.color = "red"
      } else {
        document.getElementById("secondUpColor").style.color = "black"
        document.getElementById("secondDownColor").style.color = "black"
        document.getElementById("secondUpType").style.color = "black"
        document.getElementById("secondDownType").style.color = "black"
      }

      secondCardBack.style.display = "none";
      secondCardFrond.style.display = "block"
      document.getElementById("secondUpColor").innerHTML = secondResult[1];
      document.getElementById("secondDownColor").innerHTML = secondResult[1];
      document.getElementById("secondUpType").innerHTML = secondResult[0];
      document.getElementById("secondDownType").innerHTML = secondResult[0];
      break;

    case "third":
      thirdResult = cardResult[2];

      if (thirdResult[1] == "♥️" || thirdResult[1] == "♦️") {
        document.getElementById("thirdUpColor").style.color = "red"
        document.getElementById("thirdDownColor").style.color = "red"
        document.getElementById("thirdUpType").style.color = "red"
        document.getElementById("thirdDownType").style.color = "red"
      } else {
        document.getElementById("thirdUpColor").style.color = "black"
        document.getElementById("thirdDownColor").style.color = "black"
        document.getElementById("thirdUpType").style.color = "black"
        document.getElementById("thirdDownType").style.color = "black"
      }

      thirdCardBack.style.display = "none";
      thirdCardFrond.style.display = "block"
      document.getElementById("thirdUpColor").innerHTML = thirdResult[1];
      document.getElementById("thirdDownColor").innerHTML = thirdResult[1];
      document.getElementById("thirdUpType").innerHTML = thirdResult[0];
      document.getElementById("thirdDownType").innerHTML = thirdResult[0];
      break;

    case "forth":
      forthResult = cardResult[3];

      if (forthResult[1] == "♥️" || forthResult[1] == "♦️") {
        document.getElementById("forthUpColor").style.color = "red"
        document.getElementById("forthDownColor").style.color = "red"
        document.getElementById("forthUpType").style.color = "red"
        document.getElementById("forthDownType").style.color = "red"
      } else {
        document.getElementById("forthUpColor").style.color = "black"
        document.getElementById("forthDownColor").style.color = "black"
        document.getElementById("forthUpType").style.color = "black"
        document.getElementById("forthDownType").style.color = "black"
      }

      forthCardBack.style.display = "none";
      forthCardFrond.style.display = "block"
      document.getElementById("forthUpColor").innerHTML = forthResult[1];
      document.getElementById("forthDownColor").innerHTML = forthResult[1];
      document.getElementById("forthUpType").innerHTML = forthResult[0];
      document.getElementById("forthDownType").innerHTML = forthResult[0];
      break;

    case "five":
      fiveResult = cardResult[4];

      if (fiveResult[1] == "♥️" || fiveResult[1] == "♦️") {
        document.getElementById("fiveUpColor").style.color = "red"
        document.getElementById("fiveDownColor").style.color = "red"
        document.getElementById("fiveUpType").style.color = "red"
        document.getElementById("fiveDownType").style.color = "red"
      } else {
        document.getElementById("fiveUpColor").style.color = "black"
        document.getElementById("fiveDownColor").style.color = "black"
        document.getElementById("fiveUpType").style.color = "black"
        document.getElementById("fiveDownType").style.color = "black"
      }

      fiveCardBack.style.display = "none";
      fiveCardFrond.style.display = "block"
      document.getElementById("fiveUpColor").innerHTML = fiveResult[1];
      document.getElementById("fiveDownColor").innerHTML = fiveResult[1];
      document.getElementById("fiveUpType").innerHTML = fiveResult[0];
      document.getElementById("fiveDownType").innerHTML = fiveResult[0];
      break;
  }

}

//проверка за печалба
let firstCard;
let secondCard;
let thirdCard;
let forthCard;
let fiveCard;

let isConsecutiveResult;


//Проверка за последователни карти
function checkForConsistency() {
  firstCard = { type: cardResult[0][0], color: cardResult[0][1] }

  secondCard = { type: cardResult[1][0], color: cardResult[1][1] }

  thirdCard = { type: cardResult[2][0], color: cardResult[2][1] }

  forthCard = { type: cardResult[3][0], color: cardResult[3][1] }

  fiveCard = { type: cardResult[4][0], color: cardResult[4][1] }

  const cards = [firstCard, secondCard, thirdCard, forthCard, fiveCard];

  isConsecutive(cards);

  isConsecutiveResult = isConsecutive(cards);

  if (isConsecutiveResult) {
    textProfit = "Стрейт !";
    profit = bet * 30;
    updateMoney();
    hazart(false);
  }
}

//Проверка за последователни карти
function isConsecutive(cards) {
  // Преобразуване на типовете на картите в числови стойности
  const cardValues = cards.map(card => {
    switch (card.type) {
      case 'J': return 11;
      case 'Q': return 12;
      case 'K': return 13;
      case 'A': return 14;
      default: return parseInt(card.type);
    }
  });

  // Сортиране на картите по тип
  cardValues.sort((a, b) => a - b);
  // Проверка за последователност
  for (let i = 0; i < cardValues.length - 1; i++) {
    if (cardValues[i] + 1 !== cardValues[i + 1]) {
      return false;
    }
  }
  return true;
}

//Проверка за  карти от една боя
function checkForMatchColor() {

  if (firstCard.color == secondCard.color && secondCard.color == thirdCard.color &&
    thirdCard.color == forthCard.color && forthCard.color == fiveCard.color) {
    textProfit = "Флъш !";
    profit = bet * 20;
    updateMoney();
    if (isConsecutiveResult) {
      textProfit = "Стрейт флъш !";
      profit = bet * 30;
    }
    updateMoney();
    hazart(false);
  }

}

//Проверка за еднакви карти
function checkForEqualCards() {
  let cards = [firstCard, secondCard, thirdCard, forthCard, fiveCard];
  let holdButtons = [holdButton1, holdButton2, holdButton3, holdButton4, holdButton5];

  // Функция за промяна на фона на бутоните
  function changeButtonBackground(indices) {
    indices.forEach(index => {
      holdButtons[index].style.backgroundColor = 'rgb(37, 22, 211)';
    });
  }

  // Функция за проверка на комбинации и извеждане на съобщения
  function checkCombinations(cards) {
    let typeCount = {};
    let indexMap = {};

    for (let i = 0; i < cards.length; i++) {
      let card = cards[i];
      if (typeCount[card.type]) {
        typeCount[card.type]++;
        indexMap[card.type].push(i);
      } else {
        typeCount[card.type] = 1;
        indexMap[card.type] = [i];
      }
    }

    let threeOfAKind = null;
    let pairs = [];
    let fourOfAKind = null;

    for (let type in typeCount) {
      if (typeCount[type] === 4) {
        fourOfAKind = type;
      } else if (typeCount[type] === 3) {
        threeOfAKind = type;
      } else if (typeCount[type] === 2 && ["J", "K", "Q", "A", "10", "9", "8", "7", "6", "5", "4", "3", "2"].includes(type)) {
        pairs.push(type);
      }
    }

    if (fourOfAKind) {
      textProfit = "Каре !"
      changeButtonBackground(indexMap[fourOfAKind]);
      profit = bet * 50
      hazart(false);
    } else if (threeOfAKind && pairs.length > 0) {
      textProfit = "Фул хаус !"
      changeButtonBackground(indexMap[threeOfAKind].concat(indexMap[pairs[0]]));
      profit = bet * 40
      hazart(false);
    } else if (pairs.length === 2) {
      textProfit = 'Два чифта !';
      changeButtonBackground(indexMap[pairs[0]].concat(indexMap[pairs[1]]));
      profit = bet * 3
      hazart(false);

    } else if (pairs.length === 1) {
      if (pairs[0] !== '2' && pairs[0] !== '3' && pairs[0] !== '4'
        && pairs[0] !== '5' && pairs[0] !== '6' && pairs[0] !== '7'
        && pairs[0] !== '8' && pairs[0] !== '9' && pairs[0] !== "10") {
        textProfit = 'Чифт !'
        changeButtonBackground(indexMap[pairs[0]]);
        profit = bet * 2
        hazart(false);
      }

    } else if (threeOfAKind) {
      textProfit = '3 еднакви карти !';
      changeButtonBackground(indexMap[threeOfAKind]);
      profit = bet * 6
      hazart(false);
    }
  }
  checkCombinations(cards);
  updateMoney();
}



function loadData() {
  if (localStorage.getItem('pokerGame')) {

    let savedData = JSON.parse(localStorage.getItem('pokerGame'));
    money = savedData.money;
  }
  updateMoney();
}


// Функция за запазване на променливите в Local Storage
function saveData() {
  let data = {
    money: money
  };
  localStorage.setItem('pokerGame', JSON.stringify(data));
  alert("Играта беше запаметена");
}

