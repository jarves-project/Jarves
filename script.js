const startBtn = document.querySelector(".start-btn");
const chatBox = document.getElementById("chat-box");

startBtn.addEventListener("click", () => {
  chatBox.innerHTML = `
      <p><strong>Jarves:</strong> Hello Sam! I am ready to assist you.</p>
        `;

          const speech = new SpeechSynthesisUtterance(
              "Hello Sam! I am ready to assist you."
                );
                  speech.lang = "en-US";
                    window.speechSynthesis.speak(speech);
                    });