const scenarios = [
  {
    title: "Morning Check",
    icon: "☀",
    text: "You are getting ready for school. What is the safest first step?",
    choices: [
      {
        text: "Check your glucose as planned and ask an adult if you are unsure.",
        correct: true,
        feedback: "Good choice. Checking as planned helps you and your adult know what to do next."
      },
      {
        text: "Leave quickly and check later if you remember.",
        correct: false,
        feedback: "Try again. A quick check before leaving can prevent problems later."
      },
      {
        text: "Hide your diabetes kit because you do not want to carry it.",
        correct: false,
        feedback: "Try again. Your kit is there to help keep you safe during the day."
      }
    ]
  },
  {
    title: "School Bag",
    icon: "🎒",
    text: "Before school, you are packing your bag. What should go with you?",
    choices: [
      {
        text: "Your diabetes kit and hypo treatment, such as glucose tablets or a sugary drink.",
        correct: true,
        feedback: "Great planning. Having treatment nearby means help is ready if you need it."
      },
      {
        text: "Only your sports kit because diabetes equipment can stay at home.",
        correct: false,
        feedback: "Try again. Diabetes supplies should be available when you are away from home."
      },
      {
        text: "Nothing, because teachers can always guess what you need.",
        correct: false,
        feedback: "Try again. Adults can help best when your supplies and plan are available."
      }
    ]
  },
  {
    title: "Feeling Low",
    icon: "⚡",
    text: "In class you feel shaky, sweaty, and strange. What should you do?",
    choices: [
      {
        text: "Tell an adult straight away and follow your hypo plan.",
        correct: true,
        feedback: "Excellent. Telling an adult quickly is a safe and confident action."
      },
      {
        text: "Stay quiet because you do not want to interrupt the lesson.",
        correct: false,
        feedback: "Try again. Feeling low is important, and it is always okay to ask for help."
      },
      {
        text: "Run around outside to make the feeling go away.",
        correct: false,
        feedback: "Try again. Exercise can make a hypo worse, so stop and get help first."
      }
    ]
  },
  {
    title: "Hypo Steps",
    icon: "🧃",
    text: "Your glucose is low. Which order is safest?",
    choices: [
      {
        text: "Stop, tell an adult, take fast sugar, wait, then check again.",
        correct: true,
        feedback: "Correct. This matches the safe pattern: stop, treat, wait, and recheck."
      },
      {
        text: "Keep playing, drink water, and check tomorrow.",
        correct: false,
        feedback: "Try again. A hypo needs quick action and help from an adult."
      },
      {
        text: "Brush your teeth first, then decide later.",
        correct: false,
        feedback: "Try again. Brushing is important, but treating a hypo comes first."
      }
    ]
  },
  {
    title: "PE Lesson",
    icon: "🏃",
    text: "You have PE after lunch. What is the best preparation?",
    choices: [
      {
        text: "Check your glucose if that is in your plan and keep hypo treatment nearby.",
        correct: true,
        feedback: "Good choice. Sport is safer when you prepare before you start."
      },
      {
        text: "Leave your kit in the classroom so it does not get in the way.",
        correct: false,
        feedback: "Try again. Your kit should be close enough for an adult to reach quickly."
      },
      {
        text: "Do extra running if you already feel low.",
        correct: false,
        feedback: "Try again. If you feel low, stop and tell an adult before exercising."
      }
    ]
  },
  {
    title: "Feeling Unwell",
    icon: "🤒",
    text: "You feel ill and your glucose is high. What should happen next?",
    choices: [
      {
        text: "Tell an adult and follow your sick-day plan, including ketone checks if advised.",
        correct: true,
        feedback: "Well done. Illness can change diabetes needs, so adults should help follow the plan."
      },
      {
        text: "Ignore it because high glucose is never urgent.",
        correct: false,
        feedback: "Try again. High glucose during illness should be taken seriously."
      },
      {
        text: "Skip all diabetes care until you feel better.",
        correct: false,
        feedback: "Try again. Diabetes care is still important when someone feels unwell."
      }
    ]
  },
  {
    title: "Snack Choice",
    icon: "🍎",
    text: "You want an after-school snack. What is the most sensible choice?",
    choices: [
      {
        text: "Choose a snack with adult guidance and think about your diabetes plan.",
        correct: true,
        feedback: "Nice work. Food choices are easier when they fit your plan and an adult can help."
      },
      {
        text: "Eat lots of sweets without telling anyone.",
        correct: false,
        feedback: "Try again. It is safer to include an adult and follow your plan."
      },
      {
        text: "Skip every snack forever, even if you feel hungry or low.",
        correct: false,
        feedback: "Try again. Snacks can be part of care, especially when an adult helps you decide."
      }
    ]
  },
  {
    title: "Bedtime Teeth",
    icon: "🪥",
    text: "It is bedtime. Which habit helps your mouth stay healthy?",
    choices: [
      {
        text: "Brush your teeth with fluoride toothpaste and keep dental visits in mind.",
        correct: true,
        feedback: "Great choice. Oral health matters, especially when managing long-term conditions."
      },
      {
        text: "Have a sugary drink every night and go straight to sleep.",
        correct: false,
        feedback: "Try again. Sugary drinks before sleep can increase the risk of tooth decay."
      },
      {
        text: "Never tell the dentist about diabetes.",
        correct: false,
        feedback: "Try again. Dentists can support you better when they know your health background."
      }
    ]
  }
];

