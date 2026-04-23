const questions = [
  { question: 'What does DOM stand for?', options: ['Document Object Model','Data Object Method','Display Object Map','Digital Order Model'], answer: 'Document Object Model' },
  { question: 'Which keyword creates a block-scoped variable?', options: ['var','let','define','new'], answer: 'let' },
  { question: 'Which method turns JSON text into an object?', options: ['JSON.parse','JSON.stringify','Object.create','Array.from'], answer: 'JSON.parse' },
  { question: 'Which event fires when a form is submitted?', options: ['click','input','submit','change'], answer: 'submit' },
  { question: 'Which array method creates a new filtered array?', options: ['map','filter','forEach','push'], answer: 'filter' }
];
let index = 0; let score = 0; let answered = false;
const questionEl = document.querySelector('#question'); const answersEl = document.querySelector('#answers'); const progressEl = document.querySelector('#progress'); const feedbackEl = document.querySelector('#feedback'); const nextBtn = document.querySelector('#nextBtn'); const resultEl = document.querySelector('#result');
function renderQuestion(){ answered = false; feedbackEl.textContent = ''; nextBtn.hidden = true; resultEl.hidden = true; const current = questions[index]; progressEl.textContent = `Question ${index + 1} of ${questions.length}`; questionEl.textContent = current.question; answersEl.innerHTML = ''; current.options.forEach(option => { const button = document.createElement('button'); button.className = 'answer'; button.textContent = option; button.addEventListener('click', () => checkAnswer(button, option)); answersEl.appendChild(button); }); }
function checkAnswer(button, selected){ if(answered) return; answered = true; const correct = questions[index].answer; if(selected === correct){ score++; button.classList.add('correct'); feedbackEl.textContent = 'Correct!'; } else { button.classList.add('wrong'); feedbackEl.textContent = `Incorrect. Correct answer: ${correct}`; } nextBtn.hidden = false; }
nextBtn.addEventListener('click', () => { index++; if(index < questions.length){ renderQuestion(); } else { showResult(); } });
function showResult(){ questionEl.textContent = ''; progressEl.textContent = ''; answersEl.innerHTML = ''; feedbackEl.textContent = ''; nextBtn.hidden = true; resultEl.hidden = false; resultEl.innerHTML = `<h2>Your score: ${score}/${questions.length}</h2><button class="restart">Restart Quiz</button>`; resultEl.querySelector('.restart').addEventListener('click', () => { index = 0; score = 0; renderQuestion(); }); }
renderQuestion();
