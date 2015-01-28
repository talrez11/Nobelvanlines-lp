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





	var element=$('form:first()');
	var element2=$('form:last()');
	var first_form = new Form(element);
	var second_form = new Form(element2);

	$('a.arrow.next').click(function(event) {
		$('div.form_container form:first()').css('display','block');
		$('div.form_container form:last()').css('display','none');
	});

	$('a.arrow.previous').click(function(event) {
		$('div.form_container form:first()').css('display','none');
		$('div.form_container form:last()').css('display','block');
	});

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

	self._init = function() {
		self.fields = self.container.find('label');
		console.log(self.fields);

		for(var i = 0, length = self.fields.length; i <= length; i++) {
			var field = self.fields.eq(i);

			field.detach();
			if (i <= 5)
				field.appendTo(self.first_section); else
				field.appendTo(self.second_section);
		}

		self.goBtn.addClass('btn').appendTo(self.container.find('div.controls'));
		self.goBtn.click(self._handle_next);
		self.backBtn.addClass('backBtn').appendTo(self.container.find('div.controls'));
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
			self.container.find('div.controls button').css('opacity','1');
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
			self.container.find('div.controls button').css('opacity','0');
		});
	};

	// finalize object
	self._init();
}
