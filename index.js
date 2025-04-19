const displayElm = document.querySelector(".display"); //globální proměnná, kde je uložen element zobrazující displej kalkulačky
//displayElm.textContent = 42; //na displeji kalkulačky se zobrazí 42

const handleDigitClick = (event) => {
  //event.preventDefault ()
 // console.log("Uživatel klikl na tlačítko")  //ověření, že se funkce volá
 if(displayElm.textContent.length === 9) {
  return;
 }
const digit = event.target.textContent;
if (displayElm.textContent === "0") {
  displayElm.textContent = digit; // bonusový úkol - na displeji je nula,chceme ji nahradit zadanou číslicí
}else {
  displayElm.textContent += digit;
}
};

document.querySelector("#btn-7").addEventListener("click",handleDigitClick); //funkci handleDigit Click navěste voláním addEventListener jako posluchač události click na jedno tlačítko
document.querySelector("#btn-6").addEventListener("click",handleDigitClick);
document.querySelector("#btn-5").addEventListener("click",handleDigitClick);
document.querySelector("#btn-4").addEventListener("click",handleDigitClick);
document.querySelector("#btn-3").addEventListener("click",handleDigitClick);
document.querySelector("#btn-2").addEventListener("click",handleDigitClick);
document.querySelector("#btn-1").addEventListener("click",handleDigitClick);
document.querySelector("#btn-0").addEventListener("click",handleDigitClick);
document.querySelector("#btn-8").addEventListener("click",handleDigitClick);
document.querySelector("#btn-9").addEventListener("click",handleDigitClick);
