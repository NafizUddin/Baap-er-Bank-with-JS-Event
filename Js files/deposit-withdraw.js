document.getElementById("deposit-btn").addEventListener("click", function () {
  // getting the input deposit amount
  const depositAmount = document.getElementById("deposit-amount");
  const newDepositString = depositAmount.value;
  const newDeposit = parseFloat(newDepositString);

  // Set the input deposit to Deposit section
  const depositTotal = document.getElementById("deposit-total");
  const previousDepositString = depositTotal.innerText;
  const previousDeposit = parseFloat(previousDepositString);
  const currentDeposit = previousDeposit + newDeposit;

  depositTotal.innerText = currentDeposit;

  //   Set the input deposit to balance
  const balance = document.getElementById("balance-total");
  const previousBalanceString = balance.innerText;
  const previousBalance = parseFloat(previousBalanceString);
  const currentBalance = previousBalance + newDeposit;

  balance.innerText = currentBalance;

  //   Clear the input deposit amount
  depositAmount.value = "";
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  // Get the input withdraw balance
  const withdrawAmount = document.getElementById("withdraw-amount");
  const newWithdrawAmountString = withdrawAmount.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  //   Set the input withdraw to withdraw section
  const withdrawTotal = document.getElementById("withdraw-total");
  const previousWithdrawString = withdrawTotal.innerText;
  const previousWithdraw = parseFloat(previousWithdrawString);
  const currentWithdraw = previousWithdraw + newWithdrawAmount;

  withdrawTotal.innerText = currentWithdraw;

  //   set the input withdraw to withdraw section
  const balance = document.getElementById("balance-total");
  const previousBalanceString = balance.innerText;
  const previousBalance = parseFloat(previousBalanceString);
  const currentBalance = previousBalance - newWithdrawAmount;

  balance.innerText = currentBalance;

  //   Clear the input withdraw amount
  withdrawAmount.value = "";
});
