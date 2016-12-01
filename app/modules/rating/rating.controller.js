(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('rating')
		.controller('RatingController', Rating);

	/* @ngInject */
	function Rating() {
		/*jshint validthis: true */
		var vm = this;
		
		vm.rate = 7;
		vm.max = 10;
		vm.isReadonly = false;
		
		vm.hoveringOver = function(value) {
			vm.overStar = value;
			vm.percent = 100 * (value / vm.max);
		};
		
		vm.ratingStates = [
			{stateOff: 'fi-aperture'},
			{stateOn: 'fi-audio-spectrum', stateOff: 'fi-clock'},
			{stateOn: 'fi-home', stateOff: 'fi-infinity'},
			{stateOn: 'fi-pin'},
			{stateOn: 'fi-lightbulb', stateOff: 'fi-globe'}
		];
		
	}

})();
