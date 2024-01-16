let choiceA = document.getElementById("choiceA");
let choiceB = document.getElementById("choiceB");
let choiceC = document.getElementById("choiceC");
let choiceD = document.getElementById("choiceD");

function pickChoice(string) {
    resetChoices();
    document.getElementById(`choice${string}`).classList.add("border-custom-secondary");
    console.log(string);
}

function resetChoices() {
    choiceA.classList.remove("border-custom-secondary");
    choiceB.classList.remove("border-custom-secondary");
    choiceC.classList.remove("border-custom-secondary");
    choiceD.classList.remove("border-custom-secondary");
    
    choiceA.classList.add("border-custom-primary");
    choiceB.classList.add("border-custom-primary");
    choiceC.classList.add("border-custom-primary");
    choiceD.classList.add("border-custom-primary");
}