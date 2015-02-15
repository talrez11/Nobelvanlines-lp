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

	// Google Autocomplete




	$('a.arrow.next').click(function(event) {
		$(this).css('backgroundColor','#f5911d');
		$('a.arrow.previous').css('backgroundColor','#94a4a5');
		$('div.form_container form:first()').css('display','block');
		$('div.form_container form:last()').css('display','none');
		$('div#slides div.inner_wrap div.inner_form div.greeting').css('z-index','-1');
		$('div#slides div.inner_wrap div.inner_form div.greeting').css('opacity','0');

	});

	$('a.arrow.previous').click(function(event) {
		$(this).css('backgroundColor','#f5911d');
		$('a.arrow.next').css('backgroundColor','#94a4a5');
		$('div.form_container form:first()').css('display','none');
		$('div.form_container form:last()').css('display','block');
		$('div#slides div.inner_wrap div.inner_form div.greeting').css('z-index','-1');
		$('div#slides div.inner_wrap div.inner_form div.greeting').css('opacity','0');
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
			$('fieldset input[name="date"]').css('border','1px solid red');
			return false;
		}

		if(select == null || select == "" ) {
			$('fieldset select[name="home_size"]').css('border','1px solid red');
			return false;
		}

		Caracal.Form1.nextPage();
		$('form:first() button[name="btn"]').css('opacity','0');
		$('form:first() div.controls').css('display','block');
		$('form:first() button[name="btnBack"]').css('opacity','1');

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
			$('fieldset input[name="country_date"]').css('border','1px solid red');
			return false;
		}

		if(select == null || select == "" ) {
			$('fieldset select[name="country_home_size"]').css('border','1px solid red');
			return false;
		}

		Caracal.Form2.nextPage();
		$('form:last() button[name="btn1"]').css('opacity','0');
		$('form:last() div.controls').css('display','block');
		$('form:last() button[name="btnBack"]').css('opacity','1');

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

	// Form1 Back Btn
	$('form:first() button[name="btnBack"]').click(function(event) {
		Caracal.Form1.previousPage();
		$(this).css('opacity','0');
		$('button[name="btn"]').css('opacity','0');
	});

	// Form2 Back Btn
	$('form:last() button[name="btnBack"]').click(function(event) {
		Caracal.Form2.previousPage();
		$(this).css('opacity','0');
		$('button[name="btn"]').css('opacity','0');
	});

	// Form Close

	$('form:first()').on('dialog-show', function() {
			$('form').hide();
			$('div.send').hide();
			$('div.inner_form div.greeting').css('opacity','1');
			$('div.inner_form div.greeting').css('z-index','2');
			return false;
		});
	$('form:last()').on('dialog-show', function() {
			$('form').hide();
			$('div.send').hide();
			$('div.inner_form div.greeting').css('opacity','1');
			$('div.inner_form div.greeting').css('z-index','2');
			return false;
		});

}

$(on_site_load);


