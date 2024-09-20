const starContainer = document.querySelector(".stars");
const shootingStarContainer = document.querySelector(
  ".shooting-star-container"
);

let lastTime = performance.now();
let lastVisibleTime = lastTime;
let shootingStars = [];

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `${Math.random() * 100}vh`;
  star.style.animationDuration = `${Math.random() * 3 + 2}s`;
  starContainer.appendChild(star);
}

for (let i = 0; i < 700; i++) {
  createStar();
}

function createShootingStar() {
  const shootingStar = document.createElement("div");
  shootingStar.classList.add("shooting-star");

  const startX = Math.random() * window.innerWidth;
  const startY = (Math.random() * window.innerHeight) / 2;
  const endX = startX + Math.random() * 400 - 200;
  const endY = window.innerHeight + 20;

  const deltaX = endX - startX;
  const deltaY = endY - startY;
  const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

  shootingStar.style.left = `${startX}px`;
  shootingStar.style.top = `${startY}px`;
  shootingStar.style.transform = `rotate(${angle}deg)`;

  shootingStarContainer.appendChild(shootingStar);

  shootingStar.style.animation = `shoot 4s ease-in-out forwards`;

  shootingStar.addEventListener("animationend", () => {
    shootingStar.remove();
  });
}

function shootingStarLoop() {
  createShootingStar();
  const nextStarIn = Math.random() * 3000 + 1500;
  setTimeout(shootingStarLoop, nextStarIn);
}

shootingStarLoop();

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    const currentTime = performance.now();
    const elapsedTime = (currentTime - lastVisibleTime) / 1000;

    const starsPerInterval = 1 / ((Math.random() * 3000 + 1500) / 1000);
    const starsToCreate = Math.floor(elapsedTime * starsPerInterval);

    for (let i = 0; i < starsToCreate; i++) {
      setTimeout(createShootingStar, Math.random() * 2000);
    }

    lastVisibleTime = currentTime;
  } else {
    lastVisibleTime = performance.now();
  }
});

const scorpioImageContainer = document.querySelector(
  ".scorpio-image-container"
);
const constImageContainer = document.querySelector(".const-image-container");

scorpioImageContainer.addEventListener("click", () => {
  if (scorpioImageContainer.classList.contains("active")) {
    scorpioImageContainer.classList.remove("active");
    scorpioImageContainer
      .querySelector(".scorpio-image")
      .classList.remove("active");
  } else {
    scorpioImageContainer.classList.add("active");
    scorpioImageContainer
      .querySelector(".scorpio-image")
      .classList.add("active");

    constImageContainer.classList.remove("active");
    constImageContainer
      .querySelector(".const-image")
      .classList.remove("active");
  }
});

constImageContainer.addEventListener("click", () => {
  if (constImageContainer.classList.contains("active")) {
    constImageContainer.classList.remove("active");
    constImageContainer
      .querySelector(".const-image")
      .classList.remove("active");
  } else {
    constImageContainer.classList.add("active");
    constImageContainer.querySelector(".const-image").classList.add("active");

    scorpioImageContainer.classList.remove("active");
    scorpioImageContainer
      .querySelector(".scorpio-image")
      .classList.remove("active");
  }
});

document
  .getElementById("subscriptionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const messageElement = document.getElementById("message");

    messageElement.textContent = "";

    if (!name || !email) {
      messageElement.textContent =
        "Please fill out the required fields (Name and Email).";
      messageElement.style.color = "red";
      return;
    }

    messageElement.textContent = "Thank you for subscribing!";
    messageElement.style.color = "green";
  });
