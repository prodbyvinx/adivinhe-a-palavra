const palavra = document.getElementById('palavra');
const entrada = document.getElementById('entrada');
const enviar = document.getElementById('enviar');
const resultado = document.getElementById('resultado');
const atualizar = document.getElementById('atualizar-palavra');
const dica = document.getElementById('dica');

let palavraSecreta = '';
let letrasEncontradas = [];

// Função para gerar uma palavra secreta aleatória
function gerarPalavraSecreta() {
  const palavras = ['cachorro', 'gato', 'papagaio', 'peixe', 'coelho', 'elefante', 'girafa', 'hipopotamo', 'jaguar', 'leao', 'macaco', 'ninja', 'orca', 'panda', 'quokka', 'rinoceronte', 'tigre', 'urso', 'vaca', 'zebra'];
  palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
  letrasEncontradas = []; // Resetar as letras encontradas
}

// Função para verificar se a letra digitada está na palavra secreta
function verificarLetra(letra) {
  if (palavraSecreta.includes(letra)) {
    letrasEncontradas.push(letra);
    return true;
  } else {
    return false;
  }
}

// Função para atualizar a palavra na tela
function atualizarPalavra() {
  const palavraAtual = [];
  for (let i = 0; i < palavraSecreta.length; i++) {
    if (letrasEncontradas.includes(palavraSecreta[i])) {
      palavraAtual.push(palavraSecreta[i]);
    } else {
      palavraAtual.push('_');
    }
  }
  palavra.textContent = palavraAtual.join(' ');

  // Verificar se a palavra está completa
  if (!palavraAtual.includes('_')) {
    resultado.textContent = 'Parabéns! Você ganhou!';
    enviar.disabled = true;
    setTimeout(() => {
      gerarPalavraSecreta();
      atualizarPalavra();
      resultado.textContent = '';
      enviar.disabled = false;
    }, 2000); // Trocar de palavra após 2 segundos
  }
}

// Função para fornecer uma dica
function fornecerDica() {
  let dicaText = '';
  switch (palavraSecreta) {
    case 'cachorro':
      dicaText = 'Um animal de estimação comum';
      break;
    case 'gato':
      dicaText = 'Um animal de estimação comum';
      break;
    case 'papagaio':
      dicaText = 'Um tipo de ave colorida que pode imitar vozes humanas';
      break;
    case 'peixe':
      dicaText = 'Um tipo de animal aquático que pode nadar e respirar debaixo da água';
      break;
    case 'coelho':
      dicaText = 'Um tipo de animal de estimação com pelos longos e macios';
      break;
    case 'elefante':
      dicaText = 'O maior animal terrestre, conhecido por sua tromba e memória excepcional';
      break;
    case 'girafa':
      dicaText = 'O maior animal terrestre com pescoço longo e manchas marrons e amarelas';
      break;
    case 'hipopotamo':
      dicaText = 'Um grande animal aquático com pele rosada e dentes grandes';
      break;
    case 'jaguar':
      dicaText = 'Um grande felino americano com pelagem amarela e manchas escuras';
      break;
    case 'leao':
      dicaText = 'O rei dos animais, um grande felino africano com juba característica';
      break;
    case 'macaco':
      dicaText = 'Um tipo de primata que vive em grupos e é conhecido por sua inteligência';
      break;
    case 'ninja':
      dicaText = 'Um guerreiro japonês treinado em artes marciais e espionagem';
      break;
    case 'orca':
      dicaText = 'Um grande cetáceo predador que vive em grupos e é conhecido por sua inteligência';
      break;
    case 'panda':
      dicaText = 'Um urso asiático que se alimenta de bambu e é conhecido por sua pelagem branca e preta';
      break;
    case 'quokka':
      dicaText = 'Um pequeno marsupial australiano conhecido por sua face sorridente';
      break;
    case 'rinoceronte':
      dicaText = 'Um grande mamífero africano com pele grossa e um chifre característico';
      break;
    case 'tigre':
      dicaText = 'Um grande felino asiático com pelagem laranja e manchas escuras';
      break;
    case 'urso':
      dicaText = 'Um grande mamífero omnívoro que vive em florestas e montanhas';
      break;
    case 'vaca':
      dicaText = 'Um grande mamífero doméstico que produz leite e é comum em fazendas';
      break;
    case 'zebra':
      dicaText = 'Um equino africano com pelagem listrada preta e branca';
      break;
  }
  resultado.textContent = `Dica: ${dicaText}`;
}

// Evento de click no botão enviar
enviar.addEventListener('click', () => {
  const letra = entrada.value.toLowerCase();
  if (verificarLetra(letra)) {
    atualizarPalavra();
  } else {
    resultado.textContent = 'Letra incorreta!';
  }
  entrada.value = '';
});

// Evento de click no botão Novo Jogo
atualizar.addEventListener('click', () => {
  gerarPalavraSecreta();
  atualizarPalavra();
  resultado.textContent = '';
  enviar.disabled = false;
});

// Evento de click no botão Dica
dica.addEventListener('click', () => {
  fornecerDica();
});

// Iniciar o jogo
gerarPalavraSecreta();
atualizarPalavra();