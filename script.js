const url = "https://api.adviceslip.com/advice";
const advice = document.querySelector(".advice");
const number = document.querySelector("h1");
const button = document.querySelector("button");

function generateAdvice() {
  fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      advice.innerHTML = `"${data.slip.advice}"`;
      number.textContent = `Advice #${data.slip.id}`;
    });
}

generateAdvice();
button.addEventListener("click", generateAdvice);
