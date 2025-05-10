$(document).ready(function() {
    $('#task-form').on('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        var taskName = $('#task-name').val().trim();

        if (taskName !== '') {
            $('#task-list').append('<li>' + taskName + '</li>');
            $('#task-name').val(''); // Limpa o campo de input
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});