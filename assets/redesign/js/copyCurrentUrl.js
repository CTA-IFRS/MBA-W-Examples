$(document).ready(function(){
    $('#copyURL').on('click keydown', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do navegador quando o link é acionado, evitando que a página seja recarregada
        navigator.clipboard.writeText(window.location.href); // Copia a URL atual para área de transferência
    });
});