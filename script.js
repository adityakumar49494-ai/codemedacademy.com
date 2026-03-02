function completeLesson(name) {
  localStorage.setItem(name, "done");
  alert("Lesson Completed 🎉");
}

function checkProgress() {
  let lessons = ["lesson1", "lesson2", "lesson3"];
  let completed = 0;

  lessons.forEach(l => {
    if (localStorage.getItem(l) === "done") {
      completed++;
    }
  });

  let percent = (completed / lessons.length) * 100;
  let bar = document.getElementById("progress-bar");
  if (bar) {
    bar.style.width = percent + "%";
  }

  if (percent === 100) {
    let btn = document.getElementById("certificateBtn");
    if (btn) btn.style.display = "inline-block";
  }
}

function checkQuiz() {
  let answers = document.getElementsByName("q1");
  let correct = false;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked && answers[i].value === "correct") {
      correct = true;
    }
  }

  let result = document.getElementById("result");

  if (correct) {
    result.innerText = "Correct! 🎉";
    localStorage.setItem("quiz1", "passed");
  } else {
    result.innerText = "Incorrect. Try again.";
  }
}

window.onload = checkProgress;
