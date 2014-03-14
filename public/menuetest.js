(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 380,
	height: 360,
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
(lib.menuetest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 9
	this.instance = new lib.player();
	this.instance.setTransform(147,30,1,1,0,0,0,137,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(272));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200,189,12,42);


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


(lib.pfeilani = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhUiGICpCGIipCHg");
	this.shape.setTransform(8.5,13.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.1,27.1);


(lib.innen = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A1ZDSIAAmjMAqyAAAIAAGjg");
	this.shape.setTransform(137,21);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,274,42);


(lib.pfeil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		/* Bei diesem Bild stoppen
		Die Zeitleiste stoppt/pausiert bei dem Bild, in das Sie diesen Code einfügen.
		Kann auch zum Stoppen/Anhalten von Movieclip-Zeitleisten verwendet werden.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(1));

	// Ebene 1
	this.instance = new lib.pfeilani();
	this.instance.setTransform(8.5,13.6,1,1,0,0,0,8.5,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:14.5},5,cjs.Ease.get(1)).to({x:8.5},4).to({x:14.5},5,cjs.Ease.get(1)).to({x:8.5},4).to({x:14.5},5,cjs.Ease.get(1)).to({x:8.5},4).to({x:14.5},5,cjs.Ease.get(1)).to({x:8.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.1,27.1);


(lib.song = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		/* Bei diesem Bild stoppen
		Die Zeitleiste stoppt/pausiert bei dem Bild, in das Sie diesen Code einfügen.
		Kann auch zum Stoppen/Anhalten von Movieclip-Zeitleisten verwendet werden.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(1));

	// Ebene 2
	this.instance = new lib.pfeil();
	this.instance.setTransform(16.7,20.4,1,1,0,0,0,8.5,13.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(2));

	// Ebene 1
	this.instance_1 = new lib.innen();
	this.instance_1.setTransform(0,21,0.044,1,0,0,0,0,21);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,alpha:1},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12,42);


(lib.player = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_55 = function() {
		/* Bei diesem Bild stoppen
		Die Zeitleiste stoppt/pausiert bei dem Bild, in das Sie diesen Code einfügen.
		Kann auch zum Stoppen/Anhalten von Movieclip-Zeitleisten verwendet werden.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(55).call(this.frame_55).wait(1));

	// Ebene 5
	this.instance = new lib.song();
	this.instance.setTransform(137,221,1,1,0,0,0,137,21);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(27));

	// Ebene 4
	this.instance_1 = new lib.song();
	this.instance_1.setTransform(137,171,1,1,0,0,0,137,21);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).wait(34));

	// Ebene 3
	this.instance_2 = new lib.song();
	this.instance_2.setTransform(137,121,1,1,0,0,0,137,21);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).wait(41));

	// Ebene 2
	this.instance_3 = new lib.song();
	this.instance_3.setTransform(137,71,1,1,0,0,0,137,21);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).wait(49));

	// Ebene 1
	this.instance_4 = new lib.song();
	this.instance_4.setTransform(137,21,1,1,0,0,0,137,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12,42);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;