 
  
 // Função para carregar a segunda metade do conteúdo após um atraso
 function loadSecondHalf() {
  document.getElementById('second-half').classList.remove('hidden');
}

// Simula um atraso antes de carregar a segunda metade do conteúdo
setTimeout(loadSecondHalf, 1300); // estava 180, 2000 = Atraso de 2 segundos 

