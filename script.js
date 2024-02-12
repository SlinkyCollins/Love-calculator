window.onload = function () {
  let button = document.getElementById("calculate");
  button.addEventListener("click", calculateLove);
};

function calculateLove() {
  let rando = Math.random() * 100;
  let val = Math.round(rando);
  let message = document.getElementById("result-message");


  if (
    (firstPerson.value == "" && secondPerson.value == "") ||
    firstPerson.value == "" ||
    secondPerson.value == ""
  ) {
    showError.innerHTML = "Love input(s) cannot be empty, please try again.";
    message.style.display = "none";
  } else if (val >= 0 && val < 30) {
    result.innerHTML = `<p>${Math.round(rando)}%</p>
            <br/>
            <h1>You should become the opposite of lovers!😂</h1>`;
    showError.innerHTML = "";
  } else if (val >= 30 && val < 50) {
    result.innerHTML = `<p>${Math.round(rando)}%</p>
          <br/>
            <h1>I hate to break it to you but your love compatibility has to come in another dimension 🤦‍♂️</h1>`;
    showError.innerHTML = "";
  } else if (val >= 50 && val < 65) {
    result.innerHTML = `<p>${Math.round(rando)}%</p>
          <br/>
            <h1>I'm sorry my gee, the chance of this working out is pretty low!🤷‍♂️</h1>`;
    showError.innerHTML = "";
  } else if (val >= 65 && val < 80) {
    result.innerHTML = `<p>${Math.round(rando)}%</p>
          <br/>
            <h1>Well, i gotta say "Not bad", you can go on🥰❣</h1>`;
    showError.innerHTML = "";
  } else if (val >= 80 && val <= 100) {
    result.innerHTML = `<p>${Math.round(rando)}%</p>
          <br/>
            <h1>If you don't marry each other, i go wipe you cord for neckkk!🤩😂❤</h1>`;
    showError.innerHTML = "";
  }
  document.getElementById("result-message").innerText = firstPerson.value + " and " + secondPerson.value + "'s chance of love:";
}
