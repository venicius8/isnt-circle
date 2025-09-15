const container = document.getElementById("container");
const inputRows = document.getElementById("inputRows");
const inputSpeed = document.getElementById("inputSpeed");

let rows = 0;
let remainingDeg = 180;
let delay = 5;

inputRows.addEventListener("input", () => {
  rows = inputRows.value;
  remainingDeg = 180;
  builder();
});

inputSpeed.addEventListener("input", () => {
  document.querySelectorAll(".ball").forEach((ball, index) => {
    ball.style.animation = `ballAnimation ${
      100 / inputSpeed
    }s infinite alternate ease-in-out`;
  });
  delay = 100 / inputSpeed.value;
});

function builder() {
  container.innerHTML = "";

  for (let i = rows; i > 0; i--) {
    remainingDeg -= remainingDeg / i;
    const row = `
    <div class="row" style="transform: rotate(${remainingDeg}deg)">
      <div class="ball" style="animation-delay: ${(i / rows) * delay}s;"></div>
    </div>`;
    container.innerHTML += row;
  }
}
