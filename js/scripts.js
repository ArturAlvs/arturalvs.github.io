

var arrumarACasa = function(){
	
	var winW = $(window).width();
	var winH = $(window).height();

	if ($(window).height() >= 500) {
		$(".cont").css({
			'height': ($(window).height())+'px'
		});
	}else{
		$(".cont").css({
			'height': '500px'
		});
	}

	$(".title").css({
		'left': ((winW/2) - ($(".title").width()/2))+'px'
	});
	$(".title").css({
		'top': ((winH/2) - ($(".title").height()/2))+'px'
	});

	$(".txt").css({
		'left': ((winW/2) - ($(".txt").width()/2))+'px'
	});
	$(".txt").css({
		'top': ((winH/2) - ($(".txt").height()/2))+'px'
	});

}

arrumarACasa();

$(window).resize(function() {
	
	arrumarACasa();

	
});




var cursorAnim = function(){

	$("#myCursor").animate({
		opacity: 0
	}, 'fast', 'swing').animate({
		opacity: 1
	}, 'fast', 'swing');
}



$(document).ready(function(){

	setInterval('cursorAnim()', 616);
});


var bricks = [];



function Brick(n, colorReceived){

	this.animateTime = Math.floor((Math.random() * 300) + 1);

	this.brick = $("<span></span>").addClass("glyphicon glyphicon-stop");
	
	this.brick.css({
		"color": colorReceived,
		"position": "absolut",
		top: -2,
		"left": n
	});
}


var animacao = function(){


	for (var i = 0; i < bricks.length; i++) {
		
		bricks[i].brick.animate({
			top: "+="+bricks[i].animateTime,
			opacity: "hide"
		}, 4000);

	};

	setTimeout(function(){

		while(bricks.length){
			bricks.pop();
		}

	}, 5000);


}

var bolada = function(color){

	var dif = Math.floor((Math.random() * 100) + 1);

	for (var i = 0; ; i++) {

		bricks[i] = new Brick(dif, color);

		dif += Math.floor((Math.random() * 100) + 1);

		if (dif >= ($(window).width() - 300)) {
			// console.log("b");
			// console.log(dif);
			break;
		}

	};

	for (var i = 0; i < bricks.length; i++) {
		$("#secondCont").append(bricks[i].brick);
	};

	animacao();

}






// bolada();


var qualCor = function(){

	if (!(bricks.length > 0)) {
		bolada();
	}
}

