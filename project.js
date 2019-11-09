$(document).ready(function() {
	$('.divs').hide()
	//$('.gridcontainer').hide();
	//var pass = ['07112019', 'myfriendooo'];

	/*$('#acces').on('click',function(){
		var idinput = $('#password').val();
		//console.log(idinput);
		if (idinput === '07112019'){
			$('.cv1').show();
		}
		else 
		if(idinput === pass[1]){
			$('.cv2').show();
		}
		

	});
*/
	$('#enter').on('click', function(){
		//var pass = $('')
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
 		 $("#deg").toggle(3000);
 		 //animate({left: '250px'});
		}); 
	$("#info").click(function(){
		$('#work').show();
	});

	
	('#imgexp').on('click', function(){
	$('imgexp').attr('src','arrow.jpg');
});
/*
$("imgexp").click(
   function () {
     $(this).attr('src','work.png');  
   },
   function () {
      $(this).attr('src','arrow.jpg');  
   }
);
*/
	
});