// Navigation Handlers
function resetFields() {
  document.querySelectorAll('input').forEach(input => (input.value = ""));
}

// Navigate to Sign-Up
document.getElementById("go-to-sign-up").addEventListener("click", () => {
  resetFields();
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("sign-up-screen").classList.remove("hidden");
});

// Back Button Handlers
document.querySelectorAll(".back-btn").forEach(button => {
  button.addEventListener("click", () => {
    resetFields();
    document.querySelectorAll(".screen").forEach(screen => screen.classList.add("hidden"));
    document.getElementById("login-screen").classList.remove("hidden");
  });
});

// Login Button Handler
document.getElementById("login-btn").addEventListener("click", () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (email && password) {
    alert("Login Successful");

    // Mocking logged-in user data
    const loggedInName = "John Doe"; // Replace with actual user data.
    document.getElementById("name-display").value = loggedInName;
    document.getElementById("email-display").value = email;

    resetFields();
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("rewards-screen").classList.remove("hidden");
  } else {
    alert("Please enter both email and password.");
  }
});

// Sign-Up Handler
document.getElementById("sign-up-btn").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const signUpEmail = document.getElementById("sign-up-email").value;
  const password = document.getElementById("sign-up-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (name && signUpEmail && password && confirmPassword) {
    if (password === confirmPassword) {
      alert("Sign Up Successful");

      document.getElementById("name-display").value = name;
      document.getElementById("email-display").value = signUpEmail;

      resetFields();
      document.getElementById("sign-up-screen").classList.add("hidden");
      document.getElementById("login-screen").classList.remove("hidden");
    } else {
      alert("Passwords do not match.");
    }
  } else {
    alert("Please fill all fields.");
  }
});

// Rewards Submission Handler
document.getElementById("submit-reward-btn").addEventListener("click", () => {
  const voucherCode = document.getElementById("voucher-code").value;
  const walletAddress = document.getElementById("wallet-address").value;
  const businessName = document.getElementById("business-name").value;
  const businessEmail = document.getElementById("business-email").value;

  const name = document.getElementById("name-display").value;
  const email = document.getElementById("email-display").value;

  if (voucherCode && walletAddress && businessName && businessEmail) {
    alert("Reward Submitted Successfully!");
    resetFields();
    document.getElementById("rewards-screen").classList.add("hidden");
    document.getElementById("transaction-screen").classList.remove("hidden");

    // Update transaction details
    document.getElementById("transaction-name").textContent = name;
    document.getElementById("transaction-email").textContent = email;
    document.getElementById("transaction-voucher-code").textContent = voucherCode;
    document.getElementById("transaction-wallet").textContent = walletAddress;
    document.getElementById("transaction-business-name").textContent = businessName;
    document.getElementById("transaction-business-email").textContent = businessEmail;

    // Sending email with MailJS
    emailjs.send("service_ydsiil8", "template_y0f3pw9", {
      name: name,
      email: email,
      voucherCode: voucherCode,
      walletAddress: walletAddress,
      businessName: businessName,
      businessEmail: businessEmail
    }, "user_sz2ImWOwFnVKy4qrF").then(() => {
      alert("Email has been sent to diaahussein110@gmail.com.");
    }, (error) => {
      alert("Failed to send email.");
    });
  } else {
    alert("Please fill all fields.");
  }
});
