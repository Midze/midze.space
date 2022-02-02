$(document).ready(function() { 
	$('a#modal').click( function(event){
		event.preventDefault(); 
		$('.overlay').fadeIn(400, 
		 	function(){ 
				$('.modal__container') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200); 
		});
	});
	
	$('.modal__close, .overlay').click( function(){ 
		$('.modal__container')
			.animate({opacity: 0, top: '45%'}, 200, 
				function(){
					$(this).css('display', 'none');
					$('.overlay').fadeOut(400);
				}
			);
	});
});