const startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", function () {
  startBtn.textContent = "Starting Jarves...";

    setTimeout(function () {
        alert("Welcome to Jarves!");
            startBtn.textContent = "Start";
              }, 1000);
              });