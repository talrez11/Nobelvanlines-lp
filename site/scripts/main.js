/**
 * Main JavaScript
 * Site Name
 *
 * Copyright (c) 2014. by Way2CU, http://way2cu.com
 * Authors:
 */

var Caracal = Caracal || {};

function on_site_load() {

 	Caracal.slides = new PageControl('div#slides', 'div.slide');

	// configure page control for sliders
	Caracal.slides
				.setInterval(5000)
				.setWrapAround(true);

	//form configuration
	var container=$('<div class="first">');
	var container2=$('<div class="second">');

	$('form label').eq(0).detach().appendTo(container);
	$('form label').eq(1).detach().appendTo(container);
	$('form label').eq(2).detach().appendTo(container);
	$('form label').eq(3).detach().appendTo(container);
	$('form label').eq(4).detach().appendTo(container);
	$('form label').eq(5).detach().appendTo(container);


	$('form label').eq(6).detach().appendTo(container2);
	$('form label').eq(7).detach().appendTo(container2);
	$('form label').eq(8).detach().appendTo(container2);
	$('form label').eq(9).detach().appendTo(container2);

	$(container).appendTo('form');
	$(container2).appendTo('form');


}

$(on_site_load);
