window.onload = function(){
	document.querySelector(".menuMobile").addEventListener("click",function(){
		if(document.querySelector(".menu nav ul").style == 'none'){
			document.querySelector(".menu nav ul").style = 'flex';
		}else{
			document.querySelector(".menu nav ul").style = 'none';
		}
	});
}