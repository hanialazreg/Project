$(document).ready(function() {
	$('.divs').hide()
	

	$('#enter').on('click', function(){
		//verify pass word
		if($('#pass').val() === "hania"){
		$('.header').toggle("slow");
		$('.divs').show();
		$('#work').hide();
		}
		else
		alert("sorry you are not an RBK family member :) ");

	});
	
	$('#img1').on('click', function(){

		$('#ul1').append('<li>master degree auditing and information security</li>');
		$('#ul1 li:last').append('<li>bachelor degree information applied in management</li>');
				
		
	});

	$("#ul1").click(function(){
 		 $("#deg").toggle(2000);
 		 //animate({left: '250px'});
		}); 
	$("#info").click(function(){
		$('#click').hide();
		$('#work').show();
	});
	$("#uni").click(function() {
		$('#vol1').attr('src','amal_ass.jfif');
	});
	
	
});