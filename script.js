const container = document.getElementById("container");
const inputRows = document.getElementById("inputRows");
const inputSpeed = document.getElementById("inputSpeed");

let rows = 0;
let remainingDeg = 180;
let delay = 10;

inputRows.addEventListener("input", () => {
  rows = inputRows.value;
  remainingDeg = 180;
  builder();
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
