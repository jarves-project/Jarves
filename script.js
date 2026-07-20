const startBtn = document.querySelector(".start-btn");
const chatBox = document.getElementById("chat-box");

startBtn.addEventListener("click", function () {
  chatBox.innerHTML = "<p><strong>Jarves:</strong> Hello Sam! I am ready to assist you.</p>";

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();

            const speech = new SpeechSynthesisUtterance();
                speech.text = "Hello Sam! I am ready to assist you.";
                    speech.lang = "en-US";
                        speech.volume = 1;
                            speech.rate = 1;
                                speech.pitch = 1;

                                    window.speechSynthesis.speak(speech);
                                      } else {
                                          alert("Speech synthesis is not supported on this browser.");
                                            }
                                            });