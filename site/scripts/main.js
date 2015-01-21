/**
 * Main JavaScript
 * Nobelvanlins-lp
 *
 * Copyright (c) 2014. by Way2CU, http://way2cu.com
 * Authors:Tal Reznic
 */

var Caracal = Caracal || {};

function on_site_load() {

 	Caracal.slides = new PageControl('div#slides', 'div.slide');

	// configure page control for sliders
	Caracal.slides
				.setInterval(5000)
				.setWrapAround(true);
	var element=$('form');
	var one = new Form(element);


	//form configuration
	// var container=$('<div class="first">');
	// var container2=$('<div class="second">');
	// var goBtn=$('<input type="button" value="GO">');
	// var backBtn=$('<input type="button" value="BACK">');

	// 	for(var i=0;i<=5;i++)
	// 		$('form label').eq(0).detach().appendTo(container);

	// 	goBtn.addClass('btn').appendTo('form div.controls');

	// 	goBtn.click(function(event) {
	// 		$('form div.first').animate({left:'100%'},300);
	// 		$('form div.second').animate({left:'0%'},300,function(){
	// 			backBtn.animate({opacity:'1'});
	// 			goBtn.animate({opacity:'0'});
	// 			$('form div.controls button').animate({opacity:'1'});
	// 		});


	// 	});

	// 	for(var i=0;i<=4;i++)
	// 		$('form label').eq(0).detach().appendTo(container2);
	// 	backBtn.addClass('backBtn').appendTo('form div.controls');

	// 	backBtn.click(function(event) {
	// 		$('form div.second').animate({left:'100%'},300);
	// 		$('form div.first').animate({left:'0%'},300,function(){
	// 		  backBtn.animate({opacity:'0'});
	// 		  goBtn.animate({opacity:'1'});
	// 		  $('form div.controls button').animate({opacity:'0'});
	// 		});
	// 	});

	// 	container2.prependTo('form');
	// 	container.prependTo('form');




}

$(on_site_load);

function Form(container) {
	var self = this;

	self.container = container;
	self.fields = null;
	self.first_section = $('<div class="first">');
	self.second_section = $('<div class="second">');
	self.goBtn = $('<input type="button" value="GO">');
	self.backBtn = $('<input type="button" value="BACK">');

	//Complete object initialization.

	self._init = function() {

		self.fields = self.container.find('label');

		for(var i=0; i<=5; i++)
			self.fields.eq(i).detach().appendTo(self.first_section);

		self.goBtn.addClass('btn').appendTo(self.container);
		self.goBtn.click(self._handle_next);

		for(var i=0; i<=4; i++)
			self.fields.eq(i).detach().appendTo(self.second_section);

		self.backBtn.addClass('backBtn').appendTo(self.container);
		self.backBtn.click(self._handle_back);

		self.container.prepend(self.second_section);
		self.container.prepend(self.first_section);
	};

	/**
	 * Handle clicking on next button.
	 *
	 * @param object event
	 */
	self._handle_next = function(event){
		self.first_section.animate({left: '100%'}, 300);
		self.second_section.animate({left: '0%'}, 300, function() {
			self.backBtn.animate({opacity: '1'});
			self.goBtn.animate({opacity: '0'});
			self.container.find('div.controls button').animate({opacity: '1'});
		});
	};

	/**
	 * Handle clicking on previous button.
	 *
	 * @param object event
	 */
	self._handle_back = function(event) {
		self.second_section.animate({left: '100%'}, 300);
		self.first_section.animate({left: '0%'}, 300, function() {
			self.backBtn.animate({opacity: '0'});
			self.goBtn.animate({opacity: '1'});
			self.container.find('div.controls button').animate({opacity: '0'});
		});
	};

	// finalize object
	self._init();
}
