console.log("calc");

let btnCalcs = document.getElementsByClassName("btnCalc");
let input = document.getElementById("input");
let calcAns = "";

Array.from(btnCalcs).forEach((calcbtn) => {
  calcbtn.addEventListener("click", () => {
    let clickedBtn = calcbtn.value;
    // console.log(clickedBtn);

    if (clickedBtn !== "del" && clickedBtn !== "reset" && clickedBtn !== "=") {
      calcAns += clickedBtn;
      input.value += clickedBtn;
    } else if (clickedBtn === "del") {
      let inVal = input.value;
      let leng = inVal.length;
      input.value = inVal.slice(0, leng - 1);
      calcAns = input.value;
    } else if (clickedBtn === "reset") {
      calcAns = "";
      input.value = calcAns;
    } else {
      if (input.value === "") {
        input.value = "";
      } else {
        input.value = eval(calcAns);
        calcAns = input.value;
      }
    }
  });
});