let currentScenario = 0;
let score = 0;
let answeredCorrectly = false;

const startScreen = document.querySelector("#start-screen");
const gameScreen = document.querySelector("#game-screen");
const resultScreen = document.querySelector("#result-screen");
const infoScreen = document.querySelector("#info-screen");
const startButton = document.querySelector("#start-button");
const infoButton = document.querySelector("#info-button");
const backButton = document.querySelector("#back-button");
const restartButton = document.querySelector("#restart-button");
const nextButton = document.querySelector("#next-button");
const scenarioLabel = document.querySelector("#scenario-label");
const scenarioTitle = document.querySelector("#scenario-title");
const scenarioIcon = document.querySelector("#scenario-icon");
const scenarioText = document.querySelector("#scenario-text");
const choicesBox = document.querySelector("#choices");
const feedbackBox = document.querySelector("#feedback-box");
const feedbackTitle = document.querySelector("#feedback-title");
const feedbackText = document.querySelector("#feedback-text");
const scoreStars = document.querySelector("#score-stars");
const progressBar = document.querySelector("#progress-bar");
const resultTitle = document.querySelector("#result-title");
const resultScore = document.querySelector("#result-score");
const resultMessage = document.querySelector("#result-message");

function showScreen(screen) {
  [startScreen, gameScreen, resultScreen, infoScreen].forEach((item) => {
    item.classList.add("hidden");
  });
  screen.classList.remove("hidden");
}

function startGame() {
  currentScenario = 0;
  score = 0;
  showScreen(gameScreen);
  renderScenario();
}

function renderScenario() {
  const scenario = scenarios[currentScenario];
  answeredCorrectly = false;
  scenarioLabel.textContent = `Scenario ${currentScenario + 1} of ${scenarios.length}`;
  scenarioTitle.textContent = scenario.title;
  scenarioIcon.textContent = scenario.icon;
  scenarioText.textContent = scenario.text;
  scoreStars.textContent = score;
  progressBar.style.width = `${(currentScenario / scenarios.length) * 100}%`;
  feedbackBox.classList.add("hidden");
  nextButton.textContent = currentScenario === scenarios.length - 1 ? "See Result" : "Next";

  choicesBox.innerHTML = "";
  scenario.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = choice.text;
    button.addEventListener("click", () => chooseAnswer(button, choice));
    choicesBox.appendChild(button);
  });
}

function chooseAnswer(button, choice) {
  const buttons = [...document.querySelectorAll(".choice")];
  buttons.forEach((item) => {
    item.disabled = true;
  });

  button.classList.add(choice.correct ? "correct" : "incorrect");
  answeredCorrectly = choice.correct;

  if (choice.correct) {
    score += 1;
    scoreStars.textContent = score;
    feedbackTitle.textContent = "Safe choice";
  } else {
    feedbackTitle.textContent = "Have another think";
  }

  feedbackText.textContent = choice.feedback;
  feedbackBox.classList.remove("hidden");

  if (!choice.correct) {
    nextButton.textContent = "Try Again";
  }
}

function nextStep() {
  if (!answeredCorrectly) {
    renderScenario();
    return;
  }

  currentScenario += 1;
  if (currentScenario >= scenarios.length) {
    showResult();
    return;
  }

  renderScenario();
}

function showResult() {
  progressBar.style.width = "100%";
  showScreen(resultScreen);
  resultScore.textContent = `You scored ${score} out of ${scenarios.length} stars.`;

  if (score === scenarios.length) {
    resultTitle.textContent = "Diabetes Safety Star";
    resultMessage.textContent =
      "Brilliant. You practised safe choices for school, sport, illness, hypos, and oral health.";
  } else if (score >= 6) {
    resultTitle.textContent = "Great Safety Skills";
    resultMessage.textContent =
      "Strong work. Replay the game to practise the situations that felt tricky.";
  } else {
    resultTitle.textContent = "Keep Practising";
    resultMessage.textContent =
      "That is okay. The aim is to learn the safe pattern: stop, tell an adult, follow your plan, and ask for help.";
  }
}

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextStep);
infoButton.addEventListener("click", () => showScreen(infoScreen));
backButton.addEventListener("click", () => showScreen(startScreen));
