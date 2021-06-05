var txtInput = document.querySelector("#input-txt");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output-div");

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function translatedURL(userInput){
    return serverURL + "?" + "text=" + userInput; 
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with the server, try again later.");
}

function shakespearean(text){
    var inputtxt = txtInput.value; 

    fetch(translatedURL(inputtxt))
    .then(response => response.json())
    .then(json => {
        outputDiv.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}


btnTranslate.addEventListener("click", shakespearean);