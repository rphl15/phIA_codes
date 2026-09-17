function doGet() {
  return HtmlService
    .createHtmlOutputFromFile("Index")
    .setTitle("phIA");
}

function perguntarPHIA(pergunta) {

  if (!pergunta || pergunta.trim() === "") {
    return "Digite alguma coisa para conversar comigo.";
  }

  return processarPergunta(pergunta);
}

function processarPergunta(pergunta) {

  const texto = pergunta.toLowerCase().trim();

  if (texto.includes("olá") || texto.includes("ola")) {
    return "Olá! Eu sou a phIA. Ainda estou no começo, mas vamos construir minha inteligência juntos.";
  }

  if (texto.includes("quem é você") || texto.includes("quem e voce")) {
    return "Eu sou a phIA, um projeto de inteligência artificial que estamos construindo do zero.";
  }

  if (texto.includes("")) {
    return "Estou aqui. Meu núcleo ainda está em desenvolvimento.";
  }

  return "Recebi sua pergunta: \"" + pergunta + "\". Meu cérebro ainda está sendo desenvolvido.";
}