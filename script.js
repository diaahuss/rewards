// Initialize EmailJS
emailjs.init("sz2ImWOwFnVKy4qrF");

// Variables to store user data
let userName = "";
let userEmail = "";

// Reset fields function
function resetFields() {
  document.querySelectorAll("input").forEach(input => (input.value = ""));
}

// Navigate to Sign-Up
document.getElementById("go-to-sign-up").addEventListener("click", () => {
  resetFields();
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("sign-up-screen").classList.remove("hidden");
});

// Sign-Up Button Handler
document.getElementById("sign-up-btn").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("sign-up-email").value.trim();
  const password = document.getElementById("sign-up-password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();

  if (name && email && password && confirmPassword && password === confirmPassword) {
    alert("Sign-Up Successful!");

    // Save user data
    userName = name;
    userEmail = email;

    resetFields();
    document.getElementById("sign-up-screen").classList.add("hidden");
    document.getElementById("rewards-screen").classList.remove("hidden");

    // Populate fields on the Rewards Screen
    document.getElementById("name-display").value = userName;
    document.getElementById("email-display").value = userEmail;
  } else {
    alert("Please fill all fields and ensure passwords match.");
  }
});

// Login Button Handler
document.getElementById("login-btn").addEventListener("click", () => {
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  if (email && password) {
    alert("Login Successful!");

    // Mock user data for simplicity
    userName = "John Doe"; // Replace this with actual user retrieval logic.
    userEmail = email;

    resetFields();
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("rewards-screen").classList.remove("hidden");

    // Populate fields on the Rewards Screen
    document.getElementById("name-display").value = userName;
    document.getElementById("email-display").value = userEmail;
  } else {
    alert("Please enter both email and password.");
  }
});

// Submit Reward Button Handler
document.getElementById("submit-reward-btn").addEventListener("click", () => {
  const voucherCode = document.getElementById("voucher-code").value.trim();
  const walletAddress = document.getElementById("wallet-address").value.trim();
  const businessName = document.getElementById("business-name").value.trim();
  const businessEmail = document.getElementById("business-email").value.trim();

  if (voucherCode && walletAddress && businessName && businessEmail) {
    // Populate Transaction Screen
    document.getElementById("transaction-name").textContent = userName;
    document.getElementById("transaction-email").textContent = userEmail;
    document.getElementById("transaction-voucher-code").textContent = voucherCode;
    document.getElementById("transaction-wallet").textContent = walletAddress;
    document.getElementById("transaction-business-name").textContent = businessName;
    document.getElementById("transaction-business-email").textContent = businessEmail;

    // Send Email using EmailJS
    emailjs.send("service_ydsiil8", "template_y0f3pw9", {
      user_name: userName,
      user_email: userEmail,
      voucher_code: voucherCode,
      wallet_address: walletAddress,
      business_name: businessName,
      business_email: businessEmail,
      company_email: "diaahussein110@gmail.com"
    }).then(() => {
      alert("Reward submitted successfully and email sent!");
    }).catch(err => {
      console.error("Failed to send email:", err);
      alert("Failed to send email. Please try again.");
    });

    resetFields();
    document.getElementById("rewards-screen").classList.add("hidden");
    document.getElementById("transaction-screen").classList.remove("hidden");
  } else {
    alert("Please fill all fields.");
  }
});

// Back Button Handlers
document.querySelectorAll(".back-btn").forEach(button => {
  button.addEventListener("click", () => {
    resetFields();
    document.querySelectorAll(".screen").forEach(screen => screen.classList.add("hidden"));
    document.getElementById("login-screen").classList.remove("hidden");
  });
});
