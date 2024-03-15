document.addEventListener("DOMContentLoaded", function() {
    // get the current streak from the cookie
    let currentStreak = getCookie("currentStreak");
    let topStreak = getCookie("topStreak");

    // if the top streak is not empty
    if (topStreak !== "") {
        // set the top streak to the top streak
        document.getElementById("topStreak").innerHTML = topStreak;
        topScore = topStreak;
    }
    // if the current streak is not empty
    if (currentStreak !== "") {
        // set the streak to the current streak
        document.getElementById("streak").innerHTML = currentStreak;
        score = currentStreak;
    }
});

let type = 0;
let difficulty = 0;

let math = document.getElementById("math");
let raw = document.getElementById("raw");

let easy = document.getElementById("easy");
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");

function pickType(string) {
    resetTypes();
    document.getElementById(string).classList.remove("border-black");
    document.getElementById(string).classList.add("border-custom-primary");

    switch (string) {
        case "math":
            type = 0;
            break;
        case "raw":
            type = 1;
            break;
    }
}

function resetTypes() {
    math.classList.remove("border-custom-primary");
    raw.classList.remove("border-custom-primary");

    math.classList.add("border-black");
    raw.classList.add("border-black");
}

function pickDifficulty(string) {
    resetDifficulties();
    document.getElementById(string).classList.remove("border-black");
    document.getElementById(string).classList.add("border-custom-primary");

    switch (string) {
        case "easy":
            difficulty = 0;
            break;
        case "medium":
            difficulty = 1;
            break;
        case "hard":
            difficulty = 2;
            break;
    }
}

function resetDifficulties() {
    easy.classList.remove("border-custom-primary");
    medium.classList.remove("border-custom-primary");
    hard.classList.remove("border-custom-primary");

    easy.classList.add("border-black");
    medium.classList.add("border-black");
    hard.classList.add("border-black");
}

function start() {
    window.location.href = `/question?t=${type}&d=${difficulty}`;
}