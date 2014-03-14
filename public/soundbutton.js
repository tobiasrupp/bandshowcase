(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 29,
	height: 29,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/bg22.png", id:"bg22"},
		{src:"images/bgbg.jpg", id:"bgbg"},
		{src:"images/coverbg.jpg", id:"coverbg"},
		{src:"images/coverbggross.jpg", id:"coverbggross"},
		{src:"images/coverbggross222.jpg", id:"coverbggross222"},
		{src:"images/coverklein.jpg", id:"coverklein"},
		{src:"images/hand.png", id:"hand"}
	]
};

// stage content:
(lib.soundbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// soundbutton
	this.instance = new lib.soundbutton_1();
	this.instance.setTransform(14.2,14.2,1,1,0,0,0,14.2,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(272));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.5,14.5,28.4,28.5);


// symbols:
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2500,1667);


(lib.bg22 = function() {
	this.initialize(img.bg22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,810,153);


(lib.bgbg = function() {
	this.initialize(img.bgbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,810,810);


(lib.coverbg = function() {
	this.initialize(img.coverbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,810,810);


(lib.coverbggross = function() {
	this.initialize(img.coverbggross);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1620,1620);


(lib.coverbggross222 = function() {
	this.initialize(img.coverbggross222);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1620,1620);


(lib.coverklein = function() {
	this.initialize(img.coverklein);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,816,816);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1855,608);


(lib.soundbutton_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABABHIAAgIQAAg1gmgjQgkgmg1AAIgHAAQgIAAAAgHQAAgIAIAAIAHAAQA8AAAnAqQArAoAAA7IAAAIQAAADgDACQgCADgDAAQgHAAAAgIg");
	this.shape.setTransform(20.5,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("ABABHIAAgIQAAg1gmgjQgkgmg1AAIgHAAQgIAAAAgHQAAgIAIAAIAHAAQA8AAAnAqQArAoAAA7IAAAIQAAADgDACQgCADgDAAQgHAAAAgIg");
	this.shape_1.setTransform(20.5,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},14).wait(3));

	// Ebene 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAvA5QgCgCAAgDIgBgIQAAglgagZQgYgagmAAIgHAAQgIAAAAgHQAAgIAIAAIAHAAQAsAAAdAfQAfAdAAArIAAAIQAAADgCACQgDADgDAAQgDAAgCgDg");
	this.shape_2.setTransform(18.6,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.498)").s().p("AAvA5QgCgCAAgDIgBgIQAAglgagZQgYgagmAAIgHAAQgIAAAAgHQAAgIAIAAIAHAAQAsAAAdAfQAfAdAAArIAAAIQAAADgCACQgDADgDAAQgDAAgCgDg");
	this.shape_3.setTransform(18.6,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},11).to({state:[{t:this.shape_2}]},3).wait(3));

	// Ebene 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAaAiIgBgIQAAgWgPgNQgNgQgWAAIgHAAQgIAAAAgIQAAgHAIAAIAHAAQAaAAAUAUQAUAUAAAaIAAAIQAAACgCACQgCADgEAAQgHAAAAgHg");
	this.shape_4.setTransform(16.7,11.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.498)").s().p("AAaAiIgBgIQAAgWgPgNQgNgQgWAAIgHAAQgIAAAAgIQAAgHAIAAIAHAAQAaAAAUAUQAUAUAAAaIAAAIQAAACgCACQgCADgEAAQgHAAAAgHg");
	this.shape_5.setTransform(16.7,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},8).to({state:[{t:this.shape_4}]},3).wait(6));

	// Ebene 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhABPQgJgGAAgJQAAgJAJgGQAIgGAMAAIAHAAIAAhpIBvgWIAAB+QAAAIgJAGQgIAHgMAAQgMAAgJgHQgIgGAAgIQAAgJAIgHQAIgGANAAIAHAAIgBhOIhCANIAABtQAAAJgJAGQgIAGgMABQgMgBgIgGg");
	this.shape_6.setTransform(7.4,19.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.4,28.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;