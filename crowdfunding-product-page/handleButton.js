var checked = false;

var modal = document.getElementById("pledgeModal");

var openModalBtn = document.getElementById("mastercraftBtn");
var span = document.getElementsByClassName("close")[0];

var selectBamboo = document.getElementById("selectBamboo");
var bambooInput = document.getElementById('bambooInput');

var selectBlack = document.getElementById("selectBlack");
var blackInput = document.getElementById('blackInput');

var selectMahogany = document.getElementById("selectMahogany");
var mahoganyInput = document.getElementById("mahoganyInput");

const gotItBtn = document.getElementById("gotIt");
const thanksModal = document.getElementById("thanksModal");


openModalBtn.onclick = function() {
  modal.style.display = "block";
}

selectBamboo.onclick = function() {
  modal.style.display = "block";
  bambooInput.checked = true;
}

selectBlack.onclick = function() {
  modal.style.display = "block";
  blackInput.checked = true;
}

selectMahogany.onclick = function() {
  modal.style.display = "block";
  mahoganyInput.checked = true;
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

gotItBtn.onclick = function() {
  modal.style.display = "none";
  thanksModal.style.display = "none";
}

function displayThanksModal() {

  const radio = document.getElementsByClassName('radio');

  var valueBacked;

  updateBackedTotal(1);

  if(radio[0].checked) {
    let actualBacked = document.getElementById("backedValue").textContent;
    let valueEnterInput = 0;

    let actualBackedNumber = parseInt(actualBacked);

    window.localStorage.setItem("actualMoneyBacked", actualBackedNumber);
    window.localStorage.setItem("moneyBacked", valueEnterInput);

    let actualValue = parseInt(localStorage.getItem("actualMoneyBacked"));
    let valueInput = parseInt(localStorage.getItem("moneyBacked"));

    let som = actualValue + valueInput;

    valueBacked = som;
  }

  if(radio[1].checked) {
    let actualBacked = document.getElementById("backedValue").textContent;
    let valueEnterInput = document.getElementById("bambooInputValue").value;

    let valueEnterInputNumber = parseInt(valueEnterInput);
    let actualBackedNumber = parseInt(actualBacked);

    localStorage.setItem("actualMoneyBacked", actualBackedNumber);
    localStorage.setItem("moneyBacked", valueEnterInputNumber);

    let actualValue = parseInt(localStorage.getItem("actualMoneyBacked"));
    let valueInput = parseInt(localStorage.getItem("moneyBacked"));

    let som = actualValue + valueInput;

    valueBacked = som;

    let percent = actualValue * 100;
    percent = percent / 100000;

    updateProgressBar(percent);
    updateBambooReward(1);
  }

  if(radio[2].checked) {
    let actualBacked = document.getElementById("backedValue").textContent;
    let valueEnterInput = document.getElementById("blackInputValue").value;

    let valueEnterInputNumber = parseInt(valueEnterInput);
    let actualBackedNumber = parseInt(actualBacked);

    localStorage.setItem("actualMoneyBacked", actualBackedNumber);
    localStorage.setItem("moneyBacked", valueEnterInputNumber);

    let actualValue = parseInt(localStorage.getItem("actualMoneyBacked"));
    let valueInput = parseInt(localStorage.getItem("moneyBacked"));

    let som = actualValue + valueInput;

    valueBacked = som;

    let percent = actualValue*100;
    percent = percent / 100000;

    updateProgressBar(percent);
    updateBlackReward(1);
  }

  if(radio[3].checked) {
    let actualBacked = document.getElementById("backedValue").textContent;
    let valueEnterInput = document.getElementById("mahoganyInputValue").value;

    let valueEnterInputNumber = parseInt(valueEnterInput);
    let actualBackedNumber = parseInt(actualBacked);

    localStorage.setItem("actualMoneyBacked", actualBackedNumber);
    localStorage.setItem("moneyBacked", valueEnterInputNumber);

    let actualValue = parseInt(localStorage.getItem("actualMoneyBacked"));
    let valueInput = parseInt(localStorage.getItem("moneyBacked"));

    let som = actualValue + valueInput;

    valueBacked = som;

    let percent = actualValue*100;
    percent = percent / 100000;

    if (percent > 100) {
      percent = 100;
    }

    updateProgressBar(percent);
    updateMahoganyReward(1);
  }

  thanksModal.style.display = "block";
  modal.style.display = "none";

  updateBackedValue(valueBacked);

}

function displayPledgeIfChecked() {
  const radio = document.getElementsByClassName('radio');

  const noRewardPledge = document.querySelector(".no-reward-pledge");
  const noRewardModal = document.querySelector(".no-reward-modal")

  const bambooPledge = document.querySelector(".bamboo-pledge");
  const bambooModal = document.querySelector(".bamboo-modal");

  const blackPledge = document.querySelector(".black-pledge");
  const blackModal = document.querySelector(".black-modal");

  const mahoganyPledge = document.querySelector(".mahogany-pledge");
  const mahoganyModal = document.querySelector(".mahogany-modal");

  if(radio[0].checked) {
    console.log("radio 0 checked");

    noRewardPledge.style.setProperty("display", "block");
    noRewardModal.style.setProperty("height", "220px");
    noRewardModal.style.setProperty ("border-color", "hsl(176, 50%, 47%)");
  } else {
    noRewardPledge.style.setProperty("display", "none");
    noRewardModal.style.setProperty("height", "150px");
    noRewardModal.style.setProperty ("border-color", "rgba(190, 190, 190, 0.5)");
  }

  if(radio[1].checked) {
    console.log("radio 1 checked");

    bambooPledge.style.setProperty("display", "block");
    bambooModal.style.setProperty("height", "220px");
    bambooModal.style.setProperty ("border-color", "hsl(176, 50%, 47%)");
  } else {
    bambooPledge.style.setProperty("display", "none");
    bambooModal.style.setProperty("height", "150px");
    bambooModal.style.setProperty ("border-color", "rgba(190, 190, 190, 0.5)");
  }

  if(radio[2].checked) {
    console.log("radio 1 checked");

    blackPledge.style.setProperty("display", "block");
    blackModal.style.setProperty("height", "220px");
    blackModal.style.setProperty ("border-color", "hsl(176, 50%, 47%)");
  } else {
    blackPledge.style.setProperty("display", "none");
    blackModal.style.setProperty("height", "150px");
    blackModal.style.setProperty ("border-color", "rgba(190, 190, 190, 0.5)");
  }

  if(radio[3].checked) {
    console.log("radio 1 checked");

    mahoganyPledge.style.setProperty("display", "block");
    mahoganyModal.style.setProperty("height", "220px");
    mahoganyModal.style.setProperty ("border-color", "hsl(176, 50%, 47%)");
  } else {
    mahoganyPledge.style.setProperty("display", "none");
    mahoganyModal.style.setProperty("height", "150px");
    mahoganyModal.style.setProperty ("border-color", "rgba(190, 190, 190, 0.5)");
  }
}

function updateProgressBar(percent) {
  let progressBar = document.getElementById("progress-bar");

  progressBar.style.setProperty("width", `${percent}%`);
}

function updateBackedValue(value) {
  var backedValue = document.getElementById("backedValue");
  backedValue.innerHTML = value;
}

function updateBackedTotal(value) {
  var backedTotal = document.getElementById("backedTotal");

  var backedNumber = parseInt(backedTotal.textContent);
  var sum = backedNumber + value;

  localStorage.setItem("backedTotal", sum);

  var numberOfBacked = localStorage.getItem("backedTotal");

  backedTotal.innerHTML = numberOfBacked;
}

function updateBambooReward(value) {
  let bambooLeft = document.getElementById("bambooLeft");
  let bambooPledgeLeft = document.getElementById("bambooPledgeLeft");

  window.localStorage.setItem("bambooLeft1", bambooLeft.textContent);

  let valueNumber = parseInt(value);

  let bambooActualLeft = parseInt(localStorage.getItem("bambooLeft1"));

  var result = bambooActualLeft - valueNumber;

  bambooLeft.innerHTML = result;
  bambooPledgeLeft.innerHTML = result;
}

function updateBlackReward(value) {
  let blackLeft = document.getElementById("blackLeft");
  let blackPledgeLeft = document.getElementById("blackPledgeLeft");

  window.localStorage.setItem("blackLeft1", blackLeft.textContent);

  let valueNumber = parseInt(value);

  let blackActualLeft = parseInt(localStorage.getItem("blackLeft1"));

  var result = blackActualLeft - valueNumber;

  blackLeft.innerHTML = result;
  blackPledgeLeft.innerHTML = result;
}

function updateMahoganyReward(value) {
  let mahoganyLeft = document.getElementById("mahoganyLeft");
  let mahoganyPledgeLeft = document.getElementById("mahoganyPledgeLeft");

  window.localStorage.setItem("mahoganyLeft1", mahoganyLeft.textContent);

  let valueNumber = parseInt(value);

  let mahoganyActualLeft = parseInt(localStorage.getItem("mahoganyLeft1"));

  var result = mahoganyActualLeft - valueNumber;

  mahoganyLeft.innerHTML = result;
  mahoganyPledgeLeft.innerHTML = result;
}