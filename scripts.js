document.addEventListener("DOMContentLoaded", () => {
  // body bg
  const bodyBg = document.getElementById("bodyBg");

  // toggle dark & light
  function toggleDarkAndLight() {
    // btns
    const dark = document.getElementById("dark");
    const light = document.getElementById("light");

    // btns arr
    const btnArr = [dark, light];

    btnArr.forEach((singleBtn) => {
      singleBtn.addEventListener("click", () => {
        if (singleBtn === dark) {
          bodyBg.classList.remove("light-colour");
          bodyBg.classList.add("dark-colour");
        } else if (singleBtn === light) {
          bodyBg.classList.remove("dark-colour");
          bodyBg.classList.add("light-colour");
        }
      });
    });
  }
  toggleDarkAndLight();

  // toggle swap
  function toggleSwap() {
    // swap btn
    const swap = document.getElementById("swap");

    swap.addEventListener("click", () => {
      if (bodyBg.classList.contains("dark-colour")) {
        bodyBg.classList.remove("dark-colour");
        bodyBg.classList.add("light-colour");
      } else {
        bodyBg.classList.remove("light-colour");
        bodyBg.classList.add("dark-colour");
      }
    });
  }
  toggleSwap();
});
