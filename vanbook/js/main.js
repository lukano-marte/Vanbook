$('a.btn').on('click', function() {
	$('.modal').addClass('modal-ativo');
});

$('.modal').on('click', function(modal) {
	if (modal.target == this) {
		$(this).removeClass('modal-ativo');
	}
});


$('svg').addClass('animate');

//Função para determinar o comprimento de cada path.
$('svg path').each(function(){
	var comprimento = $(this).get(0).getTotalLength();
	var comprimentoArredondado = Math.round(comprimento);
	$(this).attr('stroke-dasharray', comprimentoArredondado);
	$(this).attr('stroke-dashoffset', comprimentoArredondado);
});