 let optionSelected = false;
    let score = 0
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
        question: "Which loop runs at least once before checking its condition?",
        options: ["for loop", "while loop", "do...while loop", "for...of loop"],
        correct: "while loop"
      },
      {
        num: 7,
        question: "Which loop runs at least once before checking its condition?",
        options: ["for loop", "while loop", "do...while loop", "for...of loop"],
        correct: "while loop"
      },
      {
        num: 8,
        question: "What is the index of the FIRST element in a JavaScript array?",
        options: ["1", "-1", "0", "undefined"],
        correct: "0"
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

    ]
    let currentQuestionIndex = 1
    const startTest = () => {
      displayQuestion = document.getElementById('question-text');
      displayOption1 = document.getElementById('option1')
      displayOption2 = document.getElementById('option2')
      displayOption3 = document.getElementById('option3')
      displayOption4 = document.getElementById('option4')
optionSelected = false;
      document.getElementById('next-btn').disabled = true;
      // console.log(displayQuestion);

      for (let i = 0; i < quiz.length; i++) {
        // const element = array[index];
        if (quiz[i].num == currentQuestionIndex) {
          // console.log(quiz[i].question);
          document.getElementById('choices-container').style.display = `flex`
          displayQuestion.innerText = `${quiz[i].question}`
          displayOption1.innerHTML = `${quiz[i].options[0]}`
          displayOption2.innerHTML = `${quiz[i].options[1]}`
          displayOption3.innerHTML = `${quiz[i].options[2]}`
          displayOption4.innerHTML = `${quiz[i].options[3]}`
          correctAnser = quiz[i].correct
          if (quiz[i].num != quiz.length) {
            document.getElementById('startBtn').style.display = 'none';
            document.getElementById('btn').style.display = 'flex';
          } else {
            document.getElementById('startBtn').style.display = 'none'
            document.getElementById('endBtn').style.display = 'block'
            document.getElementById('btn').style.display = 'none'
          }
        }
      }

    }
    const getOption = (clickedBtn) => {
      if (optionSelected) return;
      let selectedOption = clickedBtn.innerText;
      if (selectedOption == correctAnser) {
        score++;
        console.log(score);
      }
      optionSelected = true;
      document.getElementById('next-btn').disabled = false;
      currentQuestionIndex += 1;
    }
    const next = () => {
      startTest();
    }

    const endBtn = () => {
      let container = document.getElementById('container')
      let htmlContent = `<h4 class="text-success text-center">Congratulations on completing the test, your score is ${score} </h4> <br>
      <table class="table">
    <tr>
      <th>S/N</th>
      <th>Question</th>
      <th>Correct Answer</th>
    </tr>
`
      for (let i = 0; i < quiz.length; i++) {
        htmlContent += `<tr>
  <td scope="row">${quiz[i].num}</td>
  <td scope="row">${quiz[i].question}</td>
  <td scope="row">${quiz[i].correct}</td>
</tr>`
      }
      htmlContent += `</table>`
      container.innerHTML = htmlContent
    }

    const prev = () => {
      if (currentQuestionIndex > 1) {
        currentQuestionIndex -= 1;
        startTest();
        optionSelected = true; 
        document.getElementById('next-btn').disabled = false;
      }
    }