// Lista de Sabores Cadastrados
const sabores = [
  {
    id: 1,
    nome: "Gotas de Chocolate",
    icone: "🍫",
    descricao: "Massa amanteigada tradicional com gotas de chocolate meio amargo.",
    preco: "R$ 12,00"
  },
  {
    id: 2,
    nome: "Doce de Leite",
    icone: "🍯",
    descricao: "Recheada com um cremoso doce de leite artesanal e açúcar de confeiteiro.",
    preco: "R$ 14,00"
  },
  {
    id: 3,
    nome: "Nóz e Canela",
    icone: "☕",
    descricao: "Crocante, levemente picante e perfeita para acompanhar o café da tarde.",
    preco: "R$ 10,00"
  },
  {
    id: 4,
    nome: "Morango & Baunilha",
    icone: "🍓",
    descricao: "Bolacha de baunilha com pedaços de morango desidratado e recheio leve.",
    preco: "R$ 15,00"
  }
];

// Renderizar Sabores no HTML
function renderizarSabores() {
  const container = document.getElementById('flavorsContainer');
  container.innerHTML = '';

  sabores.forEach(sabor => {
    const card = document.createElement('div');
    card.className = 'flavor-card';
    
    card.innerHTML = `
      <div>
        <div class="flavor-icon">${sabor.icone}</div>
        <h3 class="flavor-name">${sabor.nome}</h3>
        <p class="flavor-desc">${sabor.descricao}</p>
      </div>
      <div>
        <div class="flavor-price">${sabor.preco}</div>
        <button class="select-btn" onclick="selecionarSabor('${sabor.nome}')">Escolher</button>
      </div>
    `;

    container.appendChild(card);
  });
}

// Ação de Selecionar o Sabor
function selecionarSabor(nomeSabor) {
  const summaryBox = document.getElementById('summaryBox');
  const selectedNameSpan = document.getElementById('selectedFlavorName');

  selectedNameSpan.textContent = nomeSabor;
  summaryBox.style.display = 'block';

  summaryBox.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

// Inicializa o script quando o documento carrega
document.addEventListener('DOMContentLoaded', renderizarSabores);
