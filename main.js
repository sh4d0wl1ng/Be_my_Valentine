const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

btnNo.addEventListener("mouseover", moveButton);
btnNo.addEventListener("touchstart", moveButton);

function moveButton(event) {
  event.preventDefault(); // Prevent default touch behavior

  const containerRect = container.getBoundingClientRect();
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;

  let newTop, newLeft;

  do {
    newTop = getRandomNumber(0, containerRect.height - btnHeight);
  } while (Math.abs(newTop - parseFloat(btnNo.style.top || 0)) < containerRect.height / 3);

  do {
    newLeft = getRandomNumber(0, containerRect.width - btnWidth);
  } while (Math.abs(newLeft - parseFloat(btnNo.style.left || 0)) < containerRect.width / 3);

  btnNo.style.top = `${newTop}px`;
  btnNo.style.left = `${newLeft}px`;
}

btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});

// Reset the "No" button position if needed
document.addEventListener("click", () => {
  if (!btnNo.classList.contains("hide")) {
    btnNo.style.top = "50%";
    btnNo.style.left = "50%";
  }
});
