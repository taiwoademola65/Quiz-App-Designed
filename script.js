let optionSelected = false;
let score = 0;
let correctAnser;
let quiz = [
  {
    num: 1,
    question: 'Which language runs in a web browser?',
    options: ["Java", "C", "Python", "javaScript"],
    correct: 'javaScript'
  },
  {
    num: 2,
    question: 'What does CSS stand for?',
    options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
    correct: "Cascading Style Sheets"
  },
  {
    num: 3,
    question: "Which HTML element is used for JavaScript?",
    options: ["scripting", "js", "script", "javascript"],
    correct: "script"
  },
  {
    num: 4,
    question: "What does array.length return for [ 'a', 'b', 'c' ]?",
    options: ["2", "3", "4", "undefined"],
    correct: "3"
  },
  {
    num: 5,
    question: "Which method adds an element to the END of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: "push()"
  },
  {
    num: 6,
    question: "Which of the following is used to declare a block-scoped variable that cannot be reassigned?",
    options: ["var", "let", "const", "set"],
    correct: "const"
  },
  {
    num: 7,
    question: "Which method is used to add one or more elements to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: "push()"
  },
  {
    num: 8,
    question: "Which operator is used to check both the value and the type of a variable?",
    options: ["=", "==", "===", "!=="],
    correct: "==="
  },
  {
    num: 9,
    question: "Which keyword correctly starts a conditional check?",
    options: ["when", "if", "check", "is"],
    correct: "if"
  },
  {
    num: 10,
    question: "What does array.pop() do?",
    options: ["Adds to the front", "Removes from the front", "Removes from the end", "Adds to the end"],
    correct: "Removes from the end"
  }
];

let currentQuestionIndex = 1;

const startTest = () => {
  displayQuestion = document.getElementById('question-text');
  displayOption1 = document.getElementById('option1');
  displayOption2 = document.getElementById('option2');
  displayOption3 = document.getElementById('option3');
  displayOption4 = document.getElementById('option4');
  optionSelected = false;
  document.getElementById('next-btn').disabled = true;

  // Clear previous choice highlights
  [displayOption1, displayOption2, displayOption3, displayOption4].forEach(btn => {
    btn.classList.remove('selected');
  });

  // Update Custom Progress Indicator
  const progressContainer = document.getElementById('progress-container');
  if (progressContainer) {
    progressContainer.style.display = 'block';
    const pct = Math.round((currentQuestionIndex / quiz.length) * 100);
    document.getElementById('progress-fill').style.width = `${pct}%`;
    document.getElementById('progress-text').innerText = `Question ${currentQuestionIndex} of ${quiz.length}`;
    document.getElementById('progress-percentage').innerText = `${pct}%`;
  }

  // Fade-in animation triggers when new question loads
  const contentContainer = document.getElementById('container');
  contentContainer.classList.remove('fade-in-active');
  void contentContainer.offsetWidth; // Force layout recalculation to restart keyframe animation
  contentContainer.classList.add('fade-in-active');

  for (let i = 0; i < quiz.length; i++) {
    if (quiz[i].num == currentQuestionIndex) {
      document.getElementById('choices-container').style.display = `flex`;
      displayQuestion.innerText = `${quiz[i].question}`;
      displayOption1.innerHTML = `${quiz[i].options[0]}`;
      displayOption2.innerHTML = `${quiz[i].options[1]}`;
      displayOption3.innerHTML = `${quiz[i].options[2]}`;
      displayOption4.innerHTML = `${quiz[i].options[3]}`;
      correctAnser = quiz[i].correct;
      
      if (quiz[i].num != quiz.length) {
        document.getElementById('startBtn').style.display = 'none';
        document.getElementById('btn').style.display = 'flex';
      } else {
        document.getElementById('startBtn').style.display = 'none';
        document.getElementById('endBtn').style.display = 'block';
        document.getElementById('btn').style.display = 'none';
      }
    }
  }
};

const getOption = (clickedBtn) => {
  if (optionSelected) return;
  let selectedOption = clickedBtn.innerText;
  if (selectedOption == correctAnser) {
    score++;
    console.log(score);
  }
  
  // Highlight the selected option card
  clickedBtn.classList.add('selected');
  
  optionSelected = true;
  document.getElementById('next-btn').disabled = false;
  currentQuestionIndex += 1;
};

const next = () => {
  startTest();
};

const endBtn = () => {
  // Hide progress indicator on completion screen
  const progressContainer = document.getElementById('progress-container');
  if (progressContainer) {
    progressContainer.style.display = 'none';
  }

  let container = document.getElementById('container');
  let htmlContent = `<h4 class="congratulations-msg">🎉 Congratulations on completing the test!<br>Your score is ${score} / ${quiz.length}</h4>
  <table class="table">
    <thead>
      <tr>
        <th>S/N</th>
        <th>Question</th>
        <th>Correct Answer</th>
      </tr>
    </thead>
    <tbody>`;
  
  for (let i = 0; i < quiz.length; i++) {
    htmlContent += `<tr>
      <td>${quiz[i].num}</td>
      <td>${quiz[i].question}</td>
      <td><span class="badge-correct">${quiz[i].correct}</span></td>
    </tr>`;
  }
  htmlContent += `</tbody></table>`;
  
  // Re-trigger animation for the final result presentation
  container.classList.remove('fade-in-active');
  void container.offsetWidth;
  container.classList.add('fade-in-active');
  
  container.innerHTML = htmlContent;
};

const prev = () => {
  if (currentQuestionIndex > 1) {
    currentQuestionIndex -= 1;
    startTest();
    optionSelected = true; 
    document.getElementById('next-btn').disabled = false;
  }
};