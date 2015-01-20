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

	//form configuration
	var container=$('<div class="first">');
	var container2=$('<div class="second">');
	var goBtn=$('<input type="button" value="GO">');
	var backBtn=$('<input type="button" value="BACK">');

		for(var i=0;i<=5;i++)
			$('form label').eq(0).detach().appendTo(container);

		goBtn.addClass('btn').appendTo('div.controls');

		goBtn.click(function(event) {
			$('form div.first').animate({left:'100%'},300);
			$('form div.second').animate({left:'0%'},300,function(){
				backBtn.animate({opacity:'1'});
				goBtn.animate({opacity:'0'});
				$('form div.controls button').animate({opacity:'1'});
			});


		});

		for(var i=0;i<=4;i++)
			$('form label').eq(0).detach().appendTo(container2);
		backBtn.addClass('backBtn').appendTo('div.controls');

		backBtn.click(function(event) {
			$('form div.second').animate({left:'100%'},300);
			$('form div.first').animate({left:'0%'},300,function(){
			  backBtn.animate({opacity:'0'});
			  goBtn.animate({opacity:'1'});
			  $('form div.controls button').animate({opacity:'0'});
			});
		});

		container2.prependTo('form');
		container.prependTo('form');

		// $('form div.second').show();


}

$(on_site_load);
