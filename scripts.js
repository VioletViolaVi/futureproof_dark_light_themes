document.addEventListener("DOMContentLoaded", () => {
  // body bg
  const bodyBg = document.getElementById("bodyBg");

  // btns
  const dark = document.getElementById("dark");
  const light = document.getElementById("light");
  const swap = document.getElementById("swap");

  const btnArr = [dark, light, swap];

  // toggling themes
  function togglingBtns() {
    btnArr.forEach((singleBtn) => {
      singleBtn.addEventListener("click", () => {
        if (singleBtn === dark) {
          bodyBg.style.backgroundColor = "#232b2b";
        } else if (singleBtn === light) {
          bodyBg.style.backgroundColor = "#f5f5dc";
        } else {
          console.log("it's swap");
        }
      });
    });
  }
  togglingBtns();
});
