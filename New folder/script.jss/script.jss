// Show the secret message when button is clicked
const btn = document.getElementById("btn");
const secret = document.getElementById("secret");

btn.addEventListener("click", () => {
  secret.classList.toggle("hidden");
  if (!secret.classList.contains("hidden")) {
    btn.textContent = "One more virtual hug 🤗";
  } else {
    btn.textContent = "Click me 😊";
  }
});

// Generate random floating hearts
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const size = Math.random() * 10 + 10; // 10–20px
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${6 + Math.random() * 4}s`;
  heart.style.opacity = 0.4 + Math.random() * 0.6;

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 400);