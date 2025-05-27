// Esperar que el DOM cargue
window.addEventListener('DOMContentLoaded', () => {
  console.log('🎉 Blog cargado correctamente');

  // Ejemplo: alerta al hacer clic en un título de artículo
  const articleLinks = document.querySelectorAll('h2 a');
  articleLinks.forEach(link => {
    link.addEventListener('click', () => {
      console.log(`➡️ Navegando a: ${link.textContent}`);
    });
  });
});