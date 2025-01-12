// Function to extract and display modification date
function displayModificationDate() {
    var metaTags = document.getElementsByTagName('meta');
    var modificationDate;

    // Array com nomes dos meses
    var months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    // Encontrar a meta tag com property="article:modified_time"
    for (var i = 0; i < metaTags.length; i++) {
        if (metaTags[i].getAttribute('property') === 'article:modified_time') {
            modificationDate = metaTags[i].getAttribute('content');
            break;
        }
    }

    // Exibir a data de modificação na página
    if (modificationDate) {
        var formattedDate = new Date(modificationDate);
        var day = formattedDate.getDate();
        var month = months[formattedDate.getMonth()]; // Obter o nome do mês
        var year = formattedDate.getFullYear();
        var dateElement = document.getElementById('data-modificacao');
        dateElement.textContent = 'Última atualização: ' + day + ' de ' + month + ' de ' + year;
    }
}
// Chamar a função quando a página carregar
window.onload = displayModificationDate;