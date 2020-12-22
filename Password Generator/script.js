const genBtn = document.getElementById("genBtn");
const result = document.getElementById("result");
const strong_text = document.getElementById("strong_text");
const medium_text = document.getElementById("medium_text");
const easy_text = document.getElementById("easy_text");

function getSelected() {
  const answerEls = document.querySelectorAll(".level");

  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function passwordGen(level) {
  var chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  chars += chars.toString().toUpperCase();
  var nums = ['1','2','3','4','5','6','7','8','9','0']
  var sym = ['!','”','#','$','&','%']
  let password = '';
  // textArray[randomNumber]
  if (level == "easy") {
    for (var i = 0; i < 2; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
      password += nums[Math.floor(Math.random() * nums.length)];
    };
    
    result.innerHTML = password;
    result.style.visibility = "visible";
  } else if (level == "medium") {
    for (var i = 0; i < 2; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
      password += sym[Math.floor(Math.random() * sym.length)];
      password += nums[Math.floor(Math.random() * nums.length)];
    };
    
    result.innerHTML = password;
    result.style.visibility = "visible"; 
  } else if (level == "strong") {
    for (var i = 0; i < 4; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
      password += sym[Math.floor(Math.random() * sym.length)];
      password += nums[Math.floor(Math.random() * nums.length)];
    };
    
    result.innerHTML = password;
    result.style.visibility = "visible"; 
    
  }
  else {
    alert('WTF!')
  }
}

genBtn.addEventListener("click", () => {
  const answer = getSelected();
  result.style.visibility = "hidden";
  if (answer) {
    passwordGen(answer);
  
  } else {
    alert("Please Choose an option and try again!");
  }
});
