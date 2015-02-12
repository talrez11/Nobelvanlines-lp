/**
 * Main JavaScript
 * Nobelvanlins-lp
 *
 * Copyright (c) 2014. by Way2CU, http://way2cu.com
 * Authors:Tal Reznic
 */

var Caracal = Caracal || {};

function on_site_load() {
	Caracal.Form1 = new PageControl('form:first()', 'fieldset');
	Caracal.Form2 = new PageControl('form:last()', 'fieldset');
 	Caracal.slides = new PageControl('div#slides', 'div.slide');
 	$('div.form_container form:first()').css('display','block');
 	$('div.form_container form:last()').css('display','none');
	// configure page control for sliders
	Caracal.slides
				.setInterval(5000)
				.setWrapAround(true);


	$('a.arrow.next').click(function(event) {
		$(this).css('backgroundColor','#f5911d');
		$('a.arrow.previous').css('backgroundColor','#94a4a5');
		$('div.form_container form:first()').css('display','block');
		$('div.form_container form:last()').css('display','none');
	});

	$('a.arrow.previous').click(function(event) {
		$(this).css('backgroundColor','#f5911d');
		$('a.arrow.next').css('backgroundColor','#94a4a5');
		$('div.form_container form:first()').css('display','none');
		$('div.form_container form:last()').css('display','block');
	});

	function validateForm1() {

		var from = $('fieldset input[name="from"]').val();
		var to = $('fieldset input[name="to"]').val();
		var date = $('fieldset input[name="date"]').val();
		var select = $('fieldset select[name="home_size"]').val();

		if(from == null || from == "" ) {
			$('fieldset input[name="from"]').attr('placeholder','Enter City Name');
			$('fieldset input[name="from"]').css('border','1px solid red');
			return false;
		}

		if(to == null || to == "" ) {
			$('fieldset input[name="to"]').attr('placeholder','Enter City Name');
			$('fieldset input[name="to"]').css('border','1px solid red');
			return false;
		}

		if(date == null || date == "" ) {
			$('fieldset input[name="date"]').attr('placeholder','Enter City Name');
			$('fieldset input[name="date"]').css('border','1px solid red');
			return false;
		}

		if(select == null || select == "" ) {
			$('fieldset select[name="home_size"]').attr('placeholder','Enter City Name');
			$('fieldset select[name="home_size"]').css('border','1px solid red');
			return false;
		}

		Caracal.Form1.nextPage();

	}

	function validateForm2() {

		var from = $('fieldset input[name="country_from"]').val();
		var to = $('fieldset input[name="country_to"]').val();
		var date = $('fieldset input[name="country_date"]').val();
		var select = $('fieldset select[name="country_home_size"]').val();

		if(from == null || from == "" ) {
			$('fieldset input[name="country_from"]').attr('placeholder','Enter City Name');
			$('fieldset input[name="country_from"]').css('border','1px solid red');
			return false;
		}

		if(to == null || to == "" ) {
			$('fieldset input[name="country_to"]').attr('placeholder','Enter City Name');
			$('fieldset input[name="country_to"]').css('border','1px solid red');
			return false;
		}

		if(date == null || date == "" ) {
			$('fieldset input[name="country_date"]').attr('placeholder','Enter City Name');
			$('fieldset input[name="country_date"]').css('border','1px solid red');
			return false;
		}

		if(select == null || select == "" ) {
			$('fieldset select[name="country_home_size"]').attr('placeholder','Enter City Name');
			$('fieldset select[name="country_home_size"]').css('border','1px solid red');
			return false;
		}

		Caracal.Form2.nextPage();

	}

	// Validate part1 of first form
	$('form:first() fieldset.visible button').click(function() {
		if(validateForm1()){
	 	 $(this).css('display','none');
		}
	});

	// Validate part1 of Second form

	$('form:last() fieldset.visible button').click(function() {
		if(validateForm2()){
	 	 $(this).css('display','none');
		}
	});

}

$(on_site_load);

// function Form(container) {
// 	var self = this;

// 	self.container = container;
// 	self.fields = null;
// 	self.first_section = $('<div class="first">');
// 	self.second_section = $('<div class="second">');
// 	self.goBtn = $('<input type="button" value="GO">');
// 	self.backBtn = $('<input type="button" value="BACK">');

// 	self._init = function() {
// 		self.fields = self.container.find('label');
// 		console.log(self.fields);

// 		for(var i = 0, length = self.fields.length; i <= length; i++) {
// 			var field = self.fields.eq(i);

// 			field.detach();
// 			if (i <= 5)
// 				field.appendTo(self.first_section); else
// 				field.appendTo(self.second_section);
// 		}

// 		self.goBtn.addClass('btn').appendTo(self.container.find('div.controls'));
// 		self.goBtn.click(self._handle_next);
// 		self.backBtn.addClass('backBtn').appendTo(self.container.find('div.controls'));
// 		self.backBtn.click(self._handle_back);

// 		self.container.prepend(self.second_section);
// 		self.container.prepend(self.first_section);
// 	};

// 	/**
// 	 * Handle clicking on next button.
// 	 *
// 	 * @param object event
// 	 */
// 	self._handle_next = function(event){
// 		self.first_section.animate({left: '100%'}, 300);
// 		self.second_section.animate({left: '0%'}, 300, function() {
// 			self.backBtn.animate({opacity: '1'});
// 			self.goBtn.animate({display: 'none',});
// 			self.container.find('div.controls button').css('z-index','1');
// 		});
// 	};

// 	/**
// 	 * Handle clicking on previous button.
// 	 *
// 	 * @param object event
// 	 */
// 	self._handle_back = function(event) {
// 		self.second_section.animate({left: '100%'}, 300);
// 		self.first_section.animate({left: '0%'}, 300, function() {
// 			self.backBtn.animate({opacity: '0'});
// 			self.goBtn.animate({opacity: '1'});
// 			self.container.find('div.controls button').css('z-index','0');
// 		});
// 	};

// 	// finalize object
// 	self._init();
// }
