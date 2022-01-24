const horizontalUnderLine = document.querySelector("#horizontal-underline");
const horizontalMenus = document.querySelectorAll("nav:first-child a");

const horizontalIndicator = (event) => {
  horizontalUnderLine.style.width = event.currentTarget.offsetWidth + 10 + "px";
  horizontalUnderLine.style.left = event.currentTarget.offsetLeft - 5 + "px";
  horizontalUnderLine.style.top =
    event.currentTarget.offsetTop + event.currentTarget.offsetHeight + "px";
};

horizontalMenus.forEach((menu) =>
  menu.addEventListener("click", (e) => horizontalIndicator(e))
);

const verticalUnderLine = document.querySelector("#vertical-underline");
const verticalMenus = document.querySelectorAll("nav:nth-child(2) a");

const verticalIndicator = (event) => {
  verticalUnderLine.style.width = event.currentTarget.offsetWidth + 10 + "px";
  verticalUnderLine.style.left = event.currentTarget.offsetLeft - 5 + "px";
  verticalUnderLine.style.top =
    event.currentTarget.offsetTop + event.currentTarget.offsetHeight + "px";
};

verticalMenus.forEach((menu) =>
  menu.addEventListener("mouseover", (e) => verticalIndicator(e))
);
