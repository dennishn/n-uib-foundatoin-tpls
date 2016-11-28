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
		.animation('.anim-exp-modal', AnimExpModal);

	/* @ngInject */
	function AnimExpModal($animateCss) {
		/*jshint validthis: true */
		var animationDefinition = {
			enter: enter,
			//leave: leaveFn,
			//move: moveFn,
			//addClass: addClassFn,
			//removeClass: removeClassFn,
			//animate: animateFn
		};

		return animationDefinition;

		function enter(element) {
			console.log('enter');
			var height = element[0].offsetHeight;
			
			return $animateCss(element, {
				// event: 'enter',
				// structural: true,
				from: { height: 0 },
				to: { height: height + 'px' },
				duration: 5
			});
		}
	}

})();
