
$(function  () {
	var newEle=$("<div style='height:80px;width:auto;background:black;'></div>");
	$("#head").before(newEle);
	$("#head").css({
		"position":"fixed",
		"top":0,
		"zIndex":1000
	});
	$(".rowAa").each(function(){
		var rowVal=parseInt($(this).text());
		var that=$(this);
		var cound=1;
		var timer=setInterval(function  () {
			if(cound<rowVal){
				if(rowVal-cound>10000){
					cound+=11111;
					that.html(cound);
				}else if(rowVal-cound>1000){
					cound+=311;
					that.html(cound);
				}else if(rowVal-cound>100){
					cound+=31;
					that.html(cound);
				}else{
					cound+=1;
					that.html(cound);
				}
			}else{
				clearInterval(timer);
			}
		},10);
	})
	$("#pressMore").hover(
		function(){
			$("#pressMore").css("background","#e2dfdf");
		},
		function(){
			$("#pressMore").css("background","#EEE");
		}
	);

	
});



var scrollReady=true;
$(document).scroll(function(){
	if($(document).scrollTop()>60){
		if(scrollReady){
			$("#head").stop().animate({
			height:"60px",
			opacity:0.5
			
//				fontSize:"12px"
			},300);
			$("#headLeft").stop().animate({
				marginTop:"20px"
			},300);
			$("#headRight").stop().animate({
				marginTop:"20px"
			},300);
//				$("#headLeft").css("marginTop","20px");
			scrollReady=false;
		}
			
	}else{
		if(!scrollReady){
			$("#head").animate({
			height:"80px",
			opacity:1,
//			fontSize:"12px"
			},300);
			$("#headLeft").stop().animate({
				marginTop:"26px"
			},300);
			$("#headRight").stop().animate({
				marginTop:"26px"
			},300);
//				$("#headLeft").css("marginTop","26px");
			scrollReady=true;
		}
			
	};	
});










