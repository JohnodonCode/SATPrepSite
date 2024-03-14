const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

let choiceA = document.getElementById("choiceA");
let choiceB = document.getElementById("choiceB");
let choiceC = document.getElementById("choiceC");
let choiceD = document.getElementById("choiceD");

let currentchoice = -1;

function pickChoice(string) {
    switch (string) {
        case "A":
            currentchoice = 0;
            break;
        case "B":
            currentchoice = 1;
            break;
        case "C":
            currentchoice = 2;
            break;
        case "D":
            currentchoice = 3;
            break;
    }
    resetChoices();
    document.getElementById(`choice${string}`).classList.remove("border-black");
    document.getElementById(`choice${string}`).classList.add("border-custom-primary");
    console.log(string);
}

function resetChoices() {
    choiceA.classList.remove("border-custom-primary");
    choiceB.classList.remove("border-custom-primary");
    choiceC.classList.remove("border-custom-primary");
    choiceD.classList.remove("border-custom-primary");

    choiceA.classList.remove("border-red-500");
    choiceB.classList.remove("border-red-500");
    choiceC.classList.remove("border-red-500");
    choiceD.classList.remove("border-red-500");

    choiceA.classList.remove("border-green-500");
    choiceB.classList.remove("border-green-500");
    choiceC.classList.remove("border-green-500");
    choiceD.classList.remove("border-green-500");
    
    choiceA.classList.add("border-black");
    choiceB.classList.add("border-black");
    choiceC.classList.add("border-black");
    choiceD.classList.add("border-black");
}

let text = document.getElementById("text");
let question = document.getElementById("question");

let possiblequestions = {};

switch (params.t) {
    case "0":
        switch(params.d) {
            case "0":
                possiblequestions = questions.easymath;
                break;
            case "1":
                possiblequestions = questions.mediummath;
                break;
            case "2":
                possiblequestions = questions.hardmath;
                break;
        }
        break;
    case "1":
        switch(params.d) {
            case "0":
                possiblequestions = questions.easyraw;
                break;
            case "1":
                possiblequestions = questions.mediumraw;
                break;
            case "2":
                possiblequestions = questions.hardraw;
                break;
        }
        break;
}

let questionNumber = 0;
let score = 0;

function setQuestion() {
    text.innerHTML = possiblequestions[questionNumber].text;
    question.innerHTML = possiblequestions[questionNumber].question;
    
    choiceA.innerHTML = "A. " + possiblequestions[questionNumber].choices[0];
    choiceB.innerHTML = "B. " + possiblequestions[questionNumber].choices[1];
    choiceC.innerHTML = "C. " + possiblequestions[questionNumber].choices[2];
    choiceD.innerHTML = "D. " + possiblequestions[questionNumber].choices[3];
}

setQuestion();

let checkButton = document.getElementById("checkButton");
let nextButton = document.getElementById("nextButton");

let rationale = document.getElementById("rationale");

function checkAnswer() {
    if(currentchoice < 0) return;
    let answer = possiblequestions[questionNumber].answer;

    let choice;
    switch (currentchoice) {
        case 0:
            choice = "A";
            break;
        case 1:
            choice = "B";
            break;
        case 2:
            choice = "C";
            break;
        case 3:
            choice = "D";
            break;
    }

    if (currentchoice == answer) {
        score++;
    } else { 
        score = 0;
        document.getElementById("choice" + choice).classList.add("border-red-500");
    }
    document.getElementById("streak").innerHTML = score;
    let correctChoice;
    switch (answer) {
        case 0:
            correctChoice = "A";
            break;
        case 1:
            correctChoice = "B";
            break;
        case 2:
            correctChoice = "C";
            break;
        case 3:
            correctChoice = "D";
            break;
    }

    rationale.innerHTML = possiblequestions[questionNumber].rationale;
    rationale.classList.remove("hidden");

    document.getElementById("choice" + correctChoice).classList.add("border-green-500");
    
    
    checkButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
}

function nextQuestion() {
    if(questionNumber < possiblequestions.length - 1) {
        questionNumber++;
    }
    else {
        questionNumber = 0;
    }
    console.log(questionNumber);

    setQuestion();
    rationale.innerHTML = "";
    rationale.classList.add("hidden");
    checkButton.classList.remove("hidden");
    nextButton.classList.add("hidden");
    currentchoice = -1;
    resetChoices();
}