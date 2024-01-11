let choiceA = document.getElementById("choiceA");
let choiceB = document.getElementById("choiceB");
let choiceC = document.getElementById("choiceC");
let choiceD = document.getElementById("choiceD");

function pickChoice(string) {
    resetChoices();
    document.getElementById(`choice${string}`).classList.add("border-blue-800");
    console.log(string);
}

function resetChoices() {
    choiceA.classList.remove("border-blue-800");
    choiceB.classList.remove("border-blue-800");
    choiceC.classList.remove("border-blue-800");
    choiceD.classList.remove("border-blue-800");
    
    choiceA.classList.add("border-slate-900");
    choiceB.classList.add("border-slate-900");
    choiceC.classList.add("border-slate-900");
    choiceD.classList.add("border-slate-900");
}