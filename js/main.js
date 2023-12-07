$(document).ready(function(){
    //mascara campos formulario
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })


    //validacao campos formulario
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 15 /*precisa contar espaco, parenteses e digitos*/
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome completo',
            email: 'Por favor, insira um email válido',
            telefone: 'Por favor, insira um telefone válido',  
            mensagem: 'Por favor, deixe sua mensagem'
        },
    })


})
