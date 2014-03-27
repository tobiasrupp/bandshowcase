(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 810,
	height: 1010,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"modul_a/images2/bg.jpg", id:"bg"},
		{src:"modul_a/images2/bg22.png", id:"bg22"},
		{src:"modul_a/images2/bild2.jpg", id:"bild2"},
		{src:"modul_a/images2/bild3.jpg", id:"bild3"},
		{src:"modul_a/images2/bild5.jpg", id:"bild5"},
		{src:"modul_a/images2/bild6.jpg", id:"bild6"},
		{src:"modul_a/images2/cover01.jpg", id:"cover01"},
		{src:"modul_a/images2/coverbggross.jpg", id:"coverbggross"},
		{src:"modul_a/images2/coverbggross222.jpg", id:"coverbggross222"},
		{src:"modul_a/images2/coverklein.jpg", id:"coverklein"},
		{src:"modul_a/images2/hand.png", id:"hand"},
		{src:"modul_a/images2/playertest.png", id:"playertest"}
	]
};

// stage content:
(lib.modul_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 5
	this.instance = new lib.animation();
	this.instance.setTransform(394.1,314.1,1,1,0,0,0,22,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(272));

	// Ebene 4
	this.instance_1 = new lib.playergesammt();
	this.instance_1.setTransform(-455.9,726.8,1,1,0,0,0,348.9,183);
	this.instance_1.alpha = 0.828;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(272));

	// Ebene 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgEZAoHQieglikiNQg6gxhAhaQgjhCgRgYQgbgng4ACQkAAPiDAGQjnAKiagSQANgXgPgBQgPgCgEAWQgKgMACgOQAAACAMgCIADAAQBagDE+AAQEEABCigUQgyjEAHieQAJjBBdiTQBzi2CVhkQA7gnAZgPQAygdApgNIBXgOQBCgKALgNQAKgNADgPIABgVQADgQAxAKQAxAKApgJQA1gLAVglQAMgWAjgkQAggiAMgcQANgegNg3QgFgTgXhAIiHlkQhQjYgtiNIgzi6QgfhwgehGQghhLAGhKQAIhbBIgbQAegLA3ACQA7ACAYgGQAWgHAegwQAfgvAegIIBFABQAyAAACgVQAQiEAAhDQABhAAFiKQAGiDgBhHQAAg6ACgfQADg1AKgkQATguAHgUQAMgjgLgjQgJgbgVgfQgNgSgbghQgZgdgpAAQgxAHgbgCQgtgCgDgVQgBgNAUgoQgZgQAGgGQAKgKgEgIIgtAJQgcAFgTgHQAFgIAmgKQAdgIgEgYQgDgbg+AEQhFAKgNAAQAPgWA3gdQA1gcAQghQAXgqAGg4QAFhCAEglQALhaB/gnQBUgZB2AAQBtAbA+A0QBKA/AOBmQAGArgIAyQgHAygTAmQglBLgEASQgMA7A5AWIBOAfQAmARAhAhIBKBKQApArAbAlQBHBgA1B0QAvBnAlCAQAeBrAuBOQAvBPBPBMQBEBAA7B3QAiBDA8CIIA3BpQAhBAAPAuQArB/g0BlIguBWQgaA0gIAmQgFAYgKBKQgLBHgDAfIgIBLQgGArAAAUQgBAzgNA+QgJAsgSBDIgpCHQgYBQgLA1QgeCZAuB3QBIC7gxD9QgQBTgnCIQgvCogNAzQgJAlgWBPQgSBGgBAvQgBAyAcAvQArBFAHASQAQAsgaAKQgqAFgZAEIhqAdQhJAUgfgIQgDgBieABQiCAAgKgfQgLgjBLgYQAUgGAngKQAggJAJgIQA4gmAZgTQAtgjARgrQBBidgalSQgGhVgDi6QgDiwgJhfQgDgpgbhRQgYhKAAgyQAAirgPhkIg9k4Qgji5AGiCQAFgdACgXQAFgqgMACQgTADgmgUQgogYgMgGIh3hAQhEgkg6gOQhDgQgqgSQg5gWgqgiQhHg3gagPQg3gfg8AEQAhA9BFBxQA0BkABBaQAACiAGBpQAJCRAXB3QAeCeAyBYQALATAvA9QAkA7gbAgQgiAqg4gBQgOAAhYgSQgxgKglgBQhEgDgEAcQCsAxCCBmQB6BgBkCdQAvBKAaBkQAXBdAABeQAABngPBLIgWBGQgRA4AEAJIB5gFQBKgDAvAEQAEAihnAHIiJACQgZAAgcA4IglBOQg7BZhXBKQibCFjOAlQhPAOhPAAQh1AAh8gdgAHtuBIgWBBQgOAyAJAOQAHAKA2AJQAtAHARgDIAAgCQAEgFABAEQgPgugeg7Qgdg6gQAAQgHAAgEAOgEACCgkvQgeAGgcAcQAyAOAMABQAeACAYgYQgJAIACgKQABgLAHAIQgTgXgaAAIgOABg");
	this.shape.setTransform(-243.4,610.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(272));

	// Ebene 7
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(262,73,1,1,0,0,0,242,48.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(272));

	// Ebene 9
	this.instance_3 = new lib.flaeche();
	this.instance_3.setTransform(403.5,544.1,1,1,0,0,0,405.5,544.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(272));

	// Ebene 2
	this.instance_4 = new lib.lnflq();
	this.instance_4.setTransform(455,303.5,1,1,0,0,0,455,303.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(272));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-399.8,501.4,2295,1091.9);


// symbols:
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2500,1667);


