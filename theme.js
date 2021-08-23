let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
// console.log(btn1, btn2, btn3);

btn1.addEventListener("click", () => {
  btn1.classList.add("btnActive");
  btn2.classList.remove("btnActive");
  btn3.classList.remove("btnActive");
  themeOne();
});
btn2.addEventListener("click", () => {
  btn2.classList.add("btnActive");
  btn1.classList.remove("btnActive");
  btn3.classList.remove("btnActive");
  themeTwo();
});
btn3.addEventListener("click", () => {
  btn3.classList.add("btnActive");
  btn2.classList.remove("btnActive");
  btn1.classList.remove("btnActive");
  themeThree();
});

// Setting up Themes
let inputSec = document.getElementById("input");
let headBox = document.getElementById("headBox");
let resultBtn = document.getElementById("resultBtn");
let resetBtn = document.getElementById("resetBtn");
let delBtn = document.getElementById("delBtn");
let themeCalcBox = document.getElementById("themeCalcBox");
let themeChngBtn = document.getElementById("themeChngBtn");

// THEME ONE
function themeOne() {
  document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
  inputSec.style.backgroundColor = "hsl(224, 36%, 15%)";
  inputSec.style.color = "aliceblue";
  headBox.style.color = "aliceblue";
  headBox.style.backgroundColor = "hsl(222, 26%, 31%)";

  let allbtns = document.querySelectorAll(".btnCalc");
  Array.from(allbtns).forEach((btn) => {
    btn.style.backgroundColor = "hsl(30, 25%, 89%)";
    btn.style.color = "hsl(221, 14%, 31%)";
    btn.style.boxShadow = "1px 1px 4px hsl(28deg 16% 65%)";

    btn.addEventListener("mouseover", () => {
      btn.style.backgroundColor = "hsl(224, 36%, 15%)";
      btn.style.color = "white";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.backgroundColor = "hsl(30, 25%, 89%)";
      resultBtn.style.backgroundColor = "hsl(6, 63%, 50%)";
      resetBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
      delBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
      btn.style.color = "hsl(224, 36%, 15%)";
    });
  });

  resultBtn.style.backgroundColor = "hsl(6, 63%, 50%)";
  resultBtn.style.boxShadow = "1px 1px 1px hsl(6deg 70% 34%)";
  resultBtn.style.color = "white";

  resetBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
  delBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
  delBtn.style.color = "rgb(245 244 245)";
  resetBtn.style.color = "rgb(245 244 245)";

  themeCalcBox.style.backgroundColor = "hsl(224, 36%, 15%)";
  themeChngBtn.style.backgroundColor = "hsl(224, 36%, 15%)";
  btn3.style.backgroundColor = "hsl(224, 36%, 15%)";
}

// THEME TWO
function themeTwo() {
  document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
  inputSec.style.backgroundColor = "hsl(0, 0%, 93%)";
  inputSec.style.color = "#000000";
  headBox.style.color = "hsl(224, 36%, 15%)";
  headBox.style.backgroundColor = "hsl(0, 0%, 90%)";

  let allbtns = document.querySelectorAll(".btnCalc");
  Array.from(allbtns).forEach((btn) => {
    btn.style.backgroundColor = "hsl(30, 25%, 89%)";
    btn.style.color = "hsl(221, 14%, 31%)";
    btn.style.boxShadow = "1px 1px 4px hsl(28deg 16% 65%)";

    btn.addEventListener("mouseover", () => {
      btn.style.backgroundColor = "hsl(224, 36%, 15%)";
      btn.style.color = "white";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.backgroundColor = "hsl(30, 25%, 89%)";
      resultBtn.style.backgroundColor = "hsl(6, 63%, 50%)";
      resultBtn.style.color = "white";

      resetBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
      delBtn.style.color = "white";
      resetBtn.style.color = "white";
      delBtn.style.backgroundColor = "hsl(185, 42%, 37%)";

      btn.style.color = "hsl(224, 36%, 15%)";
    });
  });

  resultBtn.style.backgroundColor = "hsl(6, 63%, 50%)";
  resultBtn.style.boxShadow = "1px 1px 1px hsl(6deg 70% 34%)";
  resultBtn.style.color = "white";

  resetBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
  delBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
  delBtn.style.color = "white";
  resetBtn.style.color = "white";

  themeCalcBox.style.backgroundColor = "hsl(0, 5%, 81%)";
  themeChngBtn.style.backgroundColor = "hsl(0, 5%, 81%)";
  btn3.style.backgroundColor = "hsl(0, 5%, 81%)";
}

// THEME THREE
function themeThree() {
  document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
  inputSec.style.backgroundColor = "hsl(268, 71%, 12%)";
  inputSec.style.color = "hsl(52, 100%, 62%)";
  headBox.style.color = "hsl(52, 100%, 62%)";
  headBox.style.backgroundColor = "hsl(268, 75%, 9%)";

  let allbtns = document.querySelectorAll(".btnCalc");
  Array.from(allbtns).forEach((btn) => {
    btn.style.backgroundColor = "hsl(268, 47%, 21%)";
    btn.style.color = "hsl(52, 100%, 62%)";
    btn.style.boxShadow = "1px 1px 4px hsl(285, 91%, 52%)";

    btn.addEventListener("mouseover", () => {
      btn.style.backgroundColor = "hsl(224, 36%, 15%)";
      btn.style.color = "white";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.backgroundColor = "hsl(268, 47%, 21%)";
      resultBtn.style.backgroundColor = "hsl(176, 100%, 44%)";
      resetBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
      delBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
      btn.style.color = "hsl(52, 100%, 62%)";
    });
  });

  resultBtn.style.backgroundColor = "hsl(176, 100%, 44%)";
  resultBtn.style.boxShadow = "1px 1px 4px hsl(177, 92%, 70%)";
  resultBtn.style.color = "white";

  delBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
  delBtn.style.color = "rgb(245 244 245)";
  resetBtn.style.backgroundColor = "hsl(281, 89%, 26%)";

  resetBtn.style.color = "rgb(245 244 245)";

  themeCalcBox.style.backgroundColor = "hsl(268, 71%, 12%)";
  themeChngBtn.style.backgroundColor = "hsl(224, 36%, 15%)";
  btn3.style.backgroundColor = "hsl(177, 92%, 70%)";
}
