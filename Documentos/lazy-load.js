 
  
 
  
 

// Função para carregar a segunda metade do conteúdo
function loadSecondHalf() {
  const secondHalf = document.getElementById('second-half');
  if (secondHalf) {
    secondHalf.classList.remove('hidden'); // Exibe a segunda metade do conteúdo
  } else {
    console.warn('Elemento #second-half não encontrado.');
  }
}

// Carrega a segunda metade do conteúdo assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(loadSecondHalf, 913); // Pequeno atraso (opcional, ajuste conforme necessário)
});