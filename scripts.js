document.addEventListener("DOMContentLoaded", () => {
  // body bg
  const bodyBg = document.getElementById("bodyBg");

  // btns
  const dark = document.getElementById("dark");
  const light = document.getElementById("light");
  const swap = document.getElementById("swap");

  const btnArr = [dark, light];

  // toggle dark & light
  function toggleDarkAndLight() {
    btnArr.forEach((singleBtn) => {
      singleBtn.addEventListener("click", () => {
        if (singleBtn === dark) {
          bodyBg.style.backgroundColor = "#232b2b";
        } else if (singleBtn === light) {
          bodyBg.style.backgroundColor = "#f5f5dc";
        }
      });
    });
  }
  toggleDarkAndLight();

  // toggle swap
  function toggleSwap() {
    swap.addEventListener("click", () => {
      console.log("it's swap");
    });
  }
  toggleSwap();
});
