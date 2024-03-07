window.addEventListener("click", () => {
  calcBetOnClick();
});

let input = 0;
let percentToBet = 0;
let balanceMat = 0;
let balanceBet = 0;

function balance() {
  let percents = {
    tradeMatsBalances: parseInt(document.querySelector(".inputMat").value),
    bet365Balances: parseInt(document.querySelector(".inputBet").value),
  };
  localStorage.setItem("percentsBet", JSON.stringify(percents));
}
("");

function getData() {
  let getStorData = JSON.parse(localStorage.getItem("percentsBet"));
  balanceMat = getStorData.tradeMatsBalances;
  balanceBet = getStorData.bet365Balances;
  return { first: balanceMat, second: balanceBet };
}
let getReturn = getData();

let tradeMatsBalances = (document.querySelector(".inputMat").value =
  getReturn.first);
let bet365Balances = (document.querySelector(".inputBet").value =
  getReturn.second);

function calcPercent() {
  tradeMatsBalances = parseInt(document.querySelector(".inputMat").value);
  percentToBet = bet365Balances / tradeMatsBalances;

  console.log(percentToBet);
  return percentToBet;
}

calcPercent();

async function calcBetOnClick() {
  let number = await navigator.clipboard.readText();
  input = parseInt((document.querySelector(".input").value = number));

  let output = Math.round((input * percentToBet) / 50) * 50;

  if (output < 100) {
    document.querySelector(".output").value = 100;
    let copyOutput = navigator.clipboard.writeText(100);
  } else {
    document.querySelector(".output").value = output;
    copyOutput = navigator.clipboard.writeText(output);
  }
}

function calcBetOnInput() {
  input = parseInt(document.querySelector(".input").value);
  let output = Math.round((input * percentToBet) / 50) * 50;

  if (output < 100) {
    document.querySelector(".output").value = 100;
    let copyOutput = navigator.clipboard.writeText(100);
  } else {
    copyOutput = navigator.clipboard.writeText(output);
    document.querySelector(".output").value = output;
  }
}
