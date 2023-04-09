// tady je místo pro náš program
zmenaBarvy = document.querySelector (".ctverecek");

//document.querySelector("#vysledek").innerHTML = secti(4, 5);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti() {
  const a = Number(prompt ("zadejte hodnotu a"));
  const b = Number(prompt ("zadejte hodnotu b"));
  let c = a + b;
  const vysledek = document.querySelector ("#vysledek");
  vysledek.textContent = c;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log ("Gratulace, právě jsi spustila tuto funkci!");
  zmenaBarvy.innerHTML = "Gratulace, právě jsi spustila tuto funkci!";
  //zmenaBarvy.style.fontSize = "12px";
  zmenaBarvy.style.width = "350px";
}

const klik = () => {
  zmenaBarvy.classList.toggle ("green");
}