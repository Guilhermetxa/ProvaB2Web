// Array para armazenar os dados
var dados = [];
var continuar = true;
var contador = 0;
var somaIMC = 0;

while (continuar) {
    // Solicita ao usuário para inserir o nome
    var nome = prompt("Digite o nome: ");

    // Contador
    contador++;

    // Solicita ao usuário para inserir a medida da altura
    var altura = prompt("Digite a altura " + nome + ":");

    // Solicita ao usuário para inserir a medida de peso
    var peso = prompt("Digite a medida de peso para " + nome + ":");

    // Pergunta para o usuário se ele quer continuar inserindo nomes
    var parar = prompt("Deseja continuar inserindo nomes? (Digite 's' para continuar e 'n' para parar.)").toLowerCase();

    // Verifica a resposta do usuário em relação se ele quer continuar inserindo nomes
    if (parar !== 's') {
        continuar = false; // Se a resposta não for "sim", define continuar como falso para sair do loop
    }

    // Converte as entradas para números
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    // Calcula o IMC
    var imc = peso / (altura * altura);

    // Soma o IMC ao total para calcular a média posteriormente
    somaIMC += imc;

    // Armazena os dados no array
    dados.push({ nome: nome, altura: altura, peso: peso, imc: imc });
}

// Calcula a média dos IMCs
var mediaIMC = somaIMC / contador;

// Encontrar o usuário com o maior IMC
var maiorIMC = -1;
var usuarioMaiorIMC;

for (var i = 0; i < dados.length; i++) {
    if (dados[i].imc > maiorIMC) {
        maiorIMC = dados[i].imc;
        usuarioMaiorIMC = dados[i];
    }
}

function resultadoimc(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso normal.";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal.";
    } else if (imc >= 25 && imc < 30) {
        return "Excesso de peso.";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade classe I";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade classe II";
    } else {
        return "Obesidade classe III";
    }
}

// Exibe a quantidade de usuários coletados
console.log(`Quantidade de usuários coletados: ${contador}`);

// Exibe os valores no console
console.log("");
console.log("Valores de entrada:");
for (var j = 0; j < dados.length; j++) {
    var classificacao = resultadoimc(imc);
    console.log("Nome: " + dados[j].nome + ", Altura: " + dados[j].altura +", Peso: " + dados[j].peso + ", IMC: " + dados[j].imc + " || " + classificacao);
}

// Exibe o usuário com o maior IMC
console.log("");
console.log("Usuário com o maior IMC:");
var classificacaoMaiorIMC = resultadoimc(usuarioMaiorIMC.imc);
console.log(usuarioMaiorIMC.nome);

// Exibe a média dos IMCs
console.log("");
console.log("Média dos IMCs dos usuários: " + mediaIMC.toFixed(2));