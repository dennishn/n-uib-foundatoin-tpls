(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('nFoundationAnimationExperiment')
		.animation('.anim-exp-dropdown', AnimExpDropdown);

	/* @ngInject */
	function AnimExpDropdown() {
		/*jshint validthis: true */
		var animationDefinition = {
			addClass: addClass,
			removeClass: removeClass
		};

		return animationDefinition;

		function addClass(element, className, done) {
			
			var pane = element.find('.dropdown-pane');
			var body = $('body');
			
			var tl = new TimelineMax({onComplete: done});
			
			tl.to(pane, .1, {
				ease: Power1.easeIn,
				rotationX: 0,
			}).to(body, .1, {
				ease: Power1.easeIn,
				css: {scale: 1.01}
			}, 0.05).to(body, .02, {
				ease: Power1.easeOut,
				css: {scale: 1}
			}, .2);
		}
		
		function removeClass(element, className, done) {
			
			var pane = element.find('.dropdown-pane');
			
			var t = TweenMax.to(pane, 1, {
				rotationX: -90,
				onComplete: done
			});
			
		}
	}

})();
