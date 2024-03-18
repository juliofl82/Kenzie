const button = document.querySelector("button"); // Corrigido para 'document.querySelector'
const body = document.body;
let darkMode = false;

function themeChange(event) {
    event.preventDefault(); // Previne o comportamento padrão do evento, se necessário.
    darkMode = !darkMode;
    body.classList.toggle("darkMode");
    localStorage.setItem("theme", JSON.stringify(darkMode));
}

button.addEventListener("click", themeChange);


// Criando a função que analisa o tema
function themeAnalasys() {

	// Reatribuindo o valor da variável conforme o valor salvo
	// Usando o JSON.parse para converter o valor de JSON para JS
	darkMode = JSON.parse(localStorage.getItem("theme"));

	// Verificando se darkMode é true
	if (darkMode) {
	// Adicionando darkMode
    body.classList.add("dark-mode");
  }
}

// Chamando a função em escopo global
themeAnalasys()
