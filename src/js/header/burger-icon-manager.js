const burgerIconBar1 = document.getElementById("burger-icon__bar1");
const burgerIconBar2 = document.getElementById("burger-icon__bar2");
const burgerIconBar3 = document.getElementById("burger-icon__bar3");

const burgerIconBars = [];
burgerIconBars.push(burgerIconBar1);
burgerIconBars.push(burgerIconBar2);
burgerIconBars.push(burgerIconBar3);

function turnIconToCross() {
  burgerIconBars.forEach((bar, index) => {
    bar.classList.add("burger-icon__bar--cross");
    bar.classList.add("burger-icon__bar" + (index + 1) + "--cross");
  });
}

function turnIconToBurger() {
  burgerIconBars.forEach((bar, index) => {
    bar.classList.remove("burger-icon__bar--cross");
    bar.classList.remove("burger-icon__bar" + (index + 1) + "--cross");
  });
}

export { turnIconToCross, turnIconToBurger };