(lib.bg22 = function() {
	this.initialize(img.bg22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,810,153);


(lib.bild2 = function() {
	this.initialize(img.bild2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1365,910);


(lib.bild3 = function() {
	this.initialize(img.bild3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2250,1500);


(lib.bild5 = function() {
	this.initialize(img.bild5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1215,810);


(lib.bild6 = function() {
	this.initialize(img.bild6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,1000);


(lib.cover01 = function() {
	this.initialize(img.cover01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1000);


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


(lib.playertest = function() {
	this.initialize(img.playertest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,734);


(lib.uuu = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhiDkQgigLgSgdQgTgcgCgqIAAh0IAAjLIhhAAIAAgiICNAAIAAANIAAFKQABA6AqAWQARAKAbAAQA5ABAzgkQAwgiAXgcQAFgHABgIIAAkZIgBgGIhgAAIAAgjICMAAIAAGrIBRAAIAAAjIh8AAIAAhWIgEACQg5BDhSAVQgYAHgYAAQgbAAgZgJg");
	this.shape.setTransform(27,23.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53.9,47.5);


(lib.quadrat = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjbDcIAAm3IG3AAIAAG3g");
	this.shape.setTransform(22,22);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44,44);


(lib.playerfarbe = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.playertest();
	this.instance.setTransform(0,0,0.498,0.498);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,697.9,365.9);


(lib.oh = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhpDUQhEgpgYhUQgHgVgDgUIgDgoQABg3ANgrQAPgvAggkQAxg3BKgIQArgGAnALQBiAcAlBkQAnBpgnBpQgoBthqAWQgaAFgWAAQg3AAgvgdgAgljHQhUARgeBdQgbBRAWBUQARA+AoAhQAnAhA7AAQBiABAshZQAZgygBhGQABgtgQgtQgXhAg0gcQghgRgnAAQgSAAgWAEg");
	this.shape.setTransform(21.1,24.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42.3,48.4);


(lib.Nspire3DCube2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E425E").s().p("AAAAxQgDgxgBgxIAJAAIAABig");
	this.shape.setTransform(-274.5,-47);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3B405C").s().p("AAAAsQgDgsgBgrIAIAAIAABYg");
	this.shape_1.setTransform(-275.5,-86.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#797C8F").s().p("AAAD5IAAhkIAKAAIAABkgAgJiKIAAhuIAJAAIAABug");
	this.shape_2.setTransform(-275,-77);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2B4BD").s().p("AAAD0IAAhaQAQAcgHA0IgBAKgAgKiZIAAhaQAQAbgGA1IAAAKg");
	this.shape_3.setTransform(-274.9,-86.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDEDED").s().p("AwnMGIAAhkIAAhkIAAgKQAHg0gSgcIAAhtIAAhaIAAhuIABgKQAHg1gSgbIAAhGQBugnBeg0IGCjSQC+hnDFhlIGAjGQBlg0Bhg1IFYDzQCIBgCBBlQgRARgXAMImDDOQi+Bmi/BmIgNAHQjJBfi5BrIhWAwQi+BljBBmIhXAuQi+BmjCBlg");
	this.shape_4.setTransform(-167.5,-119.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#717171").s().p("AljUMIoosLQh7ith7ipIgKgNQh/ilh2iwQDChlC+hmIBXguQDBhmC+hlIBWgwQC7hrDJhfIANgHQC9hoC+hmIGDjOQAXgMARgRQBYDPBTDUICpGrQBSDQBPDXQAsBzAuBxIABAJQAxBmAeB4QhGAjhEAmQi9BpjCBlQh8BHiABCQhjA0hdA1Il9DZQi3BqjHBfg");
	this.shape_5.setTransform(-133,-21.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ECECED").s().p("AvEKLIgmhxQhEjohPjYQC/hoC7htQC6hrDAhqIF6jOQC/hqC2hwIALgJQDZBPDNBZIFmCZQgCAVgRAJIhiA1Qi4Bui8BrIl2DUQi+BrizBuIrlG+QgtAbg7APQgQg7gUg7g");
	this.shape_6.setTransform(-169,-119);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#656565").s().p("AtzIOQh4iwh6itIjzlaQA7gPAtgbILlm+QC1huC+hrIF0jWQC8hrC4huIBig1QARgJACgVQAfArAVA4QBMDZBTDVQBUDUBRDYIDDIIQATAuAVAsIABAKQAaBEAWBJQhSAlhHAwIx5LqQiwB1i3Bwg");
	this.shape_7.setTransform(-125,-25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#909094").s().p("AARAgQgagcgPgmQAeAXARAkIACAJg");
	this.shape_8.setTransform(-165.5,78.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999A9D").s().p("ABJBrIiXjXIAKAAQBQBhBBBvIACAJg");
	this.shape_9.setTransform(-176,64);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A6A7A8").s().p("AAjA8IgGgCQgUgngXgcIgFgBQgJgYgPgOIAHgDQACgCABgFQARALALATIABAJQAaAfAUAnIADAJg");
	this.shape_10.setTransform(-187.5,47);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9FA0A2").s().p("AAAASQgEgSgKgJIAIgCIADgIQAPADACAQIABAKQgBAFgCACIgHADg");
	this.shape_11.setTransform(-192.5,40);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#808185").s().p("AARAjQAAgFgCgDQgbgWgJgnQAjAXAIAug");
	this.shape_12.setTransform(-160.7,85.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A7A7A9").s().p("ABWCHQh2iwh6irIgJgNQh+inhti7QB9CgB6CiQACADAAAFIDsFeQB2CyB6CsQAoA4AhA+IgDAIIgIACg");
	this.shape_13.setTransform(-233,-19);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B2B3B5").s().p("AANAbQgUgZgMgeQAcAPAKAhIABAJQgGAAgBgCg");
	this.shape_14.setTransform(-275,-80);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ECECEC").s().p("AsILgQh6iih9igIgBgJQgKgjgegPIgGgDIiFjFQC8hrC2hvIFujiQC0hwC+htIC6hpQBrg5BYhHIHhBuQDaAzDdAxQggAqgxAZQg2AcgvAfI2WOhQiyBzi8BrQAAgFgCgDg");
	this.shape_15.setTransform(-170.5,-118.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#575758").s().p("AjsWOQhghyhRiAIAFAAQgIgwglgXIgCgJQgQgmgggXIgCgJQhBhxhThhIgCgJQgVgngbggIgCgKQgKgTgSgLIgBgLQgCgRgRgDQghg+gog4Qh6ish2iyIjtleQC7hrCyhzIWWujQAwgfA1gcQAxgZAhgqQAxBkAmBuQBNDcBPDUIFCNaIA3CJQAbA7gvAgQiuB5imCBIs/J1IlRD7QAAgGgDgCg");
	this.shape_16.setTransform(-117.5,-29);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#929397").s().p("AARAbIgpgtIAIgDIACgHQAUAXAQAaIADAIg");
	this.shape_17.setTransform(-131.5,108);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7F8293").s().p("AgwAEIAAgIIBhAEIAAAEg");
	this.shape_18.setTransform(-149,-188.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7A7D8F").s().p("AgmgFIBNAFIABADIgKABQgOACgMAAQgaAAgQgLg");
	this.shape_19.setTransform(-97,-183.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B5B5B5").s().p("AK1OEIpNpNQglgngegqIjxlbIl0oJQh6irhvi4QCxB1CmCBQCLBrCUBhQBsC7B1CvQB4CxB0CxIDlFlQB1C1B4CuQAiAwAbA0IgCAHIgIADQg4gsgygzg");
	this.shape_20.setTransform(-214,6.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ECECEC").s().p("AtxHwQimiBixh1IgIgDQgLgIgBgUQC4hvCxhzILMnTIFgjhIBjAAIGvApQAWARAwgHIAKAAIHCAnQgnA0g5AlQiwByisB7IgNAJQioB+iuB6IlcDxIq0HlQiUhhiLhrg");
	this.shape_21.setTransform(-172.5,-118);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#494A4A").s().p("AjGWpIgDgJQgQgcgWgXQgbg0gigwQh4iuh1i1IjlllQh0izh4ixQh3ivhsi5IK2nlIFcjzQCuh6Cmh9IANgKQCsh6CwhzQA5glAngzQAbAlATAzIFnPUQAnBsArBvQAoBqAiByQAJAeALAYIARAgQATAgADA1InXGaQigCHiVCRIgLAJQijCEicCLQh1BohsBuQglAlgpAAIgPgBg");
	this.shape_22.setTransform(-109,-33.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B7B7B8").s().p("AKvMsQish7ixh4Qiuh2irh6IgKgJIqvvEIjwleIAVAAQALAdAdAJQDbBODLBZQC+BTDFBIQBoC+B1CwIA9BcQB2CwByC1IDgFrQByC2B2CxQAdAqATAxg");
	this.shape_23.setTransform(-208.5,10.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ECECED").s().p("AsmH4QjLhZjbhOQgdgJgLgdIAAgKQCzhzCth5IK2nmQCfhvCjhoIJNAAQEKgBEIgFQAGABAEgGIApAAIkKDZQiiCDinCBImlE7QioB/ifCHIgMAKQifCGivB4QjFhIi+hTg");
	this.shape_24.setTransform(-174,-119);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B2B4BD").s().p("AozAFIAAgJIRnAAQgEAEgGAAQkIAEkKABg");
	this.shape_25.setTransform(-107.5,-184.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3B3C3C").s().p("AisVnQh2ixhyi2IjglrQhyi3h2iwIg9hcQh1iwhqi8QCvh4CfiGIAMgKQChiHCoh/IGlk9QCliBCiiDIEKjZQAbA6AXA/IAwB/QBPDSBNDdQBLDYBODZQBPDZBRDTQAVA3ALBAQhGBBhBBGQiOCYiSCVIkkEqQiSCViPCXIhsBwQhJBMhTBDQgTgxgdgqg");
	this.shape_26.setTransform(-101.5,-37.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7D8092").s().p("AlhAUIBaAAIgBAEIhZAGgAEJgdIBaAAIgBAGIhZAEg");
	this.shape_27.setTransform(-100.5,-186);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#323232").s().p("AhOXHQAEgFgBgDQgkhVgxhMQhyi0hvi7IjYlwQhvi8hwi1Qhzi2hti3IE9kQIOws4QBahRBehNIAPgMQAlgYgKgUQASgaAIAiQANAxAUAsIDuKUQBPDbBQDTQBSDYBIDdQhtB9hpCBIsdPOQgTAWgMAYQgYAxgoAAQgKAAgLgDg");
	this.shape_28.setTransform(-94,-42.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B8B8B8").s().p("ALQMPQjHhhjFhlQjChjjOhWIjPkeQh6ioh5iuQh5iuh8iqIgKgNQiAilh1izQC5AkC4ApQDsA1D+AwIDbAqQBuC5ByC3QBxC1BuC5IDZFwQBuC8BzC0QAxBMAkBVQABADgFAFQiYhJiWhKg");
	this.shape_29.setTransform(-204.3,12);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#707387").s().p("AlhAUIBaAAIgBAEIhZAFgAEJgdIBaAAIgBAGIhZAEg");
	this.shape_30.setTransform(-138.5,-183);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#ECECEC").s().p("AmqJkQj+gwjsg1Qi4gpi5gkIAAgJQCuh6Coh+INMp9QBDgyBLgsIBagFIAAgEIEigUIBagGIAAgEICWgLIBagEIAAgGIEigUIBagEIAAgGICWgJQAKAUglAYIgQAMQhdBNhaBRIuyM1Ik8EQg");
	this.shape_31.setTransform(-178.4,-124.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D8D8D8").s().p("AgngFIBPAAIAAAIIgKABQgOACgMAAQgaAAgRgLg");
	this.shape_32.setTransform(-185,-66.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#323232").s().p("AgJXCIAJgBQADgmgWgVIgHgLQgUg0gZgqQhxi4hvi8Qhsi4hpi+Qhqi9hsi4IjYl2IAAgKIEskiQCWiRCPiXQCQiYCeiKIBLhIQCTiTCYiQQAjghguACQAfgbALAnQAKAkAMAYQAcA3AXA9IEILcQBNDaBQDVIAHARQArBnAiB1IoEL+Qh5Cth3CxQg8BZgwBiQgaAxgoAAQgKAAgJgCg");
	this.shape_33.setTransform(-87,-47.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D1D1D1").s().p("Ag1gFIBrAFIAAADIgJABQgSACgQAAQgmAAgagLg");
	this.shape_34.setTransform(-203.5,-67.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D7D7D7").s().p("AFdASIBQAFIAAAFIgKABQgNACgMAAQgcAAgRgNgAC+AIIBPAFIABAFIgLABQgNACgMAAQgcAAgQgNgAh3gKIBQAFIAAAFIgKAAQgNABgMAAQgcAAgRgLgAmsgeIBPAFIABAFIgKABQgOACgMAAQgcAAgQgNg");
	this.shape_35.setTransform(-256,-70.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CBCBCB").s().p("AgmgFIBNAFIAAADIgKABQgNACgMAAQgaAAgQgLg");
	this.shape_36.setTransform(-252,-70.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B7B7B7").s().p("AOaMvQhcgkhfgeIt5khQhoichsiWQh8irh+inIj/lTQh+inh1iyIBuAAQAXARAvgHIAKAAIAoAAQAXARAvgHIAKgBIBuAAQAXASAvgHIAKgBIAoAAQAXASAvgHIAKgBIBuAAQAXASAvgHIAKgBIBQAAQAXASAvgHIAKgBIAoAAQAmASA+gHIAIAAIBaAAQAXARAvgHIAKAAIDZF3QBsC4BqC+QBpC7BsC5QBuC8ByC4QAZApAUA0IAHALQAYAWgEAmIgKAAQhigWhUggg");
	this.shape_37.setTransform(-198.5,13);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CCCCCC").s().p("AgngFIBOAFIAAADIgJABQgOACgMAAQgaAAgRgLg");
	this.shape_38.setTransform(-283,-72.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#ECECEC").s().p("AhNJ7IhaAAIAAgFIhugFIgoAAIAAgFIhQgFIhQAAIAAgFIhQgFIhuAAIAAgFIhQgFIgoAAIAAgFIhQgFIhuAAIAAgFIhQgFIgoAAIAAgFIhQgFIhuAAIAAgUQCvh5CgiGIFCkNQChiECoiAICAhkQBAg0A+g0IEDgkIKJhiIGQg4QAvgCgjAhQiYCQiTCTIhNBIQieCKiQCWQiQCXiVCRIktEig");
	this.shape_39.setTransform(-181.2,-130.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#323232").s().p("ABQW0IAJAAQgFgogTghIqkzQQhqi+hvi3IAAgKQCRiWCGihQCHigCKibIEYk2QCCiMB0iaIAEgFIANATQAMARAIAaQAMAmAPArICNF8ICvHvQBPDeBUDPQAXA2ANA+QgMA6gYAsQhsC9hnC+IjTGAQhnC8hkDEQgSAkgOAlQgOAqgaAAQgIAAgIgEg");
	this.shape_40.setTransform(-81,-52);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C9C9C9").s().p("Ag2gDIBtAAIgBADIhsAEg");
	this.shape_41.setTransform(-206.5,-72.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DADADA").s().p("AgrAFIAAgIIBYAAIAAAIg");
	this.shape_42.setTransform(-168.5,-74.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C8C8C8").s().p("AprATIBvAAIgBAGIhuAEgAAygJIB3AAIAAAGIh3ADgAH0gcIB3AAIAAAEIh3AGg");
	this.shape_43.setTransform(-240,-71);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D8D8D8").s().p("Ag1gEIBrAAIAAAEIhrAEg");
	this.shape_44.setTransform(-257.5,-70.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B4B4B4").s().p("ASmNHI13kOIgGgCQh7itiAimIiCitIhiiJQh5iviAimIgKgLQiFiihxi3IBkAAIBugEIABgGIBuAAIBtgEIAAgGIA9AAIBtgEIAAgGICrAAIB3gEIAAgGIBuAAIBugFIABgEIBsAAIB3gGIAAgEIAzAAIBaAAQBvC2BqDBIKmTNQATAiAFAng");
	this.shape_45.setTransform(-192,10);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CACACA").s().p("Ag1gEIBrAAIAAAEIhrAEg");
	this.shape_46.setTransform(-274.5,-69.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#ECECEC").s().p("Az/KJIAAgKQCdiKCjiEIAKgKQCYiPCbiMQCMh6CUh2IAKgIQBxheBmhnQD/gmDsg0IHwhsQDMgsDagmQh0CaiCCNIkaE1QiKCaiHCgQiGChiRCWIhaAAIAAAKIgzAAIh1AAIAAAKIhuAAIhvAAIAAAJIhuAAIh3AAIAAAKIirAAIhtAAIAAAKIg9AAIhtAAIAAAKIhuAAIhvAAIAAAKg");
	this.shape_47.setTransform(-184,-133);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#5B5E70").s().p("AgngFIBOAFIAAADIgKABQgNACgMAAQgaAAgRgLg");
	this.shape_48.setTransform(-208,75.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#55596C").s().p("AJhArIBaAFIAAAFIgKABQgPACgMAAQghAAgUgNgAo5gtIBaAFIAAAFIgKABQgPACgMAAQghAAgUgNgAq6g3IBZAFIABAFIgKABQgQACgMAAQghAAgTgNg");
	this.shape_49.setTransform(-130,81.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D0D0D1").s().p("AgiAAIALgHIAJgBQAJAPAegHIAJAAIAAAFIhEAEg");
	this.shape_50.setTransform(-309.5,-63);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B0B0B0").s().p("AThNXIAAgGIhagEIobgrIonglIAAgGIhYgEIgnAAIgBgFIhZgGIgpAAIAAgEIhQgGIgJgKIr2v0Qh+inh1izIBGgEIAAgGIIJhAIBYgPQBzgaCSgNIHzg1QBBgIAzgTIA/gCQAiAEARgNQBeDJBnC+QBoDABlDDIDHGAQBmDFBnC+QAsBOAoBRg");
	this.shape_51.setTransform(-185,1.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#ECECEC").s().p("AzXKhIAAgKQCViSCciLIAKgJQCaiOCUiUIDbjaQBghfBjhbQDwg1Dlg9QDshADxg7IDpg4QCGggB9gjIAJAAQgXBNg5A1IgIALQgzBVg6BMQh/Coh8CrIh9CsQh8CsiECjIAAAKQgRAOgigFIg/ACQgzAUhBAHInzA1QiSANhzAbIhYAPIoJBAIgJABIgQACQgTAAgGgNg");
	this.shape_52.setTransform(-187,-131.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#323232").s().p("ABbUBQhli+hmjFIjHmCQhljDhojAQhni8hejJIAAgKQCEijB8itIB9itQB8irB/ioQA6hMAxhVIAIgLQA5g2AXhMIgJAAIAAgKQA0gHAFAuQACALAGARQAUA0APA9QAIAfANAYQAQAbAHAlIADAMQAvBoApBxIAXA+QBLDdBQDTIChGsQAQAvAUApQhODZhVDOIhcDXQhYDMhRDYQg2CQg+CKQgohQgshPg");
	this.shape_53.setTransform(-74.5,-57);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7E808A").s().p("AgxAEIAAgIIBiAAIAAAIg");
	this.shape_54.setTransform(-172,81.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#5B5E70").s().p("Ag1gFIBrAAIAAAIIgJABQgSACgQAAQgmAAgagLg");
	this.shape_55.setTransform(-203.5,82.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#56596C").s().p("AgwAFIAAgIIBhAAIAAAIg");
	this.shape_56.setTransform(-122,80.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#81838C").s().p("Aj4AKIAAgKIBkAAIAAAKgACVAAIAAgIIBkAAIAAAIg");
	this.shape_57.setTransform(-112,80);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#53576A").s().p("AgxAEIAAgIIBjAAIAAAIg");
	this.shape_58.setTransform(-162,81.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#787A85").s().p("Ag6gDIB1AAIAAADIh1AFg");
	this.shape_59.setTransform(-50,78.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#585B6D").s().p("AgxAFIAAgIIBiAAIAAAIg");
	this.shape_60.setTransform(-82,79.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2B304C").s().p("AqOAJIBkAAIAAAGIhkAEgAjzAAIBkAAIgBAFIhjAEgACagIIBkAAIAAAEIhkAEgAIqgSIBlAAIgBAEIhkAGg");
	this.shape_61.setTransform(-132.5,81);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#ABABAB").s().p("AheNqIhkAAIhtAAQgPgKgLgNIgJgNQh/inh7irQh8ish/inIkAlNQh/ioh6itIALgIIAJgCQA2ANBEgSQB6ggB+gZIPSjIQDigwDrgoQBnC+BhDHQBgDHBiDDIHROdIh3AAIAAAKIhuAAIhlAAIhkAAIhkAAIAAAKIhkAAIhkAAIhjAAIhkAAIAAAKIhkAAIhkAAIhlAAIhkAAIAAAJg");
	this.shape_62.setTransform(-178.5,-5.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#ECECEC").s().p("Ay7LMIAAgKINhuaQAggdAXglIXQm4QAeAOggAtQg/BWgzBmIguBYQhsC+htC6IjdFvIAAAKQjqApjiAwIvSDHQh+Aah6AgQgmALgiAAQgaAAgYgHg");
	this.shape_63.setTransform(-189.8,-129.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#323232").s().p("AjMHeQhijDhgjHQhhjFhni+IAAgKIDclyQBui6Bri+IAuhYQA0hmA+hWQAegtgdgNIAAgLQAnABAKAeQBIDfBRDSICmGrQBTDVBNDZIAhBTQAKAWADAXQADAbAXADQgEBqgeBTQgmBtgaCCIgFAXQgaCBghBwIgaBZQhDDlg+DuIgYBSg");
	this.shape_64.setTransform(-70,-62.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#A4A4A4").s().p("Al1OaIn7qjQh8iph/ilIgKgNQiGifhvi5QDwg3DmhAIXQmRQBdDKBfDHII+SsQAfBAAVBGQABACgFAGIhaAEIiWASQhIAAgxAOQg5APhHAIIjIARIiMATIlyAqQj6AkkXARg");
	this.shape_65.setTransform(-171.3,-7.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#ECECEC").s().p("AyVLpQCIifCEijIIRqIQADgDAAgFQDYhPDdhJQDdhJDchLIG5iTQBrgjBmgmQAdgEgPAfQgZA0gWA8IijGmQhUDUhaDNIAAAKI3QGQQjmBBjwA3g");
	this.shape_66.setTransform(-192.5,-127.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#323232").s().p("AFEVZQAGgFgBgDQgWhFgfhAIo8yuQhfjFhdjKIAAgKQBbjMBUjWICjmnQAWg7AZg0QAPgggeAEIAAgKQA9APAIBKQACAQAGARIDyKCQBSDaBTDSQA3CKA7CAQgFCRgTCHIggEFQggEKgbEIQgGA/gMAwQgHAcAFAeQAGApgdAAIgCgBg");
	this.shape_67.setTransform(-65.5,-67);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000316").s().p("AAABFQgFhFAAhFQAQA1gHBMIgBAKg");
	this.shape_68.setTransform(-26.4,99);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0C0C0C").s().p("AgFAoIAAhOQAQAWgHAtIgBALg");
	this.shape_69.setTransform(-21.4,28);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#191919").s().p("AgDAnIAAhNIAIAAIAABNg");
	this.shape_70.setTransform(-21.5,36);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#252525").s().p("AAAAnQgDgnAAgnIAIAAIAABOg");
	this.shape_71.setTransform(-21.5,44);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#25272F").s().p("AAAAnQgDgngBgmIAJAAIAABOg");
	this.shape_72.setTransform(-22.5,12);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#191C2F").s().p("AAADIIAAhQIAKAAIAABQgAgDh3QgFgogBgoIAJAAIAABQg");
	this.shape_73.setTransform(-23,-12);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0C112D").s().p("AAADIIAAhRQAQAXgHAwIgBAKgAgKh3IAAhPQAQAWgGAvIAAAKg");
	this.shape_74.setTransform(-22.9,-20);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#21232F").s().p("AAAAxQgFgxAAgxQAQAhgHA3IgBALg");
	this.shape_75.setTransform(-24.4,-54);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#323232").s().p("ADOOBQgwhrgwhkQhhjIhajOIi0mTQgvhog0hlQgZgvgIhEIAAgxQA6jtAwj9QANhEAKhIQAPhhAbhTQAfArAVA4QAnBtAsBuIGUQEIAcBRQAAAyAGAyIAEABIAABaIAABPQABAoAFAoIAEAAIAACgIAABRIAABQQABAnAEAoIAGABIAABQIAABQIAABPQAAAoAEAoIAGAAIAABkQhejJhajJg");
	this.shape_76.setTransform(-60,-72);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#9C9C9C").s().p("AlmQcQgegegZghIkClhIn8qgQiAimh5iuIAJAAQB9gaBsgmQDchODihJIN4kgQDehHDfhDQAYgHANgMIATgUQAIBDAZAvQA0BlAvBoIC0GVQBcDPBhDFQAwBlAwBqQBaDKBeDJIgDAIQgPATgrgHIAAAKQjjAmjWAqIzLEEQgWAFgPAAQgPAAgHgFg");
	this.shape_77.setTransform(-164,-10.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#ECECED").s().p("AxfMAQB/ioB1izIB2iyQB3izB7ioIBChWIGrinINVk8QBQgdBLgiIBGgeQAQgGAagCIAMgCQAPgFgGAVQgbBUgOBgQgLBJgNBEQgvD8g6DrIAAAyIgUAUQgNAMgYAIQjfBCjdBIIt5EfQjhBJjdBOQhsAnh8AZg");
	this.shape_78.setTransform(-193.9,-125.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#7B7B7B").s().p("AAAAsQgFgsAAgrQAQAbgHAzIgBAKg");
	this.shape_79.setTransform(-87.4,-142.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#A7A7A7").s().p("AAIDqQgFgtAAgtQASAcgHA0IgBAKgAAAAsQgFgsAAgsQAQAcgHAzIgBAJgAgKiQQgFgtAAgsQAQAbgFA1IgBAKg");
	this.shape_80.setTransform(-89.4,-175.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#939393").s().p("AppMqIgIgMQh0iziIifIgIgLQh0i0iIifIgIgLQh0iyiIifQgigpgPg7IAKAAQAwAIA+gbQDNhcDdhPIDXhNQDahPDUhSIGqilQDUhSDZhQIBcgkQBdDKBZDQIFfM1ICzGbQARAlAVAdQASAjgmAIQhNAPhJAXIgKABQjaBLjwA8IgYAHQjvA9jdBHIjsBKQjaBDjyA1QhximiAiZg");
	this.shape_81.setTransform(-156.2,-12);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#323232").s().p("AFlSfIizmbIlds1QhZjQhejKIAAiBIABgKQAHg1gSgbIAAgzIABgKQAHg0gSgcIAAhkIABgJQAHg1gSgcIAAhjIABgKQAHg1gRgbIAAgzIFTNJQBSDTBYDOQAsBpAZB1IAzD6QAtDjA1DTQAZCmAjCbIABAJQgVgdgRglg");
	this.shape_82.setTransform(-51.5,-79);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EDEDED").s().p("AwnMUIAAgKQBwi2BqjBIBpjBQBfiuBbivQDbhNDMhYIGeizILmkzIAAAyQAAAtAEAtIAFAAIAABkQAAAtAGAtIAEAAIAABkQAAAtAGAtIAEAAIAAAyQAAAtAGAtIAEAAIAACCIhbAiQjZBQjVBSImrClQjSBSjbBPIjWBNQjdBPjNBbQgvAWgoAAQgMAAgLgDg");
	this.shape_83.setTransform(-193.5,-124.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3F4045").s().p("AAJAcQgJgegOgaQAcgEgEAgIAEAAIAAAeg");
	this.shape_84.setTransform(-16.5,6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#34353A").s().p("AAiBYQgihbgnhVIAUAAQAgBRAZBXIACAKg");
	this.shape_85.setTransform(-23,-10);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#323236").s().p("AAAAZIAAgJQgMgQgGgYIASAAQAAAbARAOIACAIg");
	this.shape_86.setTransform(-27,-21.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#37383A").s().p("AAAAYIgBgGQgQgOgBgbIASAAQABAbAQAOIACAGg");
	this.shape_87.setTransform(-29,-26.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#272930").s().p("AgDAdIgDgIQgHgMAAgRIAAgUQARAUAJAcIACAJg");
	this.shape_88.setTransform(-83.5,-162);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#4B4B4B").s().p("AAJAcIgXg5IASAAQABAUAHAKIADAJIAAAUg");
	this.shape_89.setTransform(-86.5,-166);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#34353B").s().p("AAAAiIgBgJQgMgZgGgiQAZAYAMAjIABAJg");
	this.shape_90.setTransform(-88,-172.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#363738").s().p("AD/KKQg1h2g0h5IlXs9IgCgKQgrhrgjhyIAUAAQBTDTBZDRICuGfIBUDVQAvB+AzB9g");
	this.shape_91.setTransform(-56.5,-94);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#898989").s().p("Aq3LxQh/iqiEijIgIgLQh1izh/imQiCilh2iyIAKAAQBegQBGglQA0gbA1gXQDMhZDQhWQDRhXDMhXQDRhaDIhZIJgkFQAdgLASgRIALgJIFZM/QA0B5A1B2QABAdAQAOIADAGQAGAYAMASIABAJQAoBTAjBdIAGACQAAATAHAMIACAIQAOAbALAgIAFACIADAIQA8CQA6CTIgKACQiOA0iVAuIAAALQhzAmhxAsItcFBQjTBQjbBNg");
	this.shape_92.setTransform(-148.5,-15);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EDEDED").s().p("Aw8MLQBajNBQjXQBRjWBWjNQAEgJgBgKQDGhhDQhbINimBQChhHCchMQAyCCAsCLQABABAEAAQAGAjAMAaIACAJIAZA7IAGACQAAATAHAMIADAIQAjByArBrIACAKIgLAJQgSARgdALIpgEDQjKBZjRBaQjKBXjRBXQjQBWjMBZQg1AXg0AbQhGAlheAQg");
	this.shape_93.setTransform(-184.5,-123);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#7D7D7D").s().p("AldT+Ijtk6Qh/inh7itIj1lYQh7ish9inIglgsQg1g4gUhbIAKAAQgCAuArgXQCQhOCUhEQDNheDEhfIGOjCIGMjDQDGhgDLhdQB3g3Bzg5QAMgGgGgWICvGiIFLNMQAqBsAzBiIACAKQA1CDAtCLIgJACQjFBgjLBcIoJDuImXC7ImRC5QgaANgOAAQgGAAgEgDg");
	this.shape_94.setTransform(-141,-18.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#EDEDED").s().p("Aw9MBIAAgeQAgh2AWh7QAvj9A4jtIAHgaIAGgLQDBhmDHhfQDIhgDFhkQDBhiDKhhIGAi2IEFFKQBTBrBWBnQAHAWgNAGQhyA5h4A3QjKBdjGBeImODDImMDCQjEBfjNBeQiUBEiQBOQgOAIgKAAQgSAAABgfg");
	this.shape_95.setTransform(-175.4,-121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276,-199,284,311);


(lib.khfk = function() {
	this.initialize();

	// Ebene 2
	this.text = new cjs.Text("Z", "96px 'Trajan Pro'", "#FFFFFF");
	this.text.lineHeight = 98;
	this.text.lineWidth = 100;
	this.text.setTransform(46.5,39.2,2.058,2.058);

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ay4S5MAAAglxMAlxAAAMAAAAlxg");
	this.shape.setTransform(121,121);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,260.5,245);


(lib.k = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArjFoQgDgCgBgUQgEhSAZhbIAEgMIgEgCIgGAJQgzA1glAgQgyAtguAfQgUANgLAGQgSAJgRACQgHABgCgDQgCgCABgGIALhFQAciAAuiJIADgJIgIAGQiQCtiTB6QgMAKgUAMIghAVQgGAEgDgDQgCgCAAgGIACgYQACgOACgJIBml5QABgFAAgEQhiCLhZBkQhsB5h0BVIgEgBIAIgyQAAgCAFgEQBAgxBDhFQAxgyBFhRQBZhoBSh4QAJgNACgMIAhiXQANADAOAHIAZAOQAaAQADAIQADAIgKAcIgUA4IgUA3QgIAXgLAwIhOEYIgHAfIAGgEQCbh+B/imQAGgHAEgKIAFgTIAKgqIADgJQApAMAWAaQADADgDAJIhHEBIgbBqQAAACACADIAbgVQAQgMAKgJQA6g2BbhZQAKgKAIgPQAegzAoglQACgDAEgBQAEgCADABQA9AMAlAWQA2AeAKAxQAIAjgSAoIgQAgIgSAfIAEgCQArgiAugvQAigjAvg2QADgDAFgLIAag6QADgHADgCQAEgCAIACQBTATBdAkIALAEIBikqIAQAGQAJAEAFADQAQALAXAUQACACABAFQACAFgCADQgVA7gOAhIgrBhQgbA7gNAkQgGANgEAUIgHAiIgXB6IAAAGQBPg7BMhPQAegfApgtIBGhMIAgAMIhREdIALgEQB2hDBRhUQAGgHAEgLIAziGQAhAIAeAdQABABAAAEIgBAFIgPAdQgJASgFANQgHAUgSA9IgcBtIAAAHIAZgUQAPgLAIgIQA4gzBBg+QAJgJAFgPIB4lsIAKACIAKADIAzAkQAKAGgFAMIgOAmIgPAmQgwBtgZA0QgZA0gMA5IgcB/IgCAKQBAgvBDhBQAugtBJhPIAGAlQAAADgEAEQhGBUg8A6QhKBHhMAyQgiAXgaAEQgHABgCgCQgCgCACgHIAUhaIAXhWIgDgCIgHAKQgxAxglAgQgxAqgtAdQgVANghAMQgJAEgDgDQgEgDACgKQAIgzAIgeIANgyIAQg0IgJAJQh1Brh1BAIgXAKIgXAJIgDgDIAEgcQACgQADgLIA4i/QACgFgCgEIgLALQg9BEg0AvQg+A7g+AqQgUANgLAGQgTAJgTABIgBgKIABgJIAfiFIAYhRIACgKIgCgCIgIAKQiICIiABRIgZANQgFADgDgCQgDgCABgGQAGgjAEgLIA5imQADgGgBgFIgKAMQhNBThQA3QhhBEh5AWIgDAAQgOADgFAAIgCAAgAqRCYQgJBDAHBOIAsgOQAZgIAQgHQA+gbAThEQAMgpgPgkQgPgkglgTQgNgHgUgIIgjgMQgeBCgLBIgAkiDqQAsgeAzguIBXhTQhHgjhQgWQgaBogFBwgAU8FWIAIgrIAKgrIAVhLIAWhNIgJAJQiHCGiFBXIgZANQgGADgCgCQgDgCABgFQAFgfACgIQAwidBOi1QAGgOAEgCQADgCAQAEQBQATBjAmIAIABQADAAAEgEIAqgqQAFgGAHAEIAWALIhSEVIADACQAhgYAmgiIBFhAIAAAuQAAAEgFAEQgvAvghAdQguAngrAcIgbAQQgQAIgPACIgDAAQgJAAACgJgASuDrQAughAxgrQAiggA1g0QhNgmhKgTQgbBpgEBwg");
	this.shape.setTransform(126.6,27.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.6,-8.8,316.5,72.1);


(lib.jgqef = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.bild2();
	this.instance.setTransform(-453.7,-2.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-453.7,-2.2,1365,910);


(lib.hoqwfhkl = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.bild3();
	this.instance.setTransform(0,0,1.203,1.203);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2706.6,1804.4);


(lib.hlajg = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(372.8,-236.8,0.8,0.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(295.4,-252.1,155,30.8);


(lib.hhjl = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANuDAIAAgOIApAAIAAljIgpAAIAAgOIA5AAIAAF/gAGYBuQgSgJgNgPQgMgPgHgVQgGgVgBgXQABgVAGgUQAHgVAMgPQANgQASgJQASgJAYAAIAXADQALACAJAEQATAJAMAQQAMAPAHAVQAGAUAAAVQAAAXgGAVQgHAVgMAPQgMAPgTAJQgJAFgLACIgXACQgYAAgSgJgAGfhTQgPAJgLANQgLAOgFASQgFASAAARQAAAUAFARQAFASALAOQALAOAPAIQAQAIATAAQAVAAAPgIQAQgIAKgOQALgOAGgSQAEgRAAgUQAAgRgEgSQgGgSgLgOQgKgNgQgJQgPgIgVAAQgTAAgQAIgAhqBvQgSgJgMgPQgMgPgFgUQgHgUAAgYQAAgVAHgUQAFgVANgQQAMgQASgJQAKgFAKgCQALgDAMAAQAXAAARAJQASAIAKAPQALAOAHATQAFATAAAVIAAAIIisAAIAAADQAAATAEARQAFARAKANQALANAOAIQAPAHAUAAQAhAAASgRQARgRAHgeIAQAAQgHAmgVAUQgYAUgnAAQgYAAgSgIgAAOgEQgCgRgEgQQgGgQgIgMQgKgMgNgHQgPgHgSAAQgTAAgPAIQgPAHgKAMQgKAMgFAQQgGAQgBAQICdAAIAAAAgAqWBzQgNgDgJgIQgUgPABgfQgBgTAIgLQAIgMALgHQAMgHAOgCIAzgGQASgBAKgCQAJgDAGgFQAEgFACgIIABgSQAAgJgDgIQgDgHgIgGQgHgGgMgDQgLgEgQAAQgPAAgLAEQgMADgIAHQgSAPgCAdIgQAAQACgkAUgSQALgJAPgEQAPgFAUAAQATAAAPAEQAOAEAJAIQARAPAAAZIABCEIACAJIADAGQADACAGAAIAMgBIAAAOIgNABQgKAAgGgCQgFgDgDgEIgEgKIgBgMIAAgMIgBAAQgEAKgHAJQgHAIgLAHQgJAHgOADQgNAEgPAAQgSAAgNgEgAo4ABIhNAKQgMADgJAFQgKAFgGAKQgFAJgBAPQAAAYAPAMQAIAGAKADQALACANAAQAbAAARgJQAPgKAJgNQAIgNACgMIADgQIAAgmQgGAGgMABgANeByIhch5IgyAoIAABRIgQAAIAAkqIAQAAIAADFICGhxIAWAAIheBRIBlCFgAJLByIAAjWIAQAAIAAAwIABAAQADgKAIgJQAIgKALgGQALgHANgEQAOgDAPAAIAAAQQgNgCgQAFQgQAEgOAOIgLAMIgHANIgFAQIgCAVIAAB0gAD6ByIg7jBIgBAAIg7DBIgVAAIhEjWIARAAIA9DEIAAAAIA7jEIAWAAIA7DEIABAAIA9jEIARAAIhGDWgAjVByIAAiSQAAgUgGgMQgGgMgJgGQgIgGgJgBIgNgCQgPAAgNAFQgMAFgJAKQgJAKgEAPQgGAPAAATIAAB+IgQAAIAAiSQAAgUgGgMQgGgMgIgGQgJgFgIgCIgNgCQgMAAgMAFQgMAEgLAKQgJAKgHAPQgGAPAAAUIAAB+IgQAAIAAjWIAQAAIAAAsIABAAQADgKAGgJQAGgJAJgGQAJgHALgEQALgEANAAQAPAAALAEQALAEAJAHQAHAGAFAJQAFAIACAIIABAAQAEgLAGgJQAHgIAIgGQAIgGALgDQALgDANAAQAOAAANAFQAMAEAJAJQAJAJAFAOQAGAOgBATIAACRgAsqByIAAjWIAQAAIAAAwIACAAQACgKAIgJQAIgKALgGQALgHAOgEQANgDAPAAIAAAQQgMgCgRAFQgQAEgPAOIgKAMIgIANIgEAQIgCAVIAAB0gAuAByIAAjIIgnAAIAAgOIAnAAIAAgsQAAgLAEgJQADgIAHgFQAHgFAJgCQAIgDAKAAIATACIAAAOIgTgCQgOAAgJAGQgJAGAAASIAAArIAtAAIAAAOIgtAAIAADIg");
	this.shape.setTransform(379.6,-248.8,0.8,0.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(304.7,-264.1,149.8,30.7);


(lib.hhh = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiFFUIAAghIBsAAIAApkIhiAAIAAgiICNAAIAAKFIB0AAIAAAig");
	this.shape.setTransform(13.5,34.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26.9,68.2);


(lib.hflqwj = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A6iGuIAAtbMA1FAAAIAANbg");
	this.shape.setTransform(170,43);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,340,86);


(lib.hfh = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACHFLIAAgiIBoAAIAAo3IjWGIQgDAHgEACQgFADgIABQgNACgIgGQgJgGgHgOQhCh6iFj3IgHgNIAAI4IBqAAIAAAiIkDAAIAAgiIBrAAIAApQIhrAAIAAgiIALgBICTAAQAGAAAEACQADADADAFIDZGbIAGgMIDVmNQADgHAEgDQAFgCAHAAICNAAIAMAAIAAAjIhpAAIAAJPIBpAAIAAAjg");
	this.shape.setTransform(39.2,33.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78.4,66.4);


(lib.hehqthl = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApJD2QgEgSABgWQABgWAQgoQAghTAag2QAYgzARgdQASgdAHgBIASAAQAGADABADQABAHgGASIhhDaIgeA1IAHAiIAxhSQAWggAQgSQAQgSAJgCQAIgCAKAKQAJAHACAHIgCAHIgjBPQgEANACAJQADAOAMgDQANgDAkgqIgBgBQAZgeAchHIgpALIgFADIgEACQAAAAgBgBQAAAAAAAAQAAAAAAgBQgBAAAAAAQgCgJAIgUQAGgSAGgJQAGgKAMgFQALgFAWgFIALgCQAKgcAJgOQAJgNAQgDQAPgDABAGQABAEgIARIgNAcIAdgCQgKAfgRAkIglAFIgYBWQgCARAEAPQAEATAOgDQALgDAPgPIAkgqIABgKIAKgjQANggAKgOQAJgOANgCQAIgCAGACQAGABACAHQABAFgHAQQgIAQgMARIgMAXQgFANACAGQABAHAGgBQAFgBAPgYIAhgzQASgcAQgTQAQgUAOgDQAIgBAHAFQAHAFACAJQABAGgFASIgsBuIBsiYQAJgKADgBQAHgDAIANQAKAKABAIQACAGgOAXIgTAlQgHANADANQABAIAGADQAGAEAHgCQAIgCAKgLIAZgfQgEgZAEggQAFgoAOgtQAOgtARgjQASgjASgQQAHgHAFgBQAFgCADAFIAGASQAIAmgTA/QgTA/grBFIACAWQAEATAKAJQAKAJANgDQAHgBAHgHIAqg5IAFAVQgqBZglAIQgTAEgQgSQgOgSgIgdIgeAqQgQAVgNALQgNALgHACQgJACgIgFQgHgFgCgKIgBgUIAGgZIAYhLIgoA4IgtBKQgMAVgNADQgOADgEgVQgCgIAGgYIATg9IAAgHQgCgHgFACQgGABgJAPIg8ByQgEAHgGABQgKACgMgQQgMgQgFgVQg3BbgiAIQgNADgKgJQgJgIgEgPQgCgKABgPIAHguIg0BLQgPASgLALQgLALgKACQgWAFgFgZQgFgVAIgeQAIgeARgqIgUAVIhFB9QgEAHgFABIgEAAQgTAAgLgwgACdiOIgFAFQgOARgNAtQgMAtAAApIAVgkIAchWQADgRgCgIQgBgGgEAAIgBAAgAFvBnQgOgGgEgWQgDgOADgJQADgKAKgKQAYgZAggGQABgBAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABIgCACQghAUACAIQACAHAXgFQAigHAhgZQAhgXAVgdQAUgdgDgPQgCgLgNgEQgLgEgUAEQgTAEgOAHIg4AaQgJACgGgHIgJgMIgNgYQAEg/A+haICRgeIgOAvQgHATgEADQgGAEgwAKIg9ANQgaAhgLAsQAxgdAagFQAigIAWAPQAXAPAIAlQAJAtgVArQgWApgqAdQgqAfgxAKQgNACgJAAQgLAAgHgDg");
	this.shape.setTransform(58.9,29.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,117.9,59);


(lib.gqifh = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.bild5();
	this.instance.setTransform(-296,0,1.25,1.25);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-296,0,1519.1,1012.8);


(lib.ddd = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhEFYQgjgEgfgPQhbgqgWh2QgQhWAbhNQAqh1BygSQCAgVBHBsIADABIAAkJIhHAAQgRAAgBgBQgBgBAAgRIAAgPICGAAIAAKEIBYAAIAAAjIiEAAIAAhVIgCAAIgGAJQg5BWhkAAIgZgBgAhNhgQhFANgjBCQgOAZgHAhQgGAdgBAoIAFAqQAFAdAGATQAYA/AyAbQAwAaBAgLQBWgQAghdQAchRgXhXQgXhShCgeQgfgPglAAQgRAAgTADg");
	this.shape.setTransform(25.5,34.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50.9,69.1);


(lib.cover1 = function() {
	this.initialize();

	// Ebene 3
	this.text = new cjs.Text("X", "96px 'Trajan Pro'", "#CCCCCC");
	this.text.lineHeight = 98;
	this.text.lineWidth = 100;
	this.text.setTransform(46.9,36,2.202,2.202);

	// Ebene 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ay4S5MAAAglxMAlxAAAMAAAAlxg");
	this.shape.setTransform(121,121);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,276,256.3);


(lib.circle = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ap7J8QkIkHAAl1QAAl0EIkHQEHkIF0AAQF1AAEHEIQEIEHAAF0QAAF1kIEHQkHEIl1AAQl0AAkHkIg");
	this.shape.setTransform(90,90);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,180,180);


(lib.bkwbqfkq = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg/WBVBMAAAiqBMB+sAAAMAAACqBg");
	this.shape.setTransform(405.5,544.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,811,1088.3);


(lib.aaa = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AifDfQg6gbgEhJQgDg/A2gjQAzghBMgHIB8gMIAAg9QAAgkgJgZQgMgngsgKQhCgQhQAhQgCABgCAEIgCAHIgFBWIgkAAIAAieIAeAAIAFAZIAugPQA8gRA5ALQAtAIAbAdQAaAdAFAuQABAQAAAXIABDuQAAAMAEAOQAEAMAJAHQAIAGAMAAIA7gEIAAAaQAAAEgGACQgpAPgngJQgsgLgHg5IgBgGIggAaQgTAQgPAJQgwAcgxAAQgoAAgogTgAgvAVQgzAGgnAYQgrAZAEAvQAFAwAoAVQAVAMAcAAQATAAAfgGQAggGAbgVQAYgSAYgeQAFgGAAgFIABhqIiAAPg");
	this.shape.setTransform(22.2,24.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44.5,48.5);


(lib.playergesammt = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.playerfarbe();
	this.instance.setTransform(348.9,183,1,1,0,0,0,348.9,183);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,697.9,365.9);


(lib.lnflq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 5
	this.instance = new lib.gqifh();
	this.instance.setTransform(202.5,405,1,1,0,0,0,607.5,405);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(466).to({_off:false},0).to({x:315.3,alpha:1},16).to({x:766.6},64).to({x:886.5,alpha:0},17).wait(1));

	// Ebene 3
	this.instance_1 = new lib.hoqwfhkl();
	this.instance_1.setTransform(601.6,418,0.557,0.557,0,0,0,1125,750.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(309).to({_off:false},0).to({scaleX:0.6,scaleY:0.6,x:576.2,y:406.7,alpha:1},15).to({scaleX:0.89,scaleY:0.89,x:143.7,y:321.4},114).to({regY:750,scaleX:1,scaleY:1,rotation:-360,x:309.5,y:288.4},44,cjs.Ease.get(1)).to({_off:true},1).wait(81));

	// Ebene 1
	this.instance_2 = new lib.jgqef();
	this.instance_2.setTransform(976.1,341,1.127,1.127,0,0,0,455.1,303.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:455,regY:303.4,scaleX:1.15,scaleY:1.15,x:299,y:321.4},324).to({_off:true},1).wait(221).to({_off:false,regX:455.1,regY:303.6,scaleX:1.13,scaleY:1.13,x:1013.7,y:342.2},0).to({scaleX:1.13,scaleY:1.13,x:978.2,y:341.1},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,-3.6,1538.5,1025.6);


(lib.kkkh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 2
	this.instance = new lib.Nspire3DCube2();
	this.instance.setTransform(157.1,107.6,0.4,0.4);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.7,28,113.6,124.4);


(lib.kgsnvk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 6
	this.instance = new lib.aaa();
	this.instance.setTransform(322.5,45,0.155,1,0,0,0,22.2,24.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({scaleX:1},14).wait(53));

	// Ebene 5
	this.instance_1 = new lib.hhh();
	this.instance_1.setTransform(262.8,34,0.249,1,0,0,0,13.5,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,x:262.9},14).wait(71));

	// Ebene 4
	this.instance_2 = new lib.uuu();
	this.instance_2.setTransform(219.1,45.6,0.124,1,0,0,0,26.9,23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,x:219},14).wait(71));

	// Ebene 3
	this.instance_3 = new lib.ddd();
	this.instance_3.setTransform(163.9,34.6,0.149,1,0,0,0,25.4,34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1},14).wait(71));

	// Ebene 2
	this.instance_4 = new lib.oh();
	this.instance_4.setTransform(108,45,0.113,1,0,0,0,21.2,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:21.1,scaleX:1},14).wait(71));

	// Ebene 1
	this.instance_5 = new lib.hfh();
	this.instance_5.setTransform(39.2,34.9,0.153,1,0,0,0,39.2,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1},14).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.2,0,233,69.3);


(lib.flaeche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_109 = function() {
		/* Bei diesem Bild stoppen
		Die Zeitleiste stoppt/pausiert bei dem Bild, in das Sie diesen Code einfügen.
		Kann auch zum Stoppen/Anhalten von Movieclip-Zeitleisten verwendet werden.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));

	// Ebene 1
	this.instance = new lib.bkwbqfkq();
	this.instance.setTransform(405.5,544.1,1,1,0,0,0,405.5,544.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.551},109,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,811,1088.3);


(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 8
	this.instance = new lib.circle();
	this.instance.setTransform(253.6,-534.8,1,1,0,0,0,90,179.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(181).to({_off:false},0).wait(1).to({regY:90,y:-623.6},0).wait(1).to({y:-622.5},0).wait(1).to({y:-620.6},0).wait(1).to({y:-617.9},0).wait(1).to({y:-614.5},0).wait(1).to({y:-610.3},0).wait(1).to({y:-605.4},0).wait(1).to({y:-599.7},0).wait(1).to({y:-593.2},0).wait(1).to({y:-586},0).wait(1).to({y:-578},0).wait(1).to({y:-569.2},0).wait(1).to({y:-559.7},0).wait(1).to({y:-549.4},0).wait(1).to({y:-538.4},0).wait(1).to({y:-526.6},0).wait(1).to({y:-514.1},0).wait(1).to({y:-500.8},0).wait(1).to({y:-486.7},0).wait(1).to({y:-471.8},0).wait(1).to({y:-456.2},0).wait(1).to({y:-439.9},0).wait(1).to({y:-422.8},0).wait(1).to({y:-404.9},0).wait(1).to({y:-386.3},0).wait(1).to({y:-366.9},0).wait(1).to({y:-346.7},0).wait(1).to({y:-325.8},0).wait(1).to({y:-304.1},0).wait(1).to({y:-281.6},0).wait(1).to({y:-258.4},0).wait(1).to({y:-234.5},0).wait(1).to({y:-209.7},0).wait(1).to({y:-184.3},0).wait(1).to({y:-158},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:-98.3},0).wait(1).to({scaleX:1.3,scaleY:0.59,y:-132.4},0).wait(1).to({scaleX:1.27,scaleY:0.63,y:-170},0).wait(1).to({scaleX:1,scaleY:1,y:-231.8},0).wait(1).to({y:-256.4},0).wait(1).to({y:-276.5},0).wait(1).to({y:-292.2},0).wait(1).to({y:-303.4},0).wait(1).to({y:-310.1},0).wait(1).to({y:-312.4},0).wait(1).to({y:-310.1},0).wait(1).to({y:-303.4},0).wait(1).to({y:-292.2},0).wait(1).to({y:-276.5},0).wait(1).to({y:-256.4},0).wait(1).to({y:-231.8},0).wait(1).to({y:-202.7},0).wait(1).to({y:-169.1},0).wait(1).to({scaleX:1.18,scaleY:0.76,y:-110},0).wait(1).to({scaleX:1.2,scaleY:0.74,y:-127.8},0).wait(1).to({scaleX:1.18,scaleY:0.77,y:-147.5},0).wait(1).to({scaleX:1,scaleY:1,y:-181},0).wait(1).to({y:-190.3},0).wait(1).to({y:-195.9},0).wait(1).to({y:-197.7},0).wait(1).to({y:-195.9},0).wait(1).to({y:-190.3},0).wait(1).to({y:-181},0).wait(1).to({y:-168.1},0).wait(1).to({y:-151.4},0).wait(1).to({scaleX:1.1,scaleY:0.8,y:-113.2},0).wait(1).to({scaleX:1,scaleY:1,y:-141.7},0).wait(1).to({y:-149.4},0).wait(1).to({y:-154},0).wait(1).to({y:-155.6},0).wait(1).to({y:-154},0).wait(1).to({y:-149.4},0).wait(1).to({y:-141.7},0).wait(1).to({y:-131},0).wait(1));

	// Ebene 5
	this.instance_1 = new lib.hhjl();
	this.instance_1.setTransform(58.7,54.6,1,1,0,0,0,93.6,19.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(153).to({_off:false},0).to({x:18.7,alpha:1},18,cjs.Ease.get(1)).wait(35).to({alpha:0},10).to({_off:true},1).wait(39));

	// Ebene 4
	this.instance_2 = new lib.hlajg();
	this.instance_2.setTransform(-14,3.1,1,1,0,0,0,96.9,19.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(153).to({_off:false},0).to({x:26,alpha:1},18,cjs.Ease.get(1)).wait(35).to({alpha:0},10).to({_off:true},1).wait(39));

	// Ebene 3
	this.instance_3 = new lib.khfk();
	this.instance_3.setTransform(22.1,26,0.043,0.043,0,0,0,120.7,120.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({_off:false},0).to({regX:121,regY:121,scaleX:1,scaleY:1,rotation:1080,y:26.1},34,cjs.Ease.get(1)).wait(34).to({regX:120.8,scaleX:0.16,x:-449.9,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// Ebene 2
	this.instance_4 = new lib.cover1();
	this.instance_4.setTransform(23,27,0.134,1,0,0,0,120,120);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).to({scaleX:1,alpha:1},13,cjs.Ease.get(1)).wait(35).to({scaleX:0.13,alpha:0},10,cjs.Ease.get(1)).wait(1).to({_off:true},21).wait(147));

	// Ebene 7
	this.instance_5 = new lib.hehqthl();
	this.instance_5.setTransform(-280.6,199.4,0.8,0.8,0,0,0,59,29.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60).to({_off:false},0).to({alpha:1},11).wait(41).to({alpha:0},11).to({_off:true},1).wait(132));

	// Ebene 6
	this.instance_6 = new lib.kkkh();
	this.instance_6.setTransform(-293,190.7,0.695,0.695,27.7,0,0,104,103.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60).to({_off:false},0).to({regY:104,scaleX:0.69,scaleY:0.69,rotation:27.6,alpha:1},11).wait(41).to({regY:103.9,scaleX:0.7,scaleY:0.7,rotation:27.7,alpha:0},11).to({_off:true},1).wait(132));

	// Ebene 1
	this.instance_7 = new lib.quadrat();
	this.instance_7.setTransform(23.2,26.2,0.802,0.802,0,0,0,22,22);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:7.67,scaleY:7.67,alpha:1},29,cjs.Ease.get(1)).wait(48).to({alpha:0},10,cjs.Ease.get(1)).wait(1).to({_off:true},21).wait(147));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.6,8.6,35.3,35.3);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 5
	this.instance = new lib.k();
	this.instance.setTransform(133.2,36.8,1,1,0,0,0,117.2,32.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135).to({_off:false},0).to({alpha:1},12).wait(46).to({alpha:0},11,cjs.Ease.get(1)).wait(1));

	// Ebene 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_73 = new cjs.Graphics().p("ArjFoQgDgCgBgUQgEhSAZhbIAEgMIgEgCIgGAJQgzA1glAgQgyAtguAfQgUANgLAGQgSAJgRACQgHABgCgDQgCgCABgGIALhFQAciAAuiJIADgJIgIAGQiQCtiTB6QgMAKgUAMIghAVQgGAEgDgDQgCgCAAgGIACgYQACgOACgJIBml5QABgFAAgEQhiCLhZBkQhsB5h0BVIgEgBIAIgyQAAgCAFgEQBAgxBDhFQAxgyBFhRQBZhoBSh4QAJgNACgMIAhiXQANADAOAHIAZAOQAaAQADAIQADAIgKAcIgUA4IgUA3QgIAXgLAwIhOEYIgHAfIAGgEQCbh+B/imQAGgHAEgKIAFgTIAKgqIADgJQApAMAWAaQADADgDAJIhHEBIgbBqQAAACACADIAbgVQAQgMAKgJQA6g2BbhZQAKgKAIgPQAegzAoglQACgDAEgBQAEgCADABQA9AMAlAWQA2AeAKAxQAIAjgSAoIgQAgIgSAfIAEgCQArgiAugvQAigjAvg2QADgDAFgLIAag6QADgHADgCQAEgCAIACQBTATBdAkIALAEIBikqIAQAGQAJAEAFADQAQALAXAUQACACABAFQACAFgCADQgVA7gOAhIgrBhQgbA7gNAkQgGANgEAUIgHAiIgXB6IAAAGQBPg7BMhPQAegfApgtIBGhMIAgAMIhREdIALgEQB2hDBRhUQAGgHAEgLIAziGQAhAIAeAdQABABAAAEIgBAFIgPAdQgJASgFANQgHAUgSA9IgcBtIAAAHIAZgUQAPgLAIgIQA4gzBBg+QAJgJAFgPIB4lsIAKACIAKADIAzAkQAKAGgFAMIgOAmIgPAmQgwBtgZA0QgZA0gMA5IgcB/IgCAKQBAgvBDhBQAugtBJhPIAGAlQAAADgEAEQhGBUg8A6QhKBHhMAyQgiAXgaAEQgHABgCgCQgCgCACgHIAUhaIAXhWIgDgCIgHAKQgxAxglAgQgxAqgtAdQgVANghAMQgJAEgDgDQgEgDACgKQAIgzAIgeIANgyIAQg0IgJAJQh1Brh1BAIgXAKIgXAJIgDgDIAEgcQACgQADgLIA4i/QACgFgCgEIgLALQg9BEg0AvQg+A7g+AqQgUANgLAGQgTAJgTABIgBgKIABgJIAfiFIAYhRIACgKIgCgCIgIAKQiICIiABRIgZANQgFADgDgCQgDgCABgGQAGgjAEgLIA5imQADgGgBgFIgKAMQhNBThQA3QhhBEh5AWIgDAAQgOADgFAAIgCAAgAqRCYQgJBDAHBOIAsgOQAZgIAQgHQA+gbAThEQAMgpgPgkQgPgkglgTQgNgHgUgIIgjgMQgeBCgLBIgAkiDqQAsgeAzguIBXhTQhHgjhQgWQgaBogFBwgAU8FWIAIgrIAKgrIAVhLIAWhNIgJAJQiHCGiFBXIgZANQgGADgCgCQgDgCABgFQAFgfACgIQAwidBOi1QAGgOAEgCQADgCAQAEQBQATBjAmIAIABQADAAAEgEIAqgqQAFgGAHAEIAWALIhSEVIADACQAhgYAmgiIBFhAIAAAuQAAAEgFAEQgvAvghAdQguAngrAcIgbAQQgQAIgPACIgDAAQgJAAACgJgASuDrQAughAxgrQAiggA1g0QhNgmhKgTQgbBpgEBwg");
	var mask_graphics_174 = new cjs.Graphics().p("ArjFoQgDgCgBgUQgEhSAZhbIAEgMIgEgCIgGAJQgzA1glAgQgyAtguAfQgUANgLAGQgSAJgRACQgHABgCgDQgCgCABgGIALhFQAciAAuiJIADgJIgIAGQiQCtiTB6QgMAKgUAMIghAVQgGAEgDgDQgCgCAAgGIACgYQACgOACgJIBml5QABgFAAgEQhiCLhZBkQhsB5h0BVIgEgBIAIgyQAAgCAFgEQBAgxBDhFQAxgyBFhRQBZhoBSh4QAJgNACgMIAhiXQANADAOAHIAZAOQAaAQADAIQADAIgKAcIgUA4IgUA3QgIAXgLAwIhOEYIgHAfIAGgEQCbh+B/imQAGgHAEgKIAFgTIAKgqIADgJQApAMAWAaQADADgDAJIhHEBIgbBqQAAACACADIAbgVQAQgMAKgJQA6g2BbhZQAKgKAIgPQAegzAoglQACgDAEgBQAEgCADABQA9AMAlAWQA2AeAKAxQAIAjgSAoIgQAgIgSAfIAEgCQArgiAugvQAigjAvg2QADgDAFgLIAag6QADgHADgCQAEgCAIACQBTATBdAkIALAEIBikqIAQAGQAJAEAFADQAQALAXAUQACACABAFQACAFgCADQgVA7gOAhIgrBhQgbA7gNAkQgGANgEAUIgHAiIgXB6IAAAGQBPg7BMhPQAegfApgtIBGhMIAgAMIhREdIALgEQB2hDBRhUQAGgHAEgLIAziGQAhAIAeAdQABABAAAEIgBAFIgPAdQgJASgFANQgHAUgSA9IgcBtIAAAHIAZgUQAPgLAIgIQA4gzBBg+QAJgJAFgPIB4lsIAKACIAKADIAzAkQAKAGgFAMIgOAmIgPAmQgwBtgZA0QgZA0gMA5IgcB/IgCAKQBAgvBDhBQAugtBJhPIAGAlQAAADgEAEQhGBUg8A6QhKBHhMAyQgiAXgaAEQgHABgCgCQgCgCACgHIAUhaIAXhWIgDgCIgHAKQgxAxglAgQgxAqgtAdQgVANghAMQgJAEgDgDQgEgDACgKQAIgzAIgeIANgyIAQg0IgJAJQh1Brh1BAIgXAKIgXAJIgDgDIAEgcQACgQADgLIA4i/QACgFgCgEIgLALQg9BEg0AvQg+A7g+AqQgUANgLAGQgTAJgTABIgBgKIABgJIAfiFIAYhRIACgKIgCgCIgIAKQiICIiABRIgZANQgFADgDgCQgDgCABgGQAGgjAEgLIA5imQADgGgBgFIgKAMQhNBThQA3QhhBEh5AWIgDAAQgOADgFAAIgCAAgAqRCYQgJBDAHBOIAsgOQAZgIAQgHQA+gbAThEQAMgpgPgkQgPgkglgTQgNgHgUgIIgjgMQgeBCgLBIgAkiDqQAsgeAzguIBXhTQhHgjhQgWQgaBogFBwgAU8FWIAIgrIAKgrIAVhLIAWhNIgJAJQiHCGiFBXIgZANQgGADgCgCQgDgCABgFQAFgfACgIQAwidBOi1QAGgOAEgCQADgCAQAEQBQATBjAmIAIABQADAAAEgEIAqgqQAFgGAHAEIAWALIhSEVIADACQAhgYAmgiIBFhAIAAAuQAAAEgFAEQgvAvghAdQguAngrAcIgbAQQgQAIgPACIgDAAQgJAAACgJgASuDrQAughAxgrQAiggA1g0QhNgmhKgTQgbBpgEBwg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(73).to({graphics:mask_graphics_73,x:144.6,y:33.2}).wait(101).to({graphics:mask_graphics_174,x:144.6,y:33.2}).wait(31));

	// Ebene 3
	this.instance_1 = new lib.hflqwj();
	this.instance_1.setTransform(149,112.7,1,1,0,0,0,170,43);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(73).to({_off:false},0).to({y:36.7},11,cjs.Ease.get(1)).wait(90).to({y:-49.3},12).to({_off:true},1).wait(18));

	// Ebene 1
	this.instance_2 = new lib.kgsnvk();
	this.instance_2.setTransform(172.3,34.6,1,1,0,0,0,172.3,34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(73).to({alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.2,0,233,69.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;