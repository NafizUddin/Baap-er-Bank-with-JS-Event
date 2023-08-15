document.getElementById("submit-btn").addEventListener("click", function () {
  const userEmail = document.getElementById("user-email");
  const email = userEmail.value;

  const userPassword = document.getElementById("user-password");
  const password = userPassword.value;

  if (email.endsWith(".com") && password === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("Sorry wrong Input! You are an Invalid User");
  }
});


