const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (e) => {
  const input = e.target.value,
    length = input.length,
    blurValue = 20 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
});
