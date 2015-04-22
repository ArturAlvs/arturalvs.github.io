console.log("as");
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


	$(".centered").css({
		'left': ((winW/2) - ($(".centered").width()/2))+'px'
	});
	$(".centered").css({
		'top': ((winH/2) - ($(".centered").height()/2))+'px'
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

var qualCor = function(){

	if (!(bricks.length > 0)) {
		bolada();
	}
}





// Cloud -------------------------------

function Cloud(){

	this.animateTime = Math.floor((Math.random() * 7000) + 1);

	this.cloud = $("<div></div>").addClass("cloud");

	this.esquerda;

	this.steps;
	this.stepsAUX;
	this.subindo = false;
	
}

var whereShouldCloudGo = function(x){


	if (x.subindo) {

		// console.log("negativos")

		if (x.steps < x.stepsAUX) {
			x.steps++;
			return -1;
		
		}else{

			x.subindo = false;
			return -1;
		}

	}else{

		// console.log("positivos")


		if (x.steps > 0) {
			x.steps--;
			// console.log(x.steps)

			return 1;
		
		}else{

			// console.log("oooopa")


			x.subindo = true;
			x.steps = 0;
			return 1;
		}

	}

}

var clouds = [];

var moveCloud = function(){

	
	for (var i = 0; i < clouds.length; i++) {

		var xDoMove = whereShouldCloudGo(clouds[i]);

		if (xDoMove < 0) {
			// console.log(xDoMove);

		};
		
		if (clouds[i].esquerda) {

			clouds[i].cloud.css({
				left: "+="+xDoMove
			});


		}else{

			clouds[i].cloud.css({
				right: "+="+xDoMove
			});

		}
		
	};
	
	
}


function putCloudInPlace() {

	for (var i = 0; i < clouds.length; i++) {

		var dOUe = Math.floor((Math.random() * 100) + 1);

		// console.log(dOUe);
		// console.log(dOUe%2);
		
		
		if (dOUe%2 == 0) {

			clouds[i].cloud.css({
				left: Math.floor((Math.random() * 500) + 61)+"px",
				top: Math.floor((Math.random() * 150) + 50)+"px"
			});	

			clouds[i].esquerda = true;

		}else{

			clouds[i].cloud.css({
				right: Math.floor((Math.random() * 500) + 61)+"px",
				top: Math.floor((Math.random() * 150) + 50)+"px"
			});

			clouds[i].esquerda = false;

		}

		
		$("#contSky").append(clouds[i].cloud);

		
	};


	

	setInterval(function(){

		// console.log("sad")
		moveCloud();

	}, 50);

}

function instantClouds(n){

	for (var i = 0; i < n; i++) {
		clouds[i] = new Cloud();

		clouds[i].steps = Math.floor((Math.random() * 150) + 150);
		clouds[i].stepsAUX = clouds[i].steps;
	};

	putCloudInPlace();

}


instantClouds(10);


// Ground

var ground = $("<div></div>").addClass("ground");

ground.css({
		width : $(window).width()+"px"
	});

$("#groundPlace").append(ground);


// Mountains

function Mountain() {
	
	this.mountainTop = $("<div></div>").addClass("mountain-top")

	this.mountain = $("<div></div>").addClass("mountain").append(this.mountainTop); //Só colocando o top na montanha
	// this.mountain = $("<div></div>").addClass("mountain").append($("<div></div>").addClass("mountain-top")); //Só colocando o top na montanha


}
var mountains = [];

var instantMountains = function(){

	var tamMount = 350;
	var qntPossible = 10;
	var qntMountain = Math.floor((Math.random() * qntPossible) + 1);

	for (var i = 0; i < qntMountain; i++) {

		mountains[i] = new Mountain();

		var mountainLeft = Math.floor((Math.random() * ($(window).width() - tamMount)) + 1);

		mountains[i].mountain.css({
			left: mountainLeft+"px"
		});

		$("#mountainPlace").append(mountains[i].mountain);

	};
	

}

instantMountains();


$(".sun").css({
	left: Math.floor((Math.random() * ($(window).width() - $(".sun").width())) + 1) +"px",
	top: Math.floor((Math.random() * 50) + 1) +"px"
});
