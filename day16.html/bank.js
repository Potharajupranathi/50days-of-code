let balance = 0;
function deposit() {
  let amount = prompt("Enter amount to deposit:");
  amount = parseFloat(amount);

  if (amount > 0) {
    balance += amount;
    document.getElementById("message").innerText = "You deposited Rs" +""+amount;
  } else {
    alert("Enter a valid amount.");
  }
}

function withdraw() {
  let amount = prompt("Enter amount to withdraw:");
  amount = parseFloat(amount);

  if (amount > 0) {
    if (amount <= balance) {
      balance -= amount;
      alert("You withdrew Rs" +""+ amount);
    } else {
      alert("Not enough balance.");
    }
  } else {
    alert("Enter a valid amount.");
  }
}

function checkBalance() {
  alert("Your balance is Rs" +""+balance);
}