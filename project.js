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
		
		$('.divs').show();
		$('.header').toggle();

	});
});