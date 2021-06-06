const txtInput = document.querySelector("#input-txt");
const btnTranslate = document.querySelector("#btn-translate");
const outputDiv = document.querySelector("#output-div");

const serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

const translatedURL = (userInput) => {
  return serverURL + "?" + "text=" + userInput;
};
const errorHandler = () => {
  console.log("error occured");
  alert("Something wrong with the server, try again later.");
};
const shakespearean = async () => {
  const inputtxt = txtInput.value;
  const response = await fetch(translatedURL(inputtxt));
  const data = await response.json();
  outputDiv.textContent = data.contents.translated;
};
btnTranslate.addEventListener("click", shakespearean);
