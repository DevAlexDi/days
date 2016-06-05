$(document).ready(function(){
	
$(".on-the-click").hover(function(){
		$(this).css({"cursor":"pointer"});
		},function(){
		$(this).css({"cursor":"default"});
	});



var flagForClick = true;
$(".on-the-click").click(function(){
	if(flagForClick){
		$(".menu").animate({"height":"500px"},400);
		flagForClick = false;
	}
	else{
		$(".menu").animate({"height":"0"},400);
		flagForClick = true;
	}
});



$(".content-head h1").animate({"opacity":"1","bottom":"-25px"},700,function(){
	$(".content-head p").animate({"opacity":"1","top":"-25px"},700);
});







$(".hight-button").hover(function() {
$(this).stop().animate({ "backgroundColor": "#88DCCF"}, 300);
},function() {
$(this).stop().animate({ "backgroundColor": "#3dc9b3"}, 300);
});


$("#a-in-text").hover(function() {
$(this).stop().animate({ "color": "#49CCB8"}, 300);
},function() {
$(this).stop().animate({ "color": "#383838"}, 300);
});



});//конец ready