/**
 * Main JavaScript
 * Nobelvanlins-lp
 *
 * Copyright (c) 2015. by Way2CU, http://way2cu.com
 * Authors:
 */

// create or use existing site scope
var Site = Site || {};

// make sure variable cache exists
Site.variable_cache = Site.variable_cache || {};


/**
 * Check if site is being displayed on mobile.
 * @return boolean
 */
Site.is_mobile = function() {
	var result = false;

	// check for cached value
	if ('mobile_version' in Site.variable_cache) {
		result = Site.variable_cache['mobile_version'];

	} else {
		// detect if site is mobile
		var elements = document.getElementsByName('viewport');

		// check all tags and find `meta`
		for (var i=0, count=elements.length; i<count; i++) {
			var tag = elements[i];

			if (tag.tagName == 'META') {
				result = true;
				break;
			}
		}

		// cache value so next time we are faster
		Site.variable_cache['mobile_version'] = result;
	}

	return result;
};

/**
 * Function called when document and images have been completely loaded.
 */
Site.on_load = function() {
	Caracal.Form1 = new PageControl('form:first()', 'fieldset');
	Caracal.Form2 = new PageControl('form:last()', 'fieldset');
 	Caracal.slides = new PageControl('div#slides', 'div.slide');
 	$('div.form_container form:first()').css('display','block');
 	$('div.form_container form:last()').css('display','none');
 	$('a.arrow.next').css('backgroundColor','#f29b11');
 	$('a.arrow.next').css('color','black');


	$('a.arrow.next').click(function(event) {
		$(this).css('backgroundColor','#f29b11');
		$(this).css('color','black');
		$('a.arrow.previous').css('backgroundColor','#ebeff0');
		$('div.form_container form:first()').css('display','block');
		$('div.form_container form:last()').css('display','none');
		$('div#slides div.inner_wrap div.inner_form div.greeting').css('z-index','-1');
		$('div#slides div.inner_wrap div.inner_form div.greeting').css('opacity','0');

	});

	$('a.arrow.previous').click(function(event) {
		$(this).css('backgroundColor','#f29b11');
		$(this).css('color','black');
		$('a.arrow.next').css('backgroundColor','#ebeff0');
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
		$('form:first() button[name="btn"]').css('visibility','hidden');
		$('form:first() div.controls button').css('display','block');
		$('form:first() button[name="btnBack"]').css('opacity','1');
		$('form:first() button[name="btnBack"]').css('visibility','visible');

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
		$('form:last() div.controls button').css('display','block');
		$('form:last() button[name="btnBack"]').css('opacity','1');
		$('form:last() button[name="btnBack"]').css('visibility','visible');

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
		$(this).css('visibility','hidden');
		$('form:first() div.controls button').css('display','none');
		$('button[name="btn"]').css('opacity','1');
		$('button[name="btn"]').css('visibility','visible');
	});

	// Form2 Back Btn
	$('form:last() button[name="btnBack"]').click(function(event) {
		Caracal.Form2.previousPage();
		$(this).css('opacity','0');
		$(this).css('visibility','hidden');
		$('form:last() div.controls button').css('display','none');
		$('button[name="btn1"]').css('opacity','1');
		$('button[name="btn1"]').css('visibility','visible');
	});


	//  checkbox function
	function checked() {
		var input  = $(this);
		if(input.is(':checked')) {
			$('form:first() fieldset:first-of-type label:nth-of-type(3)')
															.css('visibility','visible')
															.css('opacity','1');
		} else {
			$('form:first() fieldset:first-of-type label:nth-of-type(3)')
															.css('visibility','hidden')
															.css('opacity','0');
		}
	}

	function checked2() {
		var input  = $(this);
		if(input.is(':checked')) {
			$('form:last() fieldset:first-of-type label:nth-of-type(3)')
															.css('visibility','visible')
															.css('opacity','1');
		} else {
			$('form:last() fieldset:first-of-type label:nth-of-type(3)')
															.css('visibility','hidden')
															.css('opacity','0');
		}
	}

	$('input[name="extra_stop"]').on('click',checked);
	$('input[name="country_extra_stop"]').on('click',checked2);




	// Form Close

	$('form:first()').on('dialog-show', function() {
			$('form').hide();
			$('div.send').hide();
			$('div.inner_form div.greeting').css('opacity','1');
			$('div.inner_form div.greeting').css('z-index','1');
			$('div.form_menu').css('opacity','0')
							  .css('visibility','hidden');
			return false;
		});
	$('form:last()').on('dialog-show', function() {
			$('form').hide();
			$('div.send').hide();
			$('div.inner_form div.greeting').css('opacity','1');
			$('div.inner_form div.greeting').css('z-index','1');
			$('div.form_menu').css('opacity','0')
							  .css('visibility','hidden');
			return false;
		});

	if (Site.is_mobile()) {

		$('form:first()').on('dialog-show', function() {
			$('form').hide();
			$('div.send').hide();
			$('div.inner_form div.greeting').css('opacity','1');
			$('div.inner_form div.greeting').css('z-index','1');
			$('div.form_menu').css('opacity','0')
							  .css('visibility','hidden');
			$('div.inner_form div.form_container').css('height','0px');
			$(window).scrollTop(0);

			return false;
		});

		$('form:last()').on('dialog-show', function() {
			$('form').hide();
			$('div.send').hide();
			$('div.inner_form div.greeting').css('opacity','1');
			$('div.inner_form div.greeting').css('z-index','1');
			$('div.form_menu').css('opacity','0')
							  .css('visibility','hidden');
		    $('div.inner_form div.form_container').css('height','0px');
		    $(window).scrollTop(0);
			return false;
		})

	}

}

// connect document `load` event with handler function
$(Site.on_load);
