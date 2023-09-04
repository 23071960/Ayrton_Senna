// Função para ajustar a altura máxima da lista
function ajustarAlturaLista() {
    const lista = document.querySelector('.lista');
    const alturaDisponivel = window.innerHeight; // Altura disponível do dispositivo
  
    // Definir a altura máxima da lista como um valor proporcional à altura disponível
    const alturaMaximaLista = Math.floor(alturaDisponivel * 0.5); // Por exemplo, 50% da altura disponível
  
    lista.style.maxHeight = alturaMaximaLista + 'px';
  }
  
  // Chame a função para ajustar a altura da lista quando a página for carregada e redimensionada
  window.addEventListener('load', ajustarAlturaLista);
  window.addEventListener('resize', ajustarAlturaLista);