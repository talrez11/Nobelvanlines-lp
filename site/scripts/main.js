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

}

$(on_site_load);
