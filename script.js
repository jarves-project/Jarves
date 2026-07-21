const startBtn = document.querySelector(".start-btn");
const micBtn = document.querySelector(".mic-btn");
const chatBox = document.getElementById("chat-box");

function addMessage(sender, text) {
  chatBox.innerHTML += `<p><strong>${sender}:</strong> ${text}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
    }

    startBtn.addEventListener("click", () => {
      chatBox.innerHTML = "";
        addMessage("Jarves", "Hello Sam! I am ready.");
        });

        const SpeechRecognition =
          window.SpeechRecognition || window.webkitSpeechRecognition;

          if (SpeechRecognition) {
            const recognition = new SpeechRecognition();

              recognition.lang = "en-US";
                recognition.interimResults = false;
                  recognition.maxAlternatives = 1;

                    micBtn.addEventListener("click", () => {
                        addMessage("Jarves", "Listening...");
                            recognition.start();
                              });

                                recognition.onresult = (event) => {
                                    const text = event.results[0][0].transcript;

                                        addMessage("You", text);
                                            addMessage("Jarves", "You said: " + text);

                                                const speech = new SpeechSynthesisUtterance("You said " + text);
                                                    speech.lang = "en-US";
                                                        window.speechSynthesis.speak(speech);
                                                          };

                                                            recognition.onerror = () => {
                                                                addMessage("Jarves", "Sorry, I couldn't hear you.");
                                                                  };

                                                                  } else {

                                                                    micBtn.addEventListener("click", () => {
                                                                        addMessage(
                                                                              "Jarves",
                                                                                    "Speech Recognition is not supported in this browser."
                                                                                        );
                                                                                          });

                                                                                          }