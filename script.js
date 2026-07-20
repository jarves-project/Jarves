const startBtn = document.querySelector(".start-btn");
const micBtn = document.querySelector(".mic-btn");
const chatBox = document.getElementById("chat-box");

function jarvesReply(text) {
  chatBox.innerHTML += `<p><strong>Jarves:</strong> ${text}</p>`;

    if ("speechSynthesis" in window) {
        speechSynthesis.cancel();

            const speech = new SpeechSynthesisUtterance(text);
                speech.lang = "en-US";
                    speech.rate = 1;
                        speech.pitch = 1;
                            speech.volume = 1;

                                speechSynthesis.speak(speech);
                                  }
                                  }

                                  startBtn.addEventListener("click", () => {
                                    chatBox.innerHTML = "";
                                      jarvesReply("Hello Sam! I am Jarves. Welcome.");
                                      });

                                      micBtn.addEventListener("click", () => {
                                        jarvesReply("Microphone feature is coming soon.");
                                        });