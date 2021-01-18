var canvas = document.getElementById('myCanvas')
var create = document.getElementById('create')
var fill = document.getElementById('fill')
var ctx = canvas.getContext('2d');
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var rects=[];
var area = 0;

function getRandomArbitrary(min,max){
	return Math.floor(Math.random() * (max - min) + min);

}

function createRect(min,max){
	ctx.globalAlpha = 0.7;
	var cr = 'rgb('+
			Math.floor(Math.random()*256)+','+
			Math.floor(Math.random()*256)+','+
			Math.floor(Math.random()*256)+')';
	ctx.fillStyle = cr;
	var x = getRandomArbitrary(0,400);
	var y = getRandomArbitrary(0,400);
	var width = getRandomArbitrary(min,max)
	var height = getRandomArbitrary(1,200)
	
	var rect = {
		x: x,
		y: y,
		w: width,
		h: height
	}

	var ok = true;
	rects.forEach( function(item) {
		if(isCollide(rect,item)){
			ok = false;
		}
		if(rect.y+rect.h> canvasHeight ||
			rect.x + rect.w > canvasWidth){
			ok = false;

		}
	});
	if(ok){
		ctx.fillRect(x,y,width,height);
		rects.push(rect)
		area += rect.h * rect.w;
		console.log(area)
	
	}
	}
		
	//console.log(rects)



function isCollide(a,b){
	return !(
		((a.y + a.h) < (b.y)) ||
		(a.y > (b.y + b.h)) ||
		((a.x + a.w) < b.x) ||
		(a.x > (b.x + b.w)) 
		);
}



create.onclick = function() {
	createRect(1,100)
	
}


fill.onclick = function(){
	
	while(area < 160000){
		if(area < 120000){
	createRect(20,400)
	}
	else if(area >120000 && area < 140000){
		createRect(10,50)

	}
	else if (area >140000 && area < 159000){
		createRect(4,10)

	}
	else{
		createRect(1,2)
	}
	
	}
}


















	

