const ingresoTexto = document.getElementById("ingresoTexto");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const muneco = document.getElementById("muneco");
const rightInfo = document.getElementById("rightInfo");
const right = document.getElementById("right");

let matrizCodigo = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

const replace = (nuevoValor) => {
  mensajeFinal.innerHTML = nuevoValor;
  muneco.classList.add("hidden");
  ingresoTexto.value = "";
  rightInfo.style.display = "none";
  btnCopiar.style.display = "block";
  right.classList.add("adjust");
  mensajeFinal.classList.add("adjust");
};

const reset = () => {
  mensajeFinal.innerHTML = "";
  muneco.classList.remove("hidden");
  rightInfo.style.display = "block";
  btnCopiar.style.display = "none";
  right.classList.remove("adjust");
  mensajeFinal.classList.remove("adjust");
  ingresoTexto.focus();
};
btnEncriptar.addEventListener("click", () => {
  const texto = ingresoTexto.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[$\.¿\?¡@#%&*()^""´{/}\[\]|<,>:;\u0300-\u036f]/g, "");
  if (texto != "") {
    function encriptar(newText) {
      for (let i = 0; i < matrizCodigo.length; i++) {
        if (newText.includes(matrizCodigo[i][0])) {
          newText = newText.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
      }
      return newText;
    }
  } else {
    alert("Ingrese un texto para encriptar");
    reset();
  }
  replace(encriptar(texto));
});

btnDesencriptar.addEventListener("click", () => {
  const texto = ingresoTexto.value.toLowerCase();
  if (texto != "") {
    function desencriptar(newText) {
      for (let i = 0; i < matrizCodigo.length; i++) {
        if (newText.includes(matrizCodigo[i][1])) {
          newText = newText.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
      }
      return newText;
    }
  } else {
    alert("Ingrese un texto para desencriptar");
    reset();
  }
  replace(desencriptar(texto));
});

btnCopiar.addEventListener("click", () => {
  let texto = mensajeFinal;
  //   navigator.clipboard.writeText(mensajeFinal.innerHTML);
  texto.select();
  document.execCommand("copy");
  alert("Texto copiado");
  reset();
});
