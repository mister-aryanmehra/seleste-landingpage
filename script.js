const starContainer = document.querySelector(".stars");

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `${Math.random() * 100}vh`;
  star.style.animationDuration = `${Math.random() * 3 + 2}s`;
  starContainer.appendChild(star);
}

for (let i = 0; i < 1000; i++) {
  createStar();
}

const scorpioImageContainer = document.querySelector(".scorpio-image-container");
const constImageContainer = document.querySelector(".const-image-container");

scorpioImageContainer.addEventListener("click", () => {
  if (scorpioImageContainer.classList.contains("active")) {
    scorpioImageContainer.classList.remove("active");
    scorpioImageContainer.querySelector(".scorpio-image").classList.remove("active");
  } else {
    scorpioImageContainer.classList.add("active");
    scorpioImageContainer.querySelector(".scorpio-image").classList.add("active");
    constImageContainer.classList.remove("active");
    constImageContainer.querySelector(".const-image").classList.remove("active");
  }
});

constImageContainer.addEventListener("click", () => {
  if (constImageContainer.classList.contains("active")) {
    constImageContainer.classList.remove("active");
    constImageContainer.querySelector(".const-image").classList.remove("active");
  } else {
    constImageContainer.classList.add("active");
    constImageContainer.querySelector(".const-image").classList.add("active");
    scorpioImageContainer.classList.remove("active");
    scorpioImageContainer.querySelector(".scorpio-image").classList.remove("active");
  }
});

document.getElementById("subscriptionForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const messageElement = document.getElementById("message");

  messageElement.textContent = "";

  if (!name || !email) {
    messageElement.textContent = "Please fill out the required fields (Name and Email).";
    messageElement.style.color = "red";
    return;
  }

  // Clear the form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("instagram").value = "";

  messageElement.textContent = "Thank You for Subscribing";
  messageElement.style.color = "green";
});
