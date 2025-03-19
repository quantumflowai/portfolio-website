var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
    var isActive = event.currentTarget.classList.contains("active-link");

    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    if (isActive) {
        event.currentTarget.classList.remove("active-link");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const facts = [
    "I love integrating AI into daily workflows to optimize tasks.",
    "My favorite productivity hack is subconscious training and neurohacking.",
    "I use binaural beats to enhance my focus while coding.",
    "I'm passionate about quantum science and its future impact on technology.",
    "I enjoy playing instruments at church, especially the piano.",
    "I believe deeply in automation to reduce mental clutter and improve efficiency.",
    "I combine security operations experience with front-end development.",
    "Neurohacking methods help me learn coding at accelerated rates.",
    "I leverage pattern recognition to enhance my cognitive skills, similar to AI.",
    "I’m working towards financial independence by integrating automation into my daily life.",
    "My learning methods prioritize active recall and spaced repetition.",
    "Basketball helps me clear my mind and boost creativity.",
    "I'm passionate about quantum science and its technological potential."
];

function displayRandomFact() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('fact-display').innerText = randomFact;
}

document.addEventListener('DOMContentLoaded', displayRandomFact);