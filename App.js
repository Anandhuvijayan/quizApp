const quizData = [
  {
    question: "who is the president of America?",
    a: "Donald Trump",
    b: "Kamala Harison",
    c: "Joe Biden",
    d: "Narendra Modi",
    correct: "c",
  },
  {
    question: "who is the president of India",
    a: "Donald Trump",
    b: "Kamala Harison",
    c: "Joe Biden",
    d: "Narendra Modi",
    correct: "d",
  },
  {
    question: "who is the vice-president of America",
    a: "Donald Trump",
    b: "Kamala Harison",
    c: "Joe Biden",
    d: "Narendra Modi",
    correct: "b",
  },
  {
    question: "who is the chancellor of Germany",
    a: "Angela Merkel",
    b: "Kamala Harison",
    c: "Joe Biden",
    d: "Narendra Modi",
    correct: "a",
  },
  {
    question: "what is the most populatd country in our world",
    a: "India",
    b: "China",
    c: "US",
    d: "Russia",
    correct: "b",
  },
];
const quiz = document.getElementById("quiz");
const answers = document.querySelectorAll(".answer");
const qust = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBut = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  qust.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  for (var i = 0, len = answers.length; i < len; i++) {
    if (answers[i].checked) {
      answer = answers[i].id;
      break;
    }
  }
  return answer;
}

function deselectAnswers() {
  answers.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
submitBut.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        
        <button onclick="location.reload()">Reload</button>
    `;
    }
  }
});
