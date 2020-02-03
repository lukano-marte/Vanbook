$('a.btn').on('click', function() {
	$('.modal').addClass('modal-ativo');
});

$('.modal').on('click', function(modal) {
	if (modal.target == this) {
		$(this).removeClass('modal-ativo');
	}
});