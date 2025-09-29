const emojis = [
  "Grapes",
  "🍇",
  "Apple",
  "🍎",
  "Orange",
  "🍊",
  "Banana",
  "🍌",
  "Peach",
  "🍑",
  "Lemon",
  "🍋‍🟩",
  "Mango",
  "🥭",
  "Melon",
  "🍈",
];

let openCards = [];
let pairedItems = [];

for (let i = 0; i < emojis.length / 2; i++) {
  const pairId = i;

  pairedItems.push({
    value: emojis[i * 2],
    pairId: pairId,
  });

  pairedItems.push({
    value: emojis[i * 2 + 1],
    pairId: pairId,
  });

}

let shuffleItems = pairedItems.sort(() => (Math.random() > 0.5 ? 2 : -1));
  const gameContainer = document.querySelector(".game");

  shuffleItems.forEach((item) => {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = item.value;

    box.setAttribute("data-pair-id", item.pairId);
    box.onclick = handleClick;
    gameContainer.appendChild(box);
});

function handleClick() {
  if (openCards.length < 2) {
    if (!this.classList.contains("boxOpen")) {
      this.classList.add("boxOpen");
      openCards.push(this);
    }
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const card1 = openCards[0];
  const card2 = openCards[1];

  const isMatch =
    card1.getAttribute("data-pair-id") === card2.getAttribute("data-pair-id");

  if (isMatch) {
    card1.classList.add("boxMatch");
    card2.classList.add("boxMatch");

    card1.onclick = null;
    card2.onclick = null;
  } else {
    card1.classList.remove("boxOpen");
    card2.classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === shuffleItems.length) {
    alert("Você venceu o jogo. Parabéns!");
  }
}