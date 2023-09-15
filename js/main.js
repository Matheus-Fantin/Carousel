$(document).ready(function(){
    $('#Carousel-imagens').slick({
        autoplay:true,
    });

    $(document).ready(function(){ $('#nome_id').slick();})
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    })

    $("#meu-campo").val('');

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            },
            veiculoDeInterrese:{
                required: false
            }
        },
        messages: {
            nome:'Por favor insira o seu nome'
        },
        submitHandeler: function(form) {
            console.log(form)
        },
        invalidHandler:function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
    const nomeVeiculo = $(this).parent().find('h3').text();

    $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })
});
